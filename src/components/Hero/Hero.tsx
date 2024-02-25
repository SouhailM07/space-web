import "./hero.css";
// components
import { Land } from "../../components";
// assets
import space_v from "/earth-bg.mp4";

export default function Hero() {
  return (
    <>
      <div className="min-h-[40rem] mx-auto max-w-[100rem] text-white flex items-center lg:justify-start justify-center lg:text-left text-center ">
        <video
          src={space_v}
          autoPlay
          muted
          loop
          className="w-full fixed top-0  h-full left-0"
        ></video>
        <div className="absolute max-w-[44rem] space-y-[1.5rem] lg:translate-x-[10rem]">
          <h1 className="text-[3rem] font-medium">ORBIT THE EARTH</h1>
          <p className="text-[1.2rem] px-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consequuntur, aut officiis unde obcaecati cumque, illum debitis
            rerum harum, esse molestiae aspernatur expedita quaerat. Aspernatur,
            eaque. Ratione explicabo dignissimos nemo, amet voluptatibus fuga
            fugit eaque voluptas nam ut quasi veritatis.
          </p>
          <button className="bg-blue-500 py-[1rem] px-[1.5rem] rounded-md">
            LEARN MORE
          </button>
        </div>
        <Land />
      </div>
    </>
  );
}
