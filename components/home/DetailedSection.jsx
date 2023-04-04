import React from "react";
import styles from "@/styles/DetailedSection.module.css";
import Image from "next/image";
import pic from "@/public/assets/images/my_pic.jpeg";
import File from "@/public/assets/images/menu/file-text.svg";
import RightArrow from "@/public/assets/images/direction/right-arrow.svg";

function DetailedSection() {
  return (
    <div className={styles.detailedWrapper}>
      <section id={styles.about}>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h2>Ankit Parashar</h2>
            <div className={styles.tagline}>Senior Software Engineer</div>
            <div
              className={styles.bio}
            >{`I'm a software engineer specialised in frontend and
             backend development for complex scalable web apps. 
             I write about software development on my blog. 
             Want to know how I may help your project?
              Check out my project portfolio and online resume.`}</div>
            <div className="flex">
              <button class="rounded bg-red-400 p-3 mr-2 text-white font-bold flex text-center items-center	">
                <RightArrow
                  style={{ height: "30px", width: "30px", paddingRight: "5px" }}
                />
                View Portfolio
              </button>
              <button class="rounded bg-gray-600 p-3 text-white font-bold flex text-center items-center	">
                <File
                  style={{ height: "30px", width: "30px", paddingRight: "5px" }}
                />{" "}
                View Resume
              </button>
            </div>
          </div>
          <div>
            <Image src={pic} alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailedSection;
