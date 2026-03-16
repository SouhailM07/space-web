import "./navbar.css";
import { useState, createContext } from "react";
import { AppBar, Toolbar, Stack } from "@mui/material";
import { NavbarMobile } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
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
        <AppBar position="sticky" className="!bg-transparent !shadow-none py-2">
          <Toolbar className="justify-between glass mx-4 lg:mx-20 rounded-2xl px-6" component="nav">
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex space-x-[1rem] items-center text-[1.5rem] font-display tracking-wider"
            >
              <img src={nav_logo} alt="logo" className="w-[2.5rem] hover:rotate-[360deg] transition-transform duration-700" />
              <p className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent font-bold">TJC-SPACE</p>
            </motion.section>

            <Stack
              role="list"
              className="text-[1rem] max-md:!hidden font-sans uppercase tracking-[0.2em]"
              component="ul"
              direction="row"
              spacing="3rem"
            >
              {arrOfLinks.map((e, i) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="cursor-pointer hover:text-accent-cyan transition-colors relative group"
                    role="listitem"
                    key={i}
                  >
                    <a href={`#${e}`}>{e}</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
                  </motion.li>
                );
              })}
            </Stack>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-x-[1.5rem] items-center"
            >
              <button className="btn-outline text-sm uppercase tracking-widest">
                Login
              </button>
              <img
                className="hidden max-md:block h-[1.8rem] w-[1.8rem] cursor-pointer hover:scale-110 transition-transform"
                src={menubar_logo}
                alt="logo"
                aria-label="toggle menubar"
                role="button"
                onClick={handleToggle}
              />
            </motion.div>
          </Toolbar>
          <AnimatePresence>
            {toggleMenuBar && <NavbarMobile />}
          </AnimatePresence>
        </AppBar>
      </ToggleContext.Provider>
    </>
  );
}
