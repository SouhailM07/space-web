import "./footer.css";
// mui
import { Stack } from "@mui/material";
// assets
import gps_logo from "/location-dot-solid.svg";
import email_logo from "/envelope-solid.svg";
import phone_logo from "/phone-solid.svg";
import facebook_logo from "/facebook.svg";
import instagram_logo from "/instagram.svg";
import linkedin_logo from "/linkedin.svg";

/*=====================================================================================*/
// component section
/*=====================================================================================*/
export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-800 relative z-[1] pt-[5rem] pb-[3rem]">
        <Top />
        <hr className="max-w-[80rem]  mx-auto my-[3rem] " />
        <Bottom />
      </footer>
    </>
  );
}

const Top = () => {
  const quickLinks: string[] = ["Home", "About", "Services", "Login"];

  interface contactLinks_type {
    img: string;
    label: string;
  }
  const contactLinks: contactLinks_type[] = [
    { img: gps_logo, label: "Noida, Uttar Pradesh" },
    { img: email_logo, label: "abc@gmail.com" },
    { img: phone_logo, label: "+91 123456789" },
  ];
  return (
    <article className="flex justify-between max-md:flex-col max-md:space-y-[5rem]">
      <section>
        <h1 className="font-bold text-[2.5rem]">Be Ready To Grow</h1>
        <p className="font-medium text-[1.2rem] py-[1rem]">
          Get Exclusive <span className="font-bold">Update</span> straigt to
          your inbox.
        </p>
        <div className="flex">
          <input
            type="text"
            className="w-[20rem] bg-transparent border-[1px] outline-none indent-[1rem]"
            placeholder="Email@example.com"
          />
          <button className="text-white px-[1.5rem] bg-blue-500 py-[0.8rem] rounded-r-md">
            Ok
          </button>
        </div>
      </section>
      <section>
        <h2 className="listTitle">QuickLinks</h2>
        <Stack component="ul" spacing="1rem" className=" listContainer">
          {quickLinks.map((e, i) => {
            return (
              <li key={i} className="hover:font-bold">
                {e}
              </li>
            );
          })}
        </Stack>
      </section>
      <section>
        <h2 className="listTitle">Contact Us</h2>
        <Stack component="ul" spacing="1rem" className=" listContainer">
          {contactLinks.map((e, i) => {
            return (
              <li key={i} className="flex space-x-[1rem] items-center">
                <img src={e.img} alt="logo" className="h-[1.5rem]" />
                <p>{e.label}</p>
              </li>
            );
          })}
        </Stack>
      </section>
    </article>
  );
};

const Bottom = () => {
  let socialLinks: string[] = [instagram_logo, facebook_logo, linkedin_logo];

  return (
    <article className="flex justify-between text-[1.2rem] text-gray-500 items-center max-md:flex-col-reverse">
      <section>copyright © 2024 by TCJ</section>
      <section className="max-lg:my-[2rem]">
        <Stack component="ul" direction="row" spacing="2rem">
          {socialLinks.map((e, i) => {
            return (
              <li key={i}>
                <img src={e} alt="logo" className="h-[3rem]" />
              </li>
            );
          })}
        </Stack>
      </section>
      <Stack component="section" spacing="1rem" direction="row">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </Stack>
    </article>
  );
};
