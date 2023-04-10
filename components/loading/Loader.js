import React, { useState } from "react";
import styles from "@/styles/Loader.module.css";
import Image from "next/image";
import loader1 from "@/public/assets/images/3D coffee cup.gif";
import loader2 from "@/public/assets/images/3D Yin-yang.gif";
import loader3 from "@/public/assets/images/Billiard ball.gif";
import loader4 from "@/public/assets/images/Drink in glass.gif";
import loader5 from "@/public/assets/images/Dutch windmill.gif";
import loader6 from "@/public/assets/images/Filled gears.gif";
import loader7 from "@/public/assets/images/Realistic Christmas tree.gif";
import loader8 from "@/public/assets/images/Running dog.gif";
import loader9 from "@/public/assets/images/Santa and deers.gif";
import loader10 from "@/public/assets/images/Spinning airplane.gif";
import loader11 from "@/public/assets/images/Spinning snowman.gif";
import loader12 from "@/public/assets/images/Tree on wind.gif";
import loader13 from "@/public/assets/images/Virus (Bacteriophage).gif";
import loader14 from "@/public/assets/images/Weather vane.gif";
import loader15 from "@/public/assets/images/Witch on broom.gif";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  const loaderImages = [
    loader1,
    loader2,
    loader3,
    loader4,
    loader5,
    loader6,
    loader7,
    loader8,
    loader9,
    loader10,
    loader11,
    loader12,
    loader13,
    loader14,
    loader15,
  ];
  let [color, setColor] = useState("#36d7b7");
  // const [currentDay, setcurrentDay] = useState(pickNumber());

  // function pickNumber() {
  //   return Math.floor(Math.random() * 15) + 1;
  // }
  // console.log(">>>>>> " + currentDay);
  return (
    <div className={styles.loadermain}>
      <HashLoader
        color={color}
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <Image
        src={loaderImages[currentDay]}
        alt={"loader"}
        id={`${loaderImages[currentDay]}`}
        height={100}
        width={100}
      /> */}
    </div>
  );
}

export default Loader;
