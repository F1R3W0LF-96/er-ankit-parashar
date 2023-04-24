import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically
library.add(faGithub, faLinkedin); 

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </NextUIProvider>
  );
}
