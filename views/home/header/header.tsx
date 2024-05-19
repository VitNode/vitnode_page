import { Star, Check } from "lucide-react";
import Link from "next/link";

import { cn } from "@/functions/classnames";
import { BackgroundHome } from "./background";
import { Button, buttonVariants } from "@/components/ui/button";
import { VideoHome } from "./video";

export const HeaderHome = () => {
  return (
    <div className="w-full md:min-h-[50rem] relative flex items-center justify-center py-32 overflow-hidden -mt-16 bg-card">
      <BackgroundHome className="absolute" />
      <div className="absolute bg-primary rounded-full size-60 blur-[12rem]" />

      <div className="container z-10 flex flex-col items-center lg:my-20 my-10 max-w-[80rem] gap-10">
        <div className="max-w-[44rem] flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 bg-muted-foreground/10 py-2 px-4 rounded-md font-medium">
            <Check className="size-5" />
            <span>100% Free & Open-source</span>
          </div>

          <h1 className="sm:text-6xl text-4xl font-bold will-change-auto">
            Explore the Possibilities of{" "}
            <span className="text-primary relative">Imagination</span>
          </h1>

          <p className="text-muted-foreground mt-6 sm:text-xl text-base font-light">
            Ship fast, scale faster with our Control Management System (CMS)
            build with NextJS & NestJS.
          </p>

          <div className="flex mt-10 flex-wrap items-center justify-center flex-1">
            <Button className="px-8 sm:h-14 text-lg font-medium" size="lg">
              Get Started
            </Button>
            <Link
              href="https://github.com/aXenDeveloper/vitnode"
              className={cn(
                buttonVariants({
                  className:
                    "px-8 sm:h-14 text-lg font-medium [&>svg]:size-5 hover:bg-transparent hover:text-primary",
                  size: "lg",
                  variant: "ghost"
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star /> Star on GitHub
            </Link>
          </div>
        </div>

        <VideoHome />
      </div>
    </div>
  );
};
