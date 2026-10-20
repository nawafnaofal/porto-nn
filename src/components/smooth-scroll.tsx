"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    if (isInsideModal) return;
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, [isInsideModal]);

  if (isInsideModal) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => {
          const modalOpen =
            (node.classList && typeof node.classList.contains === "function" && node.classList.contains("modall")) ||
            Boolean(node.closest?.(".modall")) ||
            Boolean(node.closest?.("[data-lenis-prevent]"));
          return modalOpen;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
