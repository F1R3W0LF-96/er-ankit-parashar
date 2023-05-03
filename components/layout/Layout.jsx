import React from "react";
import SideSection from "../home/SideSection";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  console.log("router:", router);
  return (
    <>
      {/* <div class="grid grid-cols-4 "> */}
      {/* <div class=" ">{router.pathname === "/" && <SideSection />}</div> */}
      {/* <div class={`${router.pathname === "/" ? "col-span-3" : "col-span-4"}`}> */}
      {children}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Layout;
