"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mobileNavConfig } from "./mobile-nav-config";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="navbar"
          className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="rounded-t-3xl">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <MobileLink
              href="/"
              className="flex items-center justify-center pr-4"
              onOpenChange={setOpen}
            >
              <Icons.logo className="mr-2 h-10 w-10 fill-foreground" />
              <span className="font-bold text-2xl">{"TiTo"}</span>
            </MobileLink>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ScrollArea className="my-2 h-[calc(15vh)] pt-2 pb-4">
              <div className="flex flex-col items-center justify-center space-y-6">
                {mobileNavConfig?.mainNav?.map(
                  (item) =>
                    item.href && (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        className="text-xl"
                        onOpenChange={setOpen}
                      >
                        {item.title}
                      </MobileLink>
                    )
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}