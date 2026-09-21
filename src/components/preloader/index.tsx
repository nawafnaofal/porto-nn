"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./loader";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

function Preloader({ children, disabled = false }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const isModelLoaded = useRef(false);

  // Smooth counter animation from 0% towards 100%
  useEffect(() => {
    if (disabled) {
      setIsLoading(false);
      setLoadingPercent(100);
      return;
    }

    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (isModelLoaded.current) {
          return 100;
        }
        // Increment smoothly up to 90% while waiting for the 3D model
        if (prev < 90) {
          const increment = Math.max(1, Math.floor((90 - prev) / 6));
          return Math.min(90, prev + increment);
        }
        return prev;
      });
    }, 80);

    // Fallback timer: ensure loading screen finishes within 3s max
    const fallbackTimer = setTimeout(() => {
      setLoadingPercent(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, [disabled]);

  const bypassLoading = useCallback(() => {
    isModelLoaded.current = true;
    setLoadingPercent(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      loadingPercent,
      bypassLoading,
    }),
    [isLoading, loadingPercent, bypassLoading]
  );

  return (
    <preloaderContext.Provider value={value}>
      <AnimatePresence mode="wait">
        {isLoading && !disabled && <Loader />}
      </AnimatePresence>
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
