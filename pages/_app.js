import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
