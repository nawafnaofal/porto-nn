"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useGLTF, Center, Html } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import {
  Skill,
  SKILLS,
  BLENDER_OBJECT_MAP,
  PHYSICAL_KEY_MAP,
} from "@/data/constants";
import * as THREE from "three";
import gsap from "gsap";

export type KeyboardModelProps = {
  onSkillHover?: (skill: Skill | null) => void;
  onSkillClick?: (skill: Skill | null) => void;
  onLoad?: () => void;
  activeSection?: string;
  keyboardRef?: React.Ref<THREE.Group>;
};



// ── Keyboard Model Component ───────────────────────────────────────────────
const KeyboardModel = forwardRef<THREE.Group, KeyboardModelProps>(
  ({ onSkillHover, onSkillClick, onLoad, activeSection, keyboardRef }, ref) => {
    const { scene } = useGLTF("/assets/keyboard.glb");
    const groupRef = useRef<THREE.Group>(null);
    const keycapsRef = useRef<THREE.Object3D[]>([]);
    const bounceAnimationsRef = useRef<gsap.core.Tween[]>([]);

    const innerGroupRef = useRef<THREE.Group>(null);

    const clonedScene = useMemo(() => scene.clone(true), [scene]);

    const onLoadRef = useRef(onLoad);
    useEffect(() => {
      onLoadRef.current = onLoad;
    }, [onLoad]);

    // Use passed keyboardRef if available, fallback to standard ref
    useImperativeHandle(keyboardRef || ref, () => groupRef.current!, []);

    // ── 1. Initial staggered keycap reveal ─────────────────────────────────
    useEffect(() => {
      if (!clonedScene) return;
      const keycaps: THREE.Object3D[] = [];
      clonedScene.traverse((child) => {
        if (BLENDER_OBJECT_MAP[child.name]) {
          if (child.userData.originalY === undefined) {
            child.userData.originalY = child.position.y;
          }
          keycaps.push(child);
        }

        // Fix black buttons for github, threejs, unreal
        if (
          child instanceof THREE.Mesh &&
          ["github_btn", "threejs_btn", "unreal_btn"].includes(child.name)
        ) {
          if (Array.isArray(child.material)) {
            // Clone the base material and set it to white so the black logos are visible
            const baseMat = child.material[0].clone();
            baseMat.color.setHex(0xffffff);
            child.material = [baseMat, child.material[1]];
          } else {
            const mat = child.material.clone();
            mat.color.setHex(0xffffff);
            child.material = mat;
          }
        }
      });
      keycapsRef.current = keycaps;

      if (!innerGroupRef.current) return;

      // Base scale
      innerGroupRef.current.scale.set(0.35, 0.35, 0.35);

      let hasFiredOnLoad = false;
      const fireOnLoadOnce = () => {
        if (!hasFiredOnLoad) {
          hasFiredOnLoad = true;
          onLoadRef.current?.();
        }
      };

      // Notify parent immediately that model is loaded
      fireOnLoadOnce();

      // Silky smooth scale reveal with natural deceleration
      gsap.fromTo(
        innerGroupRef.current.scale,
        { x: 0.1, y: 0.1, z: 0.1 },
        {
          x: 0.35,
          y: 0.35,
          z: 0.35,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Smooth float up into resting position
      gsap.fromTo(
        innerGroupRef.current.position,
        { y: -0.6 },
        {
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Subtle keycap ripple wave settling smoothly into place
      keycaps.forEach((keycap, idx) => {
        gsap.fromTo(
          keycap.position,
          { y: keycap.userData.originalY + 0.35 },
          {
            y: keycap.userData.originalY,
            duration: 0.55,
            delay: 0.15 + idx * 0.01,
            ease: "power2.out",
          }
        );
      });
    }, [clonedScene]);

    // ── 2. Contact section: staggered elastic keycap float animation ─────────
    // Mirrors original: y: Math.random()*200+200, delay: idx*0.6, elastic.out(1,0.3)
    useEffect(() => {
      const keycaps = keycapsRef.current;

      if (activeSection === "contact") {
        bounceAnimationsRef.current.forEach((t) => t.kill());

        // Shuffle randomly (same as original .sort(() => Math.random() - 0.5))
        const shuffled = [...keycaps].sort(() => Math.random() - 0.5);
        bounceAnimationsRef.current = shuffled.map((key, idx) => {
          const floatY =
            key.userData.originalY + (Math.random() * 0.6 + 0.35);
          return gsap.to(key.position, {
            y: floatY,
            duration: Math.random() * 1.5 + 1.5,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1, 0.3)",
          });
        });
      } else {
        // Stop and return to resting positions
        bounceAnimationsRef.current.forEach((t) => t.kill());
        bounceAnimationsRef.current = [];
        keycaps.forEach((key) => {
          gsap.to(key.position, {
            y: key.userData.originalY,
            duration: 2,
            ease: "elastic.out(1, 0.8)",
          });
        });
      }

      return () => {
        bounceAnimationsRef.current.forEach((t) => t.kill());
      };
    }, [activeSection]);

    const getSkillFromObject = (name: string): Skill | null => {
      const skillName = BLENDER_OBJECT_MAP[name];
      return skillName ? SKILLS[skillName] : null;
    };

    // Raycasts may land on a child mesh rather than the named GLB node. Walk up
    // the scene graph so every visible part of a key behaves as one keycap.
    const getKeycapFromObject = (object: THREE.Object3D) => {
      let current: THREE.Object3D | null = object;
      while (current) {
        if (BLENDER_OBJECT_MAP[current.name]) return current;
        current = current.parent;
      }
      return null;
    };

    const pressKeycap = (keycap: THREE.Object3D) => {
      if (keycap.userData.originalY === undefined) return;
      gsap.to(keycap.position, {
        y: keycap.userData.originalY - 0.65,
        duration: 0.08,
        ease: "power2.in",
        overwrite: "auto",
      });
    };

    const releaseKeycap = (keycap: THREE.Object3D) => {
      if (keycap.userData.originalY === undefined) return;
      gsap.to(keycap.position, {
        y: keycap.userData.originalY,
        duration: 0.2,
        ease: "back.out(2)",
        overwrite: "auto",
      });
    };

    const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      if (activeSection !== "skills") return;
      const keycap = getKeycapFromObject(e.object);
      const skill = keycap ? getSkillFromObject(keycap.name) : null;
      if (skill && keycap) {
        pressKeycap(keycap);
        onSkillHover?.(skill);
        document.body.style.cursor = "pointer";
      }
    };

    const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      if (activeSection !== "skills") return;
      const keycap = getKeycapFromObject(e.object);
      if (keycap) releaseKeycap(keycap);
      onSkillHover?.(null);
      document.body.style.cursor = "default";
    };

    const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      // Animation is now handled on hover
    };

    const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      if (activeSection !== "skills") return;
      const keycap = getKeycapFromObject(e.object);
      const skill = keycap ? getSkillFromObject(keycap.name) : null;
      if (skill) {
        onSkillClick?.(skill);
      }
    };

    // ── 3. Physical keyboard typing → 3D keycap press ───────────────────────
    useEffect(() => {
      if (activeSection !== "skills") return;

      const pressDown = (names: string[]) => {
        keycapsRef.current.forEach((mesh) => {
          if (names.includes(mesh.name)) {
            pressKeycap(mesh);
            const skill = getSkillFromObject(mesh.name);
            if (skill) onSkillHover?.(skill);
          }
        });
      };

      const pressUp = (names: string[]) => {
        keycapsRef.current.forEach((mesh) => {
          if (names.includes(mesh.name)) releaseKeycap(mesh);
        });
      };

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.repeat) return;
        const targets = PHYSICAL_KEY_MAP[e.key.toLowerCase()];
        if (targets) pressDown(targets);
      };
      const onKeyUp = (e: KeyboardEvent) => {
        const targets = PHYSICAL_KEY_MAP[e.key.toLowerCase()];
        if (targets) {
          pressUp(targets);
          onSkillHover?.(null);
        }
      };
      const releaseAll = () => {
        keycapsRef.current.forEach(releaseKeycap);
        onSkillHover?.(null);
      };

      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
      window.addEventListener("blur", releaseAll);
      return () => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
        window.removeEventListener("blur", releaseAll);
        releaseAll();
      };
    }, [activeSection, onSkillHover]);

    return (
      <>


        {/* Keyboard: controlled via ref by animated-background parent */}
        <group
          ref={(node) => {
            // @ts-ignore
            groupRef.current = node;
            if (keyboardRef && "current" in keyboardRef) {
              (keyboardRef as React.MutableRefObject<THREE.Group | null>).current = node;
            }
            if (typeof ref === "function") {
              ref(node);
            } else if (ref && "current" in ref) {
              (ref as React.MutableRefObject<THREE.Group | null>).current = node;
            }
          }}
        >
          <group ref={innerGroupRef} scale={[0.35, 0.35, 0.35]}>
            <Center>
              <primitive
                object={clonedScene}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
              />
              {activeSection === "projects" && (
                <Html
                  position={[1.5, 0.1, -1.2]}
                  center
                  transform
                  sprite
                  zIndexRange={[100, 0]}
                >
                  <img
                    src="/assets/bongocat.gif"
                    alt="Bongo Cat"
                    style={{
                      width: "120px",
                      pointerEvents: "none",
                      userSelect: "none",
                      transform: "translateY(-72%)" // Adjusted to overlap paws onto keys
                    }}
                  />
                </Html>
              )}
            </Center>
          </group>
        </group>
      </>
    );
  }
);

KeyboardModel.displayName = "KeyboardModel";

useGLTF.preload("/assets/keyboard.glb");

export default KeyboardModel;
