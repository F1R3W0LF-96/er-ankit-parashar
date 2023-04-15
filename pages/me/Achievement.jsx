import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Pagination]);

const achievements = [
  {
    title: "Achievement 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Achievement 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Achievement 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Achievement 4",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const AchievementsSection = () => {
  const swiperOptions = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <section className="bg-gray-100 pt-10 pb-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center">
          My Achievements
        </h2>
        <div className="relative">
          <Swiper {...swiperOptions}>
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 flex justify-center">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700  flex justify-center">
                    {achievement.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination  bottom-0 left-0 w-full h-6 mt-4" />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
