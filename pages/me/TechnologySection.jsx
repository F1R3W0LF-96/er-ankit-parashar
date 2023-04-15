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
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "React",
    icon: <Image src={reactimage} alt="React" height={40} width={40} />,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Redux",
    icon: <Image src={reduximage} alt="Next.js" height={60} width={60} />,
    description:
      "A React framework for building server-side rendered applications.",
  },
  {
    name: "Next.js",
    icon: <Image src={nextimage} alt="Next.js" height={60} width={60} />,
    description:
      "A React framework for building server-side rendered applications.",
  },
  {
    name: "Angular.js",
    icon: <Image src={angularimage} alt="Next.js" height={60} width={60} />,
    description:
      "A React framework for building server-side rendered applications.",
  },
  {
    name: "Node.js",
    icon: <Image src={nodeimage} alt="Next.js" height={60} width={60} />,
    description:
      "A React framework for building server-side rendered applications.",
  },

  {
    name: "CSS",
    icon: <Image src={cssimage} alt="Tailwind CSS" height={60} width={60} />,
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    name: "SASS",
    icon: <Image src={sassimage} alt="Tailwind CSS" height={60} width={60} />,
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },

  {
    name: "Bootstrap",
    icon: (
      <Image src={bootstrapimage} alt="Tailwind CSS" height={60} width={60} />
    ),
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    name: "Material UI ",
    icon: (
      <Image src={materialuiimage} alt="Tailwind CSS" height={60} width={60} />
    ),
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Image src={tailwindimage} alt="Tailwind CSS" height={60} width={60} />
    ),
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
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
                <div className="flex items-center">
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
