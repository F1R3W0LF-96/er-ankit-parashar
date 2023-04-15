import React from "react";
// Import Swiper SolidJS components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import javascript from "../../public/assets/images/technology/javascript/icons8-javascript-144.png";

const techStack = [
  {
    name: "JavaScript",
    logo: javascript,
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else ",
  },
  {
    name: "React",
    logo: "",
    description:
      " In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. ",
  },
  {
    name: "Node.js",
    logo: "",
    description:
      "Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.  ",
  },
  {
    name: "Angular",
    logo: "",
    description:
      " AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.",
  },
  {
    name: "Bootstrap",
    logo: "",
    description:
      " Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.",
  },
  {
    name: "CSS",
    logo: "",
    description:
      "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts.  ",
  },
  {
    name: "Material UI",
    logo: "",
    description:
      "It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box. ",
  },
  {
    name: "Tailwind",
    logo: "",
    description:
      "Tailwind is a CSS framework that provides us with single-purpose utility classes which are opinionated for the most part, and which help us design our web pages from right inside our markup or . js/. jsx/. ",
  },
  {
    name: "Redux",
    logo: "",
    description:
      "Redux simply provides a subscription mechanism which can be used by any other code. ",
  },
  // Add more tech stack items here
];
function WorkingIn() {
  return (
    <>
      <Swiper
        // spaceBetween={30}

        centeredSlides={true}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {techStack.map((tech) => {
          return (
            <>
              <SwiperSlide>
                <div style={{ height: "200px" }}>{tech.name}</div>
              </SwiperSlide>
            </>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default WorkingIn;
