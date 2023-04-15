import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-black text-lg font-bold">ANKIT PARASHAR</a>
        </Link>
        <div className="flex items-center">
          <div className="flex md:hidden">
            {menuOpen ? (
              <button
                type="button"
                className="text-black hover:text-secondary focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            ) : (
              <button
                type="button"
                className="text-black hover:text-secondary focus:outline-none"
                onClick={() => setMenuOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            )}
          </div>
          <div className={`md:flex ${menuOpen ? "flex" : "hidden"}`}>
            <Link href="/about" legacyBehavior>
              <a className="text-black block md:inline-block md:mt-0 mr-4 hover:text-secondary">
                About
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-black block md:inline-block md:mt-0 mr-4 hover:text-secondary">
                Contact
              </a>
            </Link>
            <Link href="/hire-me" legacyBehavior>
              <a className="text-black block md:inline-block md:mt-0 mr-4 hover:text-secondary">
                Hire Me
              </a>
            </Link>
            <Link href="/portfolio" legacyBehavior>
              <a className="text-black block md:inline-block md:mt-0 hover:text-secondary">
                Portfolio
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
