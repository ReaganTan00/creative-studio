import Link from "next/link"

import { Icons } from "../icons"
import { cn } from "@/lib/utils"

export function AppNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex-row hidden md:flex", className)}
      {...props}
    >
      <div className="flex flex-row w-full items-center justify-center">
        <Link href="/app">
          <Icons.logo className="mr-2 h-2 w-2 fill-foreground" />
        </Link>
        <p className="text-center font-bold">
          Creative Studio
        </p>
      </div>
    </nav>
  )
}