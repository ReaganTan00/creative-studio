import { SidebarNav } from "@/components/common/sidebar-nav";
import { UserHeader } from "@/components/common/user-header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'TiTo App',
  description: 'TikTok&apos;s asset generator.',
}


const sidebarNavItems = [
  {
    title: "Home",
    href: "/app",
  },
  {
    title: "Library",
    href: "/app/library",
  }
]

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <aside className="-mx-4 lg:w-1/5 md:py-12 py-4 px-4 md:px-0">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex-1 w-full pb-12">{children}</div>

    </>
  );
}
