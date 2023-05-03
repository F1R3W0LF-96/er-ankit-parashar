import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <nav
      id={styles.navbar}
      className={`bg-primary py-6 navbar-wrapper ${styles.fixed} ${
        scrolled && styles.scrolled
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-lg font-bold hover:border-b-2 hover:border-black hover:border-opacity-50">
            ANKIT PARASHAR
          </a>
        </Link>
        <div className="flex items-center">
          <div className="flex md:hidden">
            {menuOpen ? (
              <button
                type="button"
                className="text-white hover:text-secondary focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            ) : (
              <button
                type="button"
                className="text-white hover:text-secondary focus:outline-none"
                onClick={() => setMenuOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            )}
          </div>
          <div className={`md:flex ${menuOpen ? "flex" : "hidden"}`}>
            <Link href="#about" legacyBehavior>
              <a className="text-white font-bold  block md:inline-block md:mt-0 mr-4 hover:border-b-2 hover:border-black hover:border-opacity-50">
                About
              </a>
            </Link>
            <Link href="tel:701-888-8060" legacyBehavior>
              <a
                className="text-white font-bold  block md:inline-block md:mt-0 mr-4 hover:border-b-2 hover:border-black hover:border-opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:701-888-8060";
                }}
              >
                Contact
              </a>
            </Link>
            <Link href="/hire-me" legacyBehavior>
              <a className="text-white font-bold  block md:inline-block md:mt-0 mr-4 hover:border-b-2 hover:border-black hover:border-opacity-50">
                Hire Me
              </a>
            </Link>
            <Link href="#footer" legacyBehavior>
              <a className="text-white font-bold  block md:inline-block md:mt-0 hover:border-b-2 hover:border-black hover:border-opacity-50">
                Portfolio
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
