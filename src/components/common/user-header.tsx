import Link from "next/link";

import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";
import { buttonVariants } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function UserHeader() {
  return (
    <header className="z-50 fixed md:sticky bottom-0 md:top-0 left-0 right-0 md:px-48 px-4 shadow flex flex-row py-4 items-center justify-between transition-all ease-in-out delay-250 h-14 border-t md:border-b border-gray-200 bg-white/40 backdrop-blur-lg">        
    <MainNav />
      <div className="flex flex-row md:w-1/4 w-full md:space-x-2 space-x-0 md:pb-0 md:justify-end justify-around">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default", size: "navbar" }),
            "font-bold"
          )}
        >
          <LogOut className="h-[1.2rem] w-[1.2rem] md:hidden flex" />
          <p className="hidden md:flex">Logout</p>
        </Link>
      </div>
    </header>
  );
}