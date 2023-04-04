import React from "react";
import SideSection from "../home/SideSection";

function Layout({ children }) {
  return (
    <>
      <div class="grid grid-cols-4 ">
        <div class=" ">
          <SideSection />
        </div>
        <div class="col-span-3">{children}</div>
      </div>
    </>
  );
}

export default Layout;
