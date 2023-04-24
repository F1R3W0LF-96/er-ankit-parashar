import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowDownIcon } from "@heroicons/react/solid";
import reactimage from "@/public/assets/images/technology/react/react.png";
import nextimage from "@/public/assets/images/technology/nextjs-icon.png";
import tailwindimage from "@/public/assets/images/technology/tailwind/tailwind.png";
import angularimage from "@/public/assets/images/technology/angular/angular.png";
import bootstrapimage from "@/public/assets/images/technology/bootstrap/bootstrap.png";
import cssimage from "@/public/assets/images/technology/css/css.png";
import javascriptimage from "@/public/assets/images/technology/javascript/javascript.png";
import materialuiimage from "@/public/assets/images/technology/material/materialui.png";
import nodeimage from "@/public/assets/images/technology/node/node.png";
import reduximage from "@/public/assets/images/technology/redux/redux.png";
import sassimage from "@/public/assets/images/technology/sass/sass.png";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const technologies = [
  {
    name: "Javascript",
    icon: <Image src={javascriptimage} alt="React" height={40} width={40} />,
    description:
      "JavaScript is a scripting language for creating dynamically updating content, and pretty much",
  },
  {
    name: "React",
    icon: <Image src={reactimage} alt="React" height={40} width={40} />,
    description:
      "A JavaScript library for building user interfaces & its JavaScript-based UI development library. ",
  },
  {
    name: "Redux",
    icon: <Image src={reduximage} alt="Next.js" height={60} width={60} />,
    description:
      "Redux helps you write applications that behave consistently, run in different environments",
  },
  {
    name: "Next.js",
    icon: <Image src={nextimage} alt="Next.js" height={60} width={60} />,
    description:
      "Next.js is a React framework that gives you building blocks to create web applications.",
  },
  {
    name: "Angular.js",
    icon: <Image src={angularimage} alt="Next.js" height={60} width={60} />,
    description:
      "AngularJS framework written in JavaScript. AngularJS is used as a JavaScript file",
  },
  {
    name: "Node.js",
    icon: <Image src={nodeimage} alt="Next.js" height={60} width={60} />,
    description:
      "Node.js is an open source server environment.It runs on various platforms ",
  },

  {
    name: "CSS",
    icon: <Image src={cssimage} alt="Tailwind CSS" height={60} width={60} />,
    description:
      "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
  },
  {
    name: "SASS",
    icon: <Image src={sassimage} alt="Tailwind CSS" height={60} width={60} />,
    description:
      "Sass lets you use features that do not exist in CSS, like variables, nested rules, etc.",
  },

  {
    name: "Bootstrap",
    icon: (
      <Image src={bootstrapimage} alt="Tailwind CSS" height={60} width={60} />
    ),
    description:
      "Bootstrap is CSS Framework for responsive and mobile-first websites. ",
  },
  {
    name: "Material UI ",
    icon: (
      <Image src={materialuiimage} alt="Tailwind CSS" height={60} width={60} />
    ),
    description:
      "Material UI is React component library that implements Google's Material Design",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Image src={tailwindimage} alt="Tailwind CSS" height={60} width={60} />
    ),
    description:
      "A utility-first CSS framework with classes that can be composed to build any design",
  },
];

const TechnologySlider = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 justify-center items-center flex">
          Technologies I Work With
        </h2>
        <div className="mt-8">
          <Swiper
            className="mySwiper"
            direction="horizontal"
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            slidesPerView={3}
          >
            {technologies.map((technology) => (
              <SwiperSlide key={technology.name}>
                <div className="flex items-center bg-white p-10 rounded-lg mr-5 h-50 ">
                  <div className="flex-shrink-0">{technology.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {technology.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {technology.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="text-center mt-8">
        <a
          href="#about"
          className="inline-flex items-center justify-center p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
        >
          <span>Learn more</span>
          <ArrowDownIcon className="h-5 w-5 ml-2" aria-hidden="true" />
        </a>
      </div> */}
    </div>
  );
};

export default TechnologySlider;
