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
      <UserHeader />
      <main className="px-4 md:px-24 lg:px-48">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {children}
        </div>
      </main>
    </>
  );
}
