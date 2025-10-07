"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/components/constants";

const MobileNav = () => {
  const pathname = usePathname(); // ✅ call the function
  const router = useRouter();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();        // sign out first
    router.push("/sign-in"); // then redirect manually
  };

  return (
    <header className="header flex items-center justify-between p-4">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
            />
          </SheetTrigger>

          <SheetContent className="sheet-content sm:w-64 p-4">
            <Image
              src="/assets/images/logo-text.svg"
              alt="logo"
              width={152}
              height={23}
              className="mb-4"
            />

            <ul className="header-nav_elements flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex items-center gap-2 p-2 text-dark-700 ${
                      isActive ? "gradient-text" : ""
                    }`}
                  >
                    <Link
                      href={link.route}
                      className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}

              {/* Sign Out Section */}
              <li className="mt-4 flex flex-col gap-2">
                <UserButton /> {/* Optional: Clerk user menu */}
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
