import Link from "next/link"

import Image from "next/image"
import { Icons } from "./icons"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex-row hidden md:flex", className)}
      {...props}
    >
      <div className="flex flex-row w-full items-center lg:space-x-8 space-x-4 lg:space-y-3 space-y-1">
        <Link href="/">
          <Icons.logo className="mr-2 h-2 w-2 fill-foreground" />
        </Link>

        <Link
          href="/features"
          className="font-bold transition-colors hover:text-primary pb-2"
        >
          Features
        </Link>
        <Link
          href="/contact"
          className="font-bold transition-colors hover:text-primary pb-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}