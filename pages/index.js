import Seo from "@/components/seo/Seo";
import HomePage from "@/components/home/Home";
import Me from "./me";

export default function Home() {
  return (
    <>
      <Seo>
        {/* <HomePage /> */}
        <Me />
      </Seo>
    </>
  );
}
