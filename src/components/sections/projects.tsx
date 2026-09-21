"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ProjectsSection = () => {
  const [pageState, setPageState] = React.useState({ page: 0, direction: 0 });
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const setPage = (newPage: number) => {
    setPageState((prev) => ({
      page: newPage,
      direction: newPage > prev.page ? 1 : -1,
    }));
  };

  const nextPage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (pageState.page < totalPages - 1) {
      setPage(pageState.page + 1);
    }
  };

  const prevPage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (pageState.page > 0) {
      setPage(pageState.page - 1);
    }
  };

  const displayedProjects = projects.slice(
    pageState.page * ITEMS_PER_PAGE,
    (pageState.page + 1) * ITEMS_PER_PAGE
  );

  return (
    <section id="projects" className="relative z-10 max-w-7xl mx-auto min-h-screen py-16 overflow-hidden">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-10"
          )}
        >
          Projects
        </h2>
      </Link>

      {/* Animated Sliding Grid Container */}
      <div className="relative min-h-[660px] w-full px-4 overflow-hidden">
        <AnimatePresence initial={false} custom={pageState.direction} mode="wait">
          <motion.div
            key={pageState.page}
            custom={pageState.direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 28 },
              opacity: { duration: 0.25 },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full"
          >
            {displayedProjects.map((project) => (
              <Modall key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls: Side-to-Side Buttons & Dots indicator */}
      {totalPages > 1 && (
        <div className="relative z-40 flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 px-4 pointer-events-auto">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prevPage}
              disabled={pageState.page === 0}
              className={cn(
                "cursor-can-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-medium transition-all duration-200 border select-none active:scale-95",
                pageState.page === 0
                  ? "opacity-30 border-zinc-800 text-zinc-600 cursor-not-allowed bg-zinc-950/40"
                  : "border-zinc-700 bg-zinc-900/90 text-white hover:bg-zinc-800 hover:border-zinc-400 hover:shadow-cyan-500/10 shadow-lg cursor-pointer"
              )}
              aria-label="Previous Page"
            >
              &larr; Previous
            </button>

            {/* Pagination indicator dots */}
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-inner">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPage(idx);
                  }}
                  className={cn(
                    "cursor-can-hover h-2.5 rounded-full transition-all duration-300",
                    pageState.page === idx
                      ? "w-8 bg-white shadow-sm"
                      : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
                  )}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextPage}
              disabled={pageState.page === totalPages - 1}
              className={cn(
                "cursor-can-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-medium transition-all duration-200 border select-none active:scale-95",
                pageState.page === totalPages - 1
                  ? "opacity-30 border-zinc-800 text-zinc-600 cursor-not-allowed bg-zinc-950/40"
                  : "border-zinc-700 bg-zinc-900/90 text-white hover:bg-zinc-800 hover:border-zinc-400 hover:shadow-cyan-500/10 shadow-lg cursor-pointer"
              )}
              aria-label="Next Page"
            >
              Next &rarr;
            </button>
          </div>

          <span className="text-xs font-mono text-zinc-400">
            Page {pageState.page + 1} of {totalPages} ({projects.length} Total Projects & Publications)
          </span>
        </div>
      )}
    </section>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-stretch justify-center w-full h-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full p-0 text-left h-full">
          <div className="flex flex-col w-full max-w-[420px] h-[310px] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm shadow-xl group-hover/modal-btn:border-zinc-600 transition-all duration-300">
            {/* 16:9 Thumbnail Area - Uniform fixed aspect ratio */}
            <div className="relative w-full aspect-video flex-shrink-0 overflow-hidden bg-zinc-950">
              <Image
                className="w-full h-full object-cover group-hover/modal-btn:scale-[1.05] transition-transform duration-500 ease-out"
                src={project.src}
                alt={project.title}
                width={640}
                height={360}
                quality={90}
              />
            </div>

            {/* Dedicated Text Space Below - Uniform height & comfortable breathing room */}
            <div className="p-3.5 pb-3 flex flex-col justify-start flex-1 gap-1">
              <div className="text-[11px] font-mono font-medium tracking-wide bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 rounded-md w-fit px-2 py-0.5 line-clamp-1">
                {project.category}
              </div>
              <h3 className="text-sm font-semibold text-white group-hover/modal-btn:text-zinc-200 transition-colors line-clamp-2 leading-snug">
                {project.title}
              </h3>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
