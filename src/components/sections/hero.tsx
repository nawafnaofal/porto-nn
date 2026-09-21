import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          <>
            <div className="">
              <BlurIn delay={0.1}>
                <p
                  className={cn(
                    "md:self-start mt-4 font-bold text-md text-zinc-400 ml-3",
                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap"
                  )}
                >
                  Hi, I am
                  <br className="md:hidden" />
                </p>
              </BlurIn>
              <BlurIn delay={0.2}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1
                      className={cn(
                        "font-black text-6xl text-white ml-1 text-left",
                        "cursor-default font-display sm:text-7xl md:text-9xl tracking-tight"
                      )}
                    >
                      {config.author.split(" ")[0]}
                      <br className="md:block hiidden" />
                      {config.author.split(" ")[1]}
                      {/* PLEASE hello??

                        <br className="md:block hiidden" />
                        UNMUTE ME 😢😢 */}
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="dark:bg-white dark:text-black"
                  >
                    theres something waiting for you in devtools
                  </TooltipContent>
                </Tooltip>
              </BlurIn>
              {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
              <BlurIn delay={0.3}>
                <p
                  className={cn(
                    "md:self-start md:mt-4 font-bold text-md text-zinc-400 ml-3",
                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap"
                  )}
                >
                  Web Developer | Game Developer
                </p>
              </BlurIn>
            </div>
            <div className="mt-8 md:ml-2 flex flex-col gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex-1 w-full cursor-pointer">
                    <BoxReveal delay={0.4} width="100%">
                      <Button className="flex items-center gap-2 w-full">
                        <File size={24} />
                        <p>Resume</p>
                      </Button>
                    </BoxReveal>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 border-none bg-zinc-950/80 backdrop-blur-xl">
                  <iframe
                    src="/nawaf-cv.pdf"
                    className="w-full h-full rounded-lg"
                    title="Resume PDF"
                  />
                </DialogContent>
              </Dialog>
              <div className="md:self-start flex gap-3">
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href={"#contact"}>
                      <Button
                        variant={"outline"}
                        className="block w-full overflow-hidden"
                      >
                        Hire Me
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>pls 🥹 🙏</p>
                  </TooltipContent>
                </Tooltip>
                <Link
                  href={config.social.github}
                  target="_blank"
                >
                  <Button variant={"outline"}>
                    <SiGithub size={24} />
                  </Button>
                </Link>
                <Link
                  href={config.social.linkedin}
                  target="_blank"
                >
                  <Button variant={"outline"}>
                    <SiLinkedin size={24} />
                  </Button>
                </Link>
              </div>
            </div>
          </>
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
