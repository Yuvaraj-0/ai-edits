"use client"
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {navLinks} from '@/components/constants'

import {useClerk} from "@clerk/nextjs"
// Authentication components will be added later

const MobileNav = () => {
  const pathname = usePathname

  const { signOut } = useClerk();
  return (
    <header className="header">
        <Link href='/' className="flex items-center gap-2 md:py-2">
        <Image
            src='/assets/images/logo-text.svg'
            alt='logo'
            width={180}
            height={28}
            />
        </Link> 
        <nav className="flex gap-2">
            <Sheet>
              <UserButton />
  <SheetTrigger>
    <Image 
    src="/assets/icons/menu.svg"
    alt="menu"
    width={32}
    height={32}
    />
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
    <>
    <Image
    src='/assets/images/logo-text.svg'
    alt='logo'
    width={152}
    height={23}
    />
                <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname
                  
                  return(
                    <li 
                    className={`${isActive &&
                      'gradient-text'
                    } p-18 flex whitespace-nowrap text-dark-700
                    `}
                    key={link.route}>
                     <Link className="sidebar-link cursor-pointer
                     hover:text-blue-600 transition-colors duration-200" href={link.route}>
                     <Image 
                     src={link.icon}
                     alt="logo"
                     width={24}
                     height={24}
                     />
                     {link.label}
                     </Link>
                      
                    </li>
                  )
                })}
                <li>
                 
                <h1 className="p-4">

                <UserButton/>
                <button
      onClick={() => signOut(() => window.location.href = "/sign-in")}
      className="px-4 py-2 bg-red-500 text-white rounded-md"
    >
      Sign Out
    </button>
                </h1>
                </li>
              </ul>
    </>
    
  </SheetContent>
</Sheet>

        </nav>

    </header>
  )
}

export default MobileNav