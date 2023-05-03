import React, { useState } from "react";
import styles from "@/styles/DetailedSection.module.css";
import Image from "next/image";
import pic from "@/public/assets/images/my_pic.jpeg";
import File from "@/public/assets/images/menu/file-text.svg";
import RightArrow from "@/public/assets/images/direction/right-arrow.svg";
import { toast } from "react-toastify";

function DetailedSection() {
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
            <Image src={pic} alt="image" className="mb-5" />
            <div class="w-full max-w-xs">
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
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    type="text"
                    placeholder="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div class="flex items-center justify-between">
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
              <p class="text-center text-gray-500 text-xs">
                &copy;2020 Anky Corp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailedSection;
