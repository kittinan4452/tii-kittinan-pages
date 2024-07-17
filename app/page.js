import Image from "next/image";
import Imageprofile from "./componen/Imageprofire";
import Yourself from "./componen/Yourself";
import Abort from "./componen/Abort";
import Skills from "./componen/Skills";
import Experiences from "./componen/Experiences";

export default function Home() {
  return (
    <div className="min-h-[800px] snap-mandatory bg-[#181818]">
      <div id="contentinfo" className="flex  max-md:flex-col items-center justify- mx-auto  max-w-screen-xl  mt-20 p-5  bg-[#262626] rounded-2xl snap-center  shadow-inner drop-shadow-2xl  ">
      <div className="w-full">
      <Imageprofile/>
      </div>
      <div className="w-full">
      <Yourself/></div>
      </div>
      <div id="abortandskills" className="max-md:flex max-md:flex-wrap mx-auto  p-5 items-center max-w-screen-xl bg-[#262626]  shadow-inner drop-shadow-2xl  rounded-2xl mt-10 snap-center">
        <Abort/>
        <Skills/>
      </div>
      <div id="experiences" className="max-md:flex max-md:flex-wrap mx-auto p-5 items-center max-w-screen-xl bg-[#262626]   shadow-inner drop-shadow-2xl  rounded-2xl mt-10 snap-center">
        <Experiences/>
      </div>
      
      
    </div>
  );
}
