import React from "react";
import styles from "@/styles/Me.module.css";
import Navbar from "./Navbar";
import TechnologySection from "./TechnologySection";
import HeroSection from "./Hero";
import AchievementsSection from "./Achievement";
import Footer from "./Footer";
import Pricing from "./Pricing";
// import video_url from "../../public/assets/video/bgvideo.mov";

function Me() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.technology_bg}>
        {/* <video className={styles.video} autoPlay loop muted>
          <source src={video_url} type="video/mov" />
          <source src={video_url} type="video/webm" />
          Your browser does not support the video tag.
        </video> */}
        <TechnologySection />
        <AchievementsSection />
      </div>

      <Pricing />
      <Footer />
    </>
  );
}

export default Me;
