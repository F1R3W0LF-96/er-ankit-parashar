import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wolf from "@/public/assets/images/wolfp.png";
import styles from "@/styles/Gsap.module.css";
import Image from "next/image";

const Index = () => {
  useEffect(() => {
    const image = document.getElementById("brand-logo");
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "center center",
        end: "bottom center",
        markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl1.to(image, { translateX: 400, opacity: 1 });

    const brandName = document.getElementById("brandName");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "bottom center",
        markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl2.to(brandName, { translateX: -500, rotationZ: 0 });
  }, []);
  return (
    <main className={styles.main_wrapper}>
      <div className={styles.content}>
        <div
          className={`pin-spacer pin-spacer-hero-header ${styles.hero_header}`}
        >
          <section
            id={styles.hero_header}
            className={`flex min-h-screen overflow-hidden `}
          >
            <div className="container px-5 md:px-0 relative mx-auto flex items-center w-full">
              <div className="md:w-full z-10">
                <h1
                  id={`brandName`}
                  className={`relative inline-block text-5xl uppercase font-bold text-black   ${styles.brandName}`}
                >
                  Its ME
                </h1>
                <h2
                  id={styles.brandTagline}
                  className="relative text-xl text-gray-500 pl-3 border-l-4 border-gray-800"
                >
                  We Build, World Use
                </h2>
              </div>
              <div className={`absolute top-0 w-full h-full image-container`}>
                <div className="absolute top-1/2 -translate-y-1/2 left-32"></div>
                <div className="absolute hidden md:inline-block brand-logo left-1/3 top-1/2 -translate-y-1/2 text-gray-700 ">
                  <Image
                    className={styles.image}
                    id="brand-logo"
                    alt={"wolf"}
                    src={wolf}
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>{" "}
      </div>
    </main>
    // <div className={styles.container} ref={containerRef}>
    //   <Image
    //     ref={imageRef}
    //     className={styles.image}
    //     alt={"test"}
    //     src={wolf}
    //     height={300}
    //     width={300}
    //   />
    // </div>
  );
};

export default Index;
