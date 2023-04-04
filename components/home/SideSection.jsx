import React from "react";
import styles from "@/styles/SideSection.module.css";
import Image from "next/image";
import profilepic from "@/public/assets/images/profile_pic.jpeg";
import Twitter from "@/public/assets/images/social/twitter.svg";
import LinkedIn from "@/public/assets/images/social/linkedin.svg";
import Codepen from "@/public/assets/images/social/codepen.svg";
import Github from "@/public/assets/images/social/github.svg";
import Stackoverflow from "@/public/assets/images/social/stackoverflow.svg";
import Blog from "@/public/assets/images/menu/blog.svg";
import Laptop from "@/public/assets/images/menu/code-laptop.svg";
import Briefcase from "@/public/assets/images/menu/briefcase.svg";
import Contact from "@/public/assets/images/menu/contact.svg";
import File from "@/public/assets/images/menu/file-text.svg";
import Profile from "@/public/assets/images/menu/profile.svg";
import Setting from "@/public/assets/images/menu/setting.svg";
import Plane from "@/public/assets/images/menu/plane.svg";

import { Button } from "@nextui-org/react";

function SideSection() {
  return (
    <div className={styles.sidewrapper}>
      <div className={styles.name_section}>
        <h1 className={styles.user_name}>Ankit Parashar</h1>
      </div>
      <Image
        src={profilepic}
        className={`${styles.rounded_circle} content_center`}
        height={150}
        width={150}
        alt="profile_pic"
      />
      <div className={styles.profile_description}>
        {`Hi, my name is Ankit Parashar and I'm a senior software engineer. Welcome to my personal website!`}
      </div>
      <div className={`${styles.social_icon_wrapper} divide-y`}>
        <div>
          <ul>
            <li>
              <Twitter className={styles.social_icon} />
            </li>
            <li>
              <LinkedIn className={styles.social_icon} />
            </li>
            <li>
              <Github className={styles.social_icon} />
            </li>
            <li>
              <Stackoverflow className={styles.social_icon} />
            </li>
            <li>
              <Codepen className={styles.social_icon} />
            </li>
          </ul>
        </div>
        <div className={styles.section_links}>
          <ul>
            <li>
              {" "}
              <Profile className={styles.menu_icon} />
              About Me
            </li>
            <li>
              {" "}
              <Laptop className={styles.menu_icon} />
              Portfolio
            </li>
            <li>
              {" "}
              <Briefcase className={styles.menu_icon} />
              Services & Pricing
            </li>
            <li>
              {" "}
              <File className={styles.menu_icon} />
              Resume
            </li>
            <li>
              {" "}
              <Blog className={styles.menu_icon} />
              Blog
            </li>
            <li>
              {" "}
              <Contact className={styles.menu_icon} />
              Contact
            </li>
            <li>
              {" "}
              <Setting className={styles.menu_icon} />
              More Pages
            </li>
          </ul>
          <Button>
            {" "}
            <Plane className={styles.menu_icon} />
            Hire Me
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SideSection;
