// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";

import "@splidejs/react-splide/css";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const SlideShow = ({ images }: { images: string[] }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <Splide
      options={{
        autoplay: "true",
        perPage: 1,
        start: 0,
        rewind: true,
        padding: { left: "3rem", right: "3rem" },
        gap: "1rem",
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <Dialog>
              <DialogTrigger
                className="relative block w-full rounded-lg overflow-hidden group cursor-zoom-in border border-zinc-700/40 hover:border-zinc-500 transition-colors"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Image
                  src={image}
                  alt="screenshot"
                  width={1200}
                  height={675}
                  className="w-full rounded-lg h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-mono text-sm tracking-wide backdrop-blur-[2px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="px-3 py-1.5 rounded-md bg-zinc-900/90 border border-zinc-700/80 shadow-lg flex items-center gap-2">
                        🔍 Klik untuk perbesar
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] h-[92vh] max-h-[92vh] !bg-black/95 !border-zinc-800 p-2 sm:p-4 m-0 flex flex-col justify-center items-center rounded-xl shadow-2xl !z-[100] outline-none">
                <DialogHeader className="w-full flex-row items-center justify-between px-2 pb-2 border-b border-zinc-800/80">
                  <DialogTitle className="text-sm font-mono text-zinc-300 truncate max-w-[80vw]">
                    {image.split("/").pop()}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Preview gambar resolusi penuh
                  </DialogDescription>
                </DialogHeader>
                <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden p-2">
                  <Image
                    src={image}
                    alt="screenshot zoom"
                    width={1920}
                    height={1080}
                    quality={100}
                    unoptimized
                    priority
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-md select-none shadow-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};
export default SlideShow;
