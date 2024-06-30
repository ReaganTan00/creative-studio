import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, User } from "lucide-react";
import { AppNav } from "./app-nav/app-nav";
import { AppUserNav } from "./app-nav/app-user-nav";

export function UserHeader() {
  return (
    <header className="z-50 fixed md:sticky bottom-0 md:top-0 left-0 right-0 sm:px-24 md:px-44 px-4 shadow flex flex-row py-4 items-center justify-between transition-all ease-in-out delay-250 h-14 border-t md:border-b border-gray-200 bg-white/40 backdrop-blur-lg">
      <AppNav />
      <div className="flex items-center lg:justify-center flex-row md:w-1/4 w-full md:space-x-2 space-x-0 md:pb-0 md:justify-end justify-around">
        <Link
          href="https://www.tiktok.com/business/en-SG"
          className={cn(
            buttonVariants({ variant: "ghost", size: "navbar" }),
            "w-fit"
          )}
        >
          <p className="hidden md:flex">TikTok for Business</p>
          <ArrowUpRight className="h-[1.3rem] w-[1.3rem] flex" />
        </Link>
        <AppUserNav/>
      </div>
    </header>
  );
}