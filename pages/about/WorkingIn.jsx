import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
const techStack = [
  { name: "JavaScript", logo: "path/to/javascript-logo.svg" },
  { name: "React", logo: "path/to/react-logo.svg" },
  { name: "Node.js", logo: "path/to/nodejs-logo.svg" },
  // Add more tech stack items here
];
function WorkingIn() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {techStack.map((techItem) => (
        <SwiperSlide key={techItem.name}>
          <img src={techItem.logo} alt={techItem.name} />
          <p>{techItem.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default WorkingIn;
