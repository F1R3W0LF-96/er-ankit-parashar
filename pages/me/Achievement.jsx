import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import styles from "@/styles/Achivements.module.css";

SwiperCore.use([Autoplay, Pagination]);

const achievements = [
  {
    title: "Creative Website",
    description:
      "Developed and styled front-end components that met the requirements of mocks and user stories, resulting in successful and visually appealing websites and web applications.",
  },
  {
    title: "Contantly Released on Production",
    description:
      " I have been responsible for managing and processing pull requests for production deployments, ensuring that new features and updates are released accurately and on time. ",
  },
  {
    title: "Understanding Industries Standards",
    description:
      "Demonstrated industry experience in building websites and web applications, showing a strong understanding of web development best practices and standards.",
  },
  {
    title: "Javascript Expert",
    description:
      "As a JavaScript expert, I possess a deep understanding of the language and its various features. I have extensive experience in writing efficient, secure, and scalable code using JavaScript.",
  },
  {
    title: "Wide Technologies Skillset",
    description:
      "Expanded skill set to include React.js, React Native, TypeScript, Node.js, MongoDB, SASS, Web API, Micro-services, and AWS, demonstrating a willingness to learn and adapt to new technologies.",
  },
  {
    title: "Team Handling",
    description:
      "Collaborated effectively with cross-functional teams, including designers, developers, and project managers, to deliver high-quality projects that met or exceeded expectations.",
  },
  {
    title: "Problem Solver",
    description:
      "Proactively identified and solved technical issues, mitigating potential risks and ensuring smooth project delivery with optimum quality alongwith helping others to learn and grow.",
  },
  {
    title: "High Quality Work",
    description:
      "Contributed to the growth and success of the company by consistently delivering high-quality work and contributing to a positive team culture. Managing the client with latest technical information",
  },
  {
    title: "On Time product Delivery",
    description:
      "Successfully delivered projects on-time and within budget, resulting in satisfied clients and stakeholders.With high quality work and providing large customers",
  },
];

const AchievementsSection = () => {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <section
      className="bg-gray-100 pt-10 pb-10 "
      id={styles.achivement_background}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center">
          My Achievements
        </h2>
        <div className="relative w-3/4 justify-center flex items-center mx-auto">
          <Swiper {...swiperOptions}>
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 flex justify-center">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700  flex justify-center text-center">
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
