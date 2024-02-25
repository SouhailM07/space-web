import "./land.css";
// assets
import land_img from "/moon-surface-hd.png";

export default function Land() {
  return (
    <>
      <div className="text-white relative self-end z-[2] translate-x-[-4rem]">
        <img src={land_img} alt="" />
      </div>
    </>
  );
}
