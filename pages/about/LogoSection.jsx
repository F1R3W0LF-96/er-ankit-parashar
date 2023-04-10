import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wolf from "@/public/assets/images/wolfp.png";
import bubble from "@/public/assets/images/bubbles/bubble.png";
import styles from "@/styles/LogoSection.module.css";
import Image from "next/image";

function LogoSection() {
  useEffect(() => {
    const image = document.getElementById("brand-logo");
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "center center",
        end: "bottom center",
        // markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl1.to(image, { translateX: 400, opacity: 1, delay: 5, duration: 10 });

    const brandName = document.getElementById("brandName");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "bottom center",
        // markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl2.to(brandName, { translateX: -500, rotationZ: 0 });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "bottom center",
        // markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl3.to(brandName, {
      // translateY: -100,
      delay: 20,
      duration: 20,
    });
    const brandTagline = document.getElementById("brandTagline");

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "bottom center",
        // markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl4.to(brandTagline, {
      opacity: 1,
      // translateY: -100,
      delay: 60,
      duration: 20,
      color: "white",
    });
    const big_bubble = document.getElementById("big_bubble");

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "bottom center",
        // markers: true,
        scrub: true, // enable smooth scrubbing
      },
    });
    tl5.to(big_bubble, {
      opacity: 1,
      translateX: -60,
      delay: 60,
      duration: 20,
      rotateZ: 180,
    });
  }, []);
  return (
    <>
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
                    Its Anky
                  </h1>
                  <h2
                    id={`brandTagline`}
                    className={`relative text-xl text-gray-500 pl-3 border-l-4 border-gray-800 ${styles.brandTagline}`}
                  >
                    We create what you love
                  </h2>
                </div>
                <div className={`absolute top-0 w-full h-full image-container`}>
                  <div className="absolute top-1/2 -translate-y-1/2 left-32">
                    <Image
                      id={`big_bubble`}
                      alt="bubble"
                      src={bubble}
                      className={`relative  -left-96 top-0 mr-10 fill-gray-100 ${styles.big_bubble}`}
                      height={900}
                      width={900}
                    />
                  </div>
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
    </>
  );
}

export default LogoSection;
