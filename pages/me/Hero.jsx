import Image from "next/image";
import mypic from "@/public/assets/images/profile_pic-nobg.png";
import styles from "@/styles/Hero.module.css";
import { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MailIcon } from "@heroicons/react/outline";

// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received", res);
      if (res.status === 200) {
        toast.success("Mail sent sucessfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <>
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
                I am a MERN FULL STACK DEVELOPER 💻 , I have in depth knowledge
                of HTML5, CSS3, Vanilla JavaScript, React.js, Node.js,
                Express.js, MongoDB and Git.
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
                  Architectural design for Relational Database Management
                  Systems as well as for NoSQL database systems like MongoDB.
                </li>
                <li>Robust full-stack system design implementation.</li>
                <li>
                  Others : C, C++, JAVA, MY SQL, MOMENT.JS, DOTENV, CUSTOM-ENV,
                  REST API, JWT, AWT, TOASTERS, LOADERS, etc.
                </li>
              </ul>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setOpen(true)}
              >
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <MailIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Contact Me{" "}
                        </Dialog.Title>
                        <div className="mt-2 ">
                          <p className="text-sm text-gray-500">
                            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                              <div className="font-bold mb-5">
                                Hire Me or Contact via Email !!!
                              </div>

                              <div class="mb-4">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="name"
                                >
                                  Username
                                </label>
                                <input
                                  class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                                  id="name"
                                  type="text"
                                  name="name"
                                  placeholder="name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div class="mb-4">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="email"
                                >
                                  Your Email
                                </label>
                                <input
                                  class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                                  id="email"
                                  type="text"
                                  placeholder="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              <div class="mb-4">
                                <label
                                  class="block text-gray-700 text-sm font-bold mb-2"
                                  for="message"
                                >
                                  Message
                                </label>
                                <input
                                  class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                                  id="message"
                                  type="text"
                                  placeholder="message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                />
                              </div>

                              <div class="flex items-center justify-between">
                                <button
                                  type="button"
                                  className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  onClick={() => setOpen(false)}
                                  ref={cancelButtonRef}
                                >
                                  Cancel
                                </button>
                                <button
                                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                  type="button"
                                  onClick={(e) => {
                                    handleSubmit(e);
                                  }}
                                >
                                  Send Mail{" "}
                                </button>
                              </div>
                            </form>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default HeroSection;
