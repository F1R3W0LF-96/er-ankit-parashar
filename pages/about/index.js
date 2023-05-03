import React, { Suspense, useEffect, useState } from "react";
import styles from "@/styles/About.module.css";
import Loader from "@/components/loading/Loader";
import AboutMe from "./AboutMe";

function index() {
  const [loading, setLoading] = useState(false);
  const [showHeaderClass, setShowHeaderClass] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    function handleScroll() {
      // setScrollPosition(window.scrollY);
      if (window.scrollY > 10) {
        setShowHeaderClass(true);
      } else {
        setShowHeaderClass(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <div
            className={`${styles.aboutsection} ${
              loading ? "inactive" : "active"
            }`}
          >
            <div style={{ height: "85px" }}>
              <header
                className={`${styles.header} ${
                  showHeaderClass && styles.header_scroll
                }`}
              >
                <nav className="flex container mx-auto items-center">
                  <span className="logo-text uppercase font-bold text-lg whitespace-nowrap flex items-baseline">
                    Ankit Parashar
                  </span>
                  <ul className="flex ml-16">
                    <li className={`nav-item   ${styles.main_nav_item}`}>
                      <a
                        href="/"
                        className="block py-2 pr-4 pl-3 font-semibold text-gray-800 hover:text-gray-900"
                      >
                        Home
                      </a>
                    </li>
                    <li className={`nav-item    ${styles.main_nav_item}`}>
                      <a
                        href="/about"
                        className="block py-2 pr-4 pl-3 font-semibold text-gray-800 hover:text-gray-900"
                      >
                        About
                      </a>
                    </li>
                    <li className={`nav-item   ${styles.main_nav_item}`}>
                      <a
                        href="/contact"
                        className="block py-2 pr-4 pl-3 font-semibold text-gray-800 hover:text-gray-900"
                      >
                        Contact
                      </a>
                    </li>
                    <li className={`nav-item  ${styles.main_nav_item}`}>
                      <a
                        href="/blog"
                        className="block py-2 pr-4 pl-3 font-semibold text-gray-800 hover:text-gray-900"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
            </div>
            {/* <LogoSection /> */}
          </div>
          <AboutMe />
        </Suspense>
      )}
    </>
  );
}

export default index;
