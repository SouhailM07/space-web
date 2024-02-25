import "./navbarmobile.css";
// hooks
import { useContext } from "react";
import { ToggleContext } from "../Navbar/Navbar";
// mui
import { Stack } from "@mui/material";
// assets
import close_logo from "/xmark-solid.svg";

export default function NavbarMobile() {
  const arrOfLinks: string[] = ["About", "Technology", "Galaxy", "Satellite"];
  const { setToggleMenuBar }: any = useContext(ToggleContext);
  const handleClose = () => setToggleMenuBar(false);
  return (
    <>
      <div className="absolute h-[20rem] text-center bg-[#4b5563d4] top-0 z-[99] w-full">
        <div className="flex justify-end p-4">
          <img
            src={close_logo}
            alt="logo"
            role="button"
            aria-label="close menubar"
            className="h-[2rem] w-[2rem]"
            onClick={handleClose}
          />
        </div>
        <Stack
          className="text-[1.2rem]"
          component="ul"
          direction="column"
          spacing="2rem"
          role="list"
        >
          {arrOfLinks.map((e, i) => {
            return (
              <li role="listitem" key={i}>
                <a href={`#${e}`}>{e}</a>
              </li>
            );
          })}
        </Stack>
      </div>
    </>
  );
}
