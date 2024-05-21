import { Check } from "lucide-react";
import Link from "next/link";

import { cn } from "@/functions/classnames";
import { BackgroundHome } from "./background";
import { Button, buttonVariants } from "@/components/ui/button";
import { VideoHome } from "./video";

export const HeaderHome = () => {
  return (
    <div className="w-full md:min-h-[50rem] relative flex items-center justify-center py-20 overflow-hidden -mt-16 bg-card">
      <BackgroundHome className="absolute" />
      <div className="absolute bg-primary rounded-full size-60 blur-[12rem]" />

      <div className="container z-10 flex flex-col md:flex-row items-center lg:my-20 my-10 md:gap-32 gap-16">
        <div className="max-w-[44rem] flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6 bg-muted-foreground/10 py-2 px-4 rounded-md font-medium">
            <Check className="size-5" />
            <span>100% Free & Open-source</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Explore the Possibilities of{" "}
            <span className="text-primary relative">Imagination</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-[600px] md:text-xl">
            Ship fast, build fast, scale faster with a powerful and flexible
            content management system (CMS) built with NextJS and NestJS.
          </p>

          <div className="flex mt-10 flex-wrap flex-1 sm:gap-6 gap-2">
            <Button
              className="sm:px-8 sm:h-14 sm:text-lg font-medium"
              size="lg"
            >
              Get Started
            </Button>
            <Link
              href="https://github.com/aXenDeveloper/vitnode"
              className={cn(
                buttonVariants({
                  className: "sm:px-8 sm:h-14 sm:text-lg font-medium",
                  size: "lg",
                  variant: "link"
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </Link>
          </div>
        </div>

        <VideoHome />
      </div>
    </div>
  );
};
