import "./land.css";
// assets
import land_img from "/moon-surface-hd.webp";

export default function Land() {
  return (
    <>
      <section className="text-white left-0 w-full self-end absolute z-[2] translate-x-[-4rem]">
        <img src={land_img} alt="img" className="max-h-[20rem] w-full " />
        <div className="w-full h-[4rem] translate-y-[-4rem]  bg-gradient-to-t absolute from-black to-transparent translate-x-[4rem]"></div>
      </section>
    </>
  );
}
