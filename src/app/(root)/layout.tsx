import Sidebar from '@/components/shared/Sidebar'
import React from 'react'
import MobileNav from '@/components/shared/MobileNav'
import { ClerkProvider } from "@clerk/nextjs";
const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <ClerkProvider>
    <main className='root'>
        <Sidebar />
        <MobileNav />

        <div className='root-container'>
            <div className='wrapper'>
            {children}
            </div>

        </div>
    </main>
    </ClerkProvider>
  )
}

export default Layout