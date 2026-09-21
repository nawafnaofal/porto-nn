"use client";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skill } from "@/data/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useRouter } from "next/navigation";
import { useLenis } from "@/lib/lenis";
import * as THREE from "three";

import KeyboardModel from "./keyboard-model";

gsap.registerPlugin(ScrollTrigger);

// ─── Scene States ────────────────────────────────────────────────────────────
// These values are tuned to match the original Spline site visual output.
// The Spline scene has an internal pre-tilt (isometric camera).
// In Three.js we replicate: x≈0.7 (forward tilt ~40°), y≈-0.35 (slight left turn)
// which gives the same isometric bottom-right perspective.
const STATES = {
  hero: {
    desktop: {
      // Right-side of screen, large scale, isometric view
      scale: { x: 1, y: 1, z: 1 },
      position: { x: 2.7, y: 0.5, z: 0 },
      rotation: { x: 0.6, y: -0.6, z: 0 },
    },
    mobile: {
      scale: { x: 0.55, y: 0.55, z: 0.55 },
      position: { x: 0, y: -1.5, z: 0 },
      rotation: { x: 0.65, y: -0.35, z: 0 },
    },
  },
  skills: {
    desktop: {
      // Centered, larger, slight extra Y rotation (PI/12 = 15° more)
      scale: { x: 1, y: 1, z: 1 },
      position: { x: -0.1, y: 0.15, z: 0 },
      rotation: { x: 0.68, y: 0.7, z: 0 },
    },
    mobile: {
      scale: { x: 0.75, y: 0.75, z: 0.75 },
      position: { x: 0, y: -0.2, z: 0 },
      rotation: { x: 0.65, y: -0.35 + Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      // Identical to skills so it doesn't move
      scale: { x: 0.8, y: 0.8, z: 0.8 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0.65, y: -0.35, z: 0 },
    },
    mobile: {
      scale: { x: 0.75, y: 0.75, z: 0.75 },
      position: { x: 0, y: -0.2, z: 0 },
      rotation: { x: 0.65, y: -0.35 + Math.PI / 6, z: 0 },
    },
  },
  contact: {
    desktop: {
      // Right side behind the contact form, same isometric view as hero
      scale: { x: 0.8, y: 0.8, z: 0.8 },
      position: { x: 3.2, y: 0, z: 0 },
      rotation: { x: 0.65, y: -0.35, z: 0 },
    },
    mobile: {
      scale: { x: 0.66, y: 0.66, z: 0.66 },
      position: { x: 0, y: -1.2, z: 0 },
      rotation: { x: 0.65, y: -0.35, z: 0 },
    },
  },
};

type Section = "hero" | "skills" | "projects" | "contact";

// ─── Component ───────────────────────────────────────────────────────────────
const AnimatedBackground = () => {
  const { bypassLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const keyboardRef = useRef<THREE.Group>(null);
  const wrapperRef = useRef<THREE.Group>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [isLoaded, setIsLoaded] = useState(false);
  const delayedCallsRef = useRef<gsap.core.Tween[]>([]);

  const keyboardStates = useCallback(
    (section: Section) => STATES[section][isMobile ? "mobile" : "desktop"],
    [isMobile]
  );
  const heroState = keyboardStates("hero");

  // Sync Lenis smooth scroll with GSAP ScrollTrigger
  useLenis(() => {
    ScrollTrigger.update();
  });

  // Set initial hero state on the wrapper immediately on mount
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const heroState = keyboardStates("hero");
    gsap.set(wrapper.scale, heroState.scale);
    gsap.set(wrapper.position, heroState.position);
    gsap.set(wrapper.rotation, heroState.rotation);
  }, [keyboardStates]);

  // Clear skill tooltip on section change
  useEffect(() => {
    if (activeSection !== "skills") setSelectedSkill(null);
  }, [activeSection]);

  // ── Main animation setup ── runs once after GLB model is loaded ────────────
  useEffect(() => {
    if (!isLoaded) return;
    const kbd = keyboardRef.current;
    const wrapper = wrapperRef.current;
    if (!kbd || !wrapper) return;

    // ── Ensure hero state on the wrapper ──────────────────────────────────
    const heroState = keyboardStates("hero");
    gsap.set(wrapper.scale, heroState.scale);
    gsap.set(wrapper.position, heroState.position);
    gsap.set(wrapper.rotation, heroState.rotation);

    let rotateTween: gsap.core.Tween | null = null;
    let resetTween: gsap.core.Tween | null = null;

    const startRotate = () => {
      if (rotateTween) rotateTween.kill();
      if (resetTween) resetTween.kill();
      rotateTween = gsap.to(kbd.rotation, {
        y: `+=${Math.PI * 2}`,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    };

    const stopRotate = () => {
      if (rotateTween) rotateTween.kill();
    };

    const resetInnerRotation = () => {
      if (resetTween) resetTween.kill();
      // Snap to nearest 360 degree rotation to avoid spinning backwards
      const targetY = Math.round(kbd.rotation.y / (Math.PI * 2)) * (Math.PI * 2);
      resetTween = gsap.to(kbd.rotation, {
        x: 0,
        y: targetY,
        z: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    // ── Start hero animations immediately ─────────────────────────────────────
    startRotate();

    // Helper function to animate properties with a constant time, independent of scroll speed
    const addSectionTrigger = (
      section: Section,
      trigger: string,
      start: string,
      end: string,
      prevSection: Section
    ) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: start,
        end: end,
        onEnter: () => {
          setActiveSection(section);
          const state = keyboardStates(section);
          gsap.to(wrapper.scale, { ...state.scale, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(wrapper.position, { ...state.position, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(wrapper.rotation, { ...state.rotation, duration: 0.5, ease: "power2.out", overwrite: "auto" });

          if (section === "hero") {
            startRotate();
          } else {
            stopRotate();
            resetInnerRotation();
          }
        },
        onLeaveBack: () => {
          setActiveSection(prevSection);
          const state = keyboardStates(prevSection);
          gsap.to(wrapper.scale, { ...state.scale, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(wrapper.position, { ...state.position, duration: 0.5, ease: "power2.out", overwrite: "auto" });
          gsap.to(wrapper.rotation, { ...state.rotation, duration: 0.5, ease: "power2.out", overwrite: "auto" });

          if (prevSection === "hero") {
            startRotate();
          } else {
            stopRotate();
            resetInnerRotation();
          }
        },
      });
    };

    // ── Set up individual scroll triggers for each section ─────────────────
    addSectionTrigger("skills", "#skills", "top 50%", "bottom bottom", "hero");
    addSectionTrigger("projects", "#projects", "top 70%", "bottom bottom", "skills");
    addSectionTrigger("contact", "#contact", "top 30%", "bottom bottom", "projects");

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      if (rotateTween) rotateTween.kill();
      if (resetTween) resetTween.kill();
      delayedCallsRef.current.forEach((call) => call.kill());
      delayedCallsRef.current = [];
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoaded, keyboardStates]);

  // ── Called when GLB finishes loading ──────────────────────────────────────
  const handleKeyboardLoad = useCallback(() => {
    setIsLoaded(true);
    bypassLoading();
  }, [bypassLoading]);

  // ── Skill interaction handlers ─────────────────────────────────────────────
  const handleSkillHover = useCallback(
    (skill: Skill | null) => {
      if (activeSection === "skills") setSelectedSkill(skill);
    },
    [activeSection]
  );

  const handleSkillClick = useCallback(
    (skill: Skill | null) => {
      if (activeSection === "skills") setSelectedSkill(skill);
    },
    [activeSection]
  );

  return (
    <>
      {/* ── Skill tooltip overlay ─────────────────────────────────────────── */}
      {selectedSkill && activeSection === "skills" && (
        <div
          className="fixed left-[5%] md:left-[25%] top-1/2 md:top-[42%] -translate-y-1/2 z-20
                     pointer-events-none select-none
                     flex flex-col items-start gap-2
                     transition-all duration-300
                     origin-left -rotate-[30deg]"
        >
          <h3
            className="text-5xl md:text-7xl font-black tracking-widest font-display text-white"
            style={{
              textShadow: `
                1px 1px 0 #333,
                2px 2px 0 #333,
                3px 3px 0 #333,
                4px 4px 0 #333,
                5px 5px 0 #333,
                6px 6px 0 #333,
                7px 7px 0 #333,
                8px 8px 0 #333,
                9px 9px 0 #333,
                10px 10px 0 #333,
                15px 15px 20px rgba(0,0,0,0.8)
              `,
            }}
          >
            {selectedSkill.label}
          </h3>
          <p className="text-lg md:text-2xl text-white font-medium drop-shadow-xl max-w-md">
            {selectedSkill.shortDescription}
          </p>
        </div>
      )}

      {/* ── Three.js Canvas ───────────────────────────────────────────────── */}
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 3]} intensity={1} />

        <group
          ref={wrapperRef}
          position={[heroState.position.x, heroState.position.y, heroState.position.z]}
          rotation={[heroState.rotation.x, heroState.rotation.y, heroState.rotation.z]}
          scale={[heroState.scale.x, heroState.scale.y, heroState.scale.z]}
        >
          <Suspense fallback={null}>
            <KeyboardModel
              keyboardRef={keyboardRef}
              onSkillHover={handleSkillHover}
              onSkillClick={handleSkillClick}
              onLoad={handleKeyboardLoad}
              activeSection={activeSection}
            />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
};

export default AnimatedBackground;
