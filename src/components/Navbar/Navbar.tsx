import "./navbar.css";
// hooks
import { useState, createContext } from "react";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// components
import { NavbarMobile } from "../../components";
// assets
import nav_logo from "/logo.png";
import menubar_logo from "/bars-solid.svg";

export const ToggleContext: any = createContext("");

export default function Navbar() {
  let [toggleMenuBar, setToggleMenuBar] = useState<boolean>(false);
  const arrOfLinks: string[] = ["About", "Technology", "Galaxy", "Satellite"];
  const handleToggle = () => {
    setToggleMenuBar(true);
  };

  return (
    <>
      <ToggleContext.Provider value={{ toggleMenuBar, setToggleMenuBar }}>
        <AppBar position="sticky" className="!bg-transparent">
          <Toolbar className="justify-between font-medium" component="nav">
            <div className="flex space-x-[1rem] items-center text-[1.8rem]">
              <img src={nav_logo} alt="logo" className="w-[3rem]" />
              <p>TJC-SPACE</p>
            </div>
            <img
              className="hidden max-md:block h-[2rem] w-[2rem]"
              src={menubar_logo}
              alt="logo"
              aria-label="toggle menubar"
              role="button"
              onClick={handleToggle}
            />
            <Stack
              className="text-[1.2rem]  max-md:!hidden"
              component="ul"
              direction="row"
              spacing="2rem"
            >
              {arrOfLinks.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </Stack>
            <button className="px-[1.2rem] py-[0.6rem] rounded-xl text-white border-2 border-white">
              Login
            </button>
          </Toolbar>
          {toggleMenuBar && <NavbarMobile />}
        </AppBar>
      </ToggleContext.Provider>
    </>
  );
}
