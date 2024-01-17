import "./hero.css";
// assets
import space_v from "/earth-bg.mp4";
// hooks
import { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    let video = document.querySelector("video") as HTMLVideoElement;
    video.play();
  }, []);
  return (
    <>
      <div className="h-[40rem] text-white flex items-center ">
        <video src={space_v} loop className="w-full fixed top-0"></video>
        <div className="absolute max-w-[40rem] space-y-[1.5rem] translate-x-[10rem]">
          <h1 className="text-[3rem] font-medium">ORBIT THE EARTH</h1>
          <p className="text-[1.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur, aut officiis unde obcaecati cumque, illum debitis
            rerum harum, esse molestiae aspernatur expedita quaerat. Aspernatur,
            eaque. Ratione explicabo dignissimos nemo, amet voluptatibus fuga
            fugit eaque voluptas nam ut quasi veritatis.
          </p>
          <button className="bg-blue-500 py-[0.7rem] px-[1.5rem] rounded-lg">
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
}
