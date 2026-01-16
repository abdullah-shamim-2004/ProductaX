import Bannar from "@/Components/Home/Bannar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen font-sans ">
      <section className="w-full md:max-w-10/12 mx-auto">
        <Bannar></Bannar>
      </section>
    </div>
  );
}
