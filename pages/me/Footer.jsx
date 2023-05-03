import React from "react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12" id="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-medium text-gray-400 mb-2">
              Contact Me
            </h2>
            <p className="text-gray-500">
              Feel free to get in touch with me via email or LinkedIn.
            </p>
            <ul className="flex mt-4">
              <li className="mr-4">
                <a
                  href="mailto:ankitparashar700@gmail.com"
                  className="text-gray-400 hover:text-white"
                >
                  ankitparashar700@gmail.com
                </a>
              </li>
              <li>
                <NextLink
                  href="https://in.linkedin.com/in/ankit-parashar-a36a82133"
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </NextLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-400 mb-2">
              Follow Me
            </h2>
            <p className="text-gray-500">
              Connect with me on GitHub and LinkedIn.
            </p>
            <ul className="flex mt-4">
              <li className="mr-4">
                <NextLink
                  href="https://github.com/F1R3W0LF-96"
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">GitHub</span>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="https://in.linkedin.com/in/ankit-parashar-a36a82133"
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <p className="text-gray-500 text-center">
          © 2023 Ankit Parashar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
