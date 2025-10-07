'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {navLinks} from '@/components/constants'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/router";
// Authentication components will be added later
// Button component will be used when authentication is implemented
const Sidebar = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();        // sign out first
    router.push("/sign-in"); // then redirect manually
  };

  return (
    <aside className="sidebar">
      <div className="flex flex-col gap-4 w-full h-full">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={190}
            height={28}
          />
        </Link>
        <nav className='sidebar-nav'>
        <SignedIn>
              <ul className="sidebar-nav_elements">

                {navLinks.slice(0,6).map((link) => {
                  const isActive = link.route === pathname
                  
                  return(
                    
                    <li key={link.route} className={`sidebar-nav_element group ${
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}>
                     <Link className="sidebar-link" href={link.route}>
                     
                     <Image
                     src={link.icon}
                     alt='logo'
                     width={24}
                     height={24}
                     className={`${isActive && 'brightness-500'}`}
                     />
                     {link.label}
                     </Link>
                      
                    </li>
                  )
                })}
                </ul>
                <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname
                  
                  return(
                    <li key={link.route} className={`sidebar-nav_element group ${
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}>
                     <Link className="sidebar-link" href={link.route}>
                     
                     <Image
                     src={link.icon}
                     alt='logo'
                     width={24}
                     height={24}
                     className={`${isActive && 'brightness-500'}`}
                     />
                     {link.label}
                     </Link>
                      
                    </li>
                  )
                })}
               
              </ul>
              <ul>
              
                
                <h1 className="p-4"><UserButton /></h1>
                <button
      onClick={handleSignOut}
      className="px-4 py-2 bg-red-500 text-white rounded-md"
    >
      Sign Out
    </button>
                
              </ul>
              </SignedIn>
              <SignedOut>
                <Button asChild className="button bg-purple-gradient bg-cover">
                  <Link href="/sign-in">
                  Loign</Link>
                </Button>
              </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
