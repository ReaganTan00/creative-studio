import { Icons } from "./icons"

export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
  }
  
  export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[]
  }
  
  export interface MainNavItem extends NavItem {}
  
  export interface SidebarNavItem extends NavItemWithChildren {}


interface MobileNavConfig {
  mainNav: MainNavItem[]
}

export const mobileNavConfig: MobileNavConfig = {
  mainNav: [
    {
      title: "marketplace",
      href: "/#",
    },
    {
      title: "card",
      href: "/card",
    },
    // {
    //   title: "Signup",
    //   href: "/auth/signup",
    // },
    // {
    //   title: "Login",
    //   href: "/auth/login",
    // }
  ],
}