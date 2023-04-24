import Image from "next/image";
import mypic from "@/public/assets/images/profile_pic-nobg.png";
import styles from "@/styles/Hero.module.css";

const HeroSection = () => {
  return (
    <div
      className={`bg-white ${styles.wrapper_image} ${styles.wrapper_styles}`}
      id={"about"}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">
              Hello, I'm Ankit Parashar
            </h1>
            <p
              className={`text-lg md:text-xl text-gray-600 mb-8 ${styles.description}`}
            >
              I am a MERN FULL STACK DEVELOPER 💻 , I have in depth knowledge of
              HTML5, CSS3, Vanilla JavaScript, React.js, Node.js, Express.js,
              MongoDB and Git.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans">
              ⚡Technologies:
            </p>
            <ul className="list-disc list-inside mb-8 text-gray-600 font-sans">
              <li>
                Front-end development using HTML5, CSS3, Vanilla JS, React,
                Redux.
              </li>
              <li>Backend development using Node, Express.</li>
              <li>
                Architectural design for Relational Database Management Systems
                as well as for NoSQL database systems like MongoDB.
              </li>
              <li>Robust full-stack system design implementation.</li>
              <li>
                Others : C, C++, JAVA, MY SQL, MOMENT.JS, DOTENV, CUSTOM-ENV,
                REST API, JWT, AWT, TOASTERS, LOADERS, etc.
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get in touch
            </button>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-12 md:mt-0 flex items-center self-start  hidden md:block">
            <div className="relative h-auto md:h-full rounded-lg overflow-hidden">
              <Image src={mypic} alt="Profile" height={1000} width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
