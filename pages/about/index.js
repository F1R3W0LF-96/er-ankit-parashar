import React, { Suspense, useEffect, useState } from "react";
import styles from "@/styles/About.module.css";
import Loader from "@/components/loading/Loader";
import LogoSection from "./LogoSection";
import WorkingIn from "./WorkingIn";

function index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
            <div>
              <header className={styles.header}>
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

            <LogoSection />
            {/* <WorkingIn /> */}
          </div>
        </Suspense>
      )}
    </>
  );
}

export default index;
