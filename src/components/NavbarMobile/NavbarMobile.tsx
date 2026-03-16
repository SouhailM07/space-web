import "./navbarmobile.css";
// hooks
import { useContext } from "react";
import { ToggleContext } from "../Navbar/Navbar";
// mui
import { Stack } from "@mui/material";
// assets
import close_logo from "/xmark-solid.svg";
import nav_logo from "/logo.png";
import { motion } from "framer-motion";

export default function NavbarMobile() {
  const arrOfLinks: string[] = ["About", "Technology", "Galaxy", "Satellite"];
  const { setToggleMenuBar }: any = useContext(ToggleContext);
  const handleClose = () => setToggleMenuBar(false);

  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] glass-dark flex flex-col"
    >
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <img src={nav_logo} alt="logo" className="w-8" />
          <span className="font-display font-bold tracking-wider text-xl">TJC-SPACE</span>
        </div>
        <button 
          onClick={handleClose}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="close menu"
        >
          <img
            src={close_logo}
            alt="close"
            className="h-8 w-8 invert"
          />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Stack
          className="text-3xl font-display uppercase tracking-[0.3em] text-center"
          component="ul"
          direction="column"
          spacing={6}
          role="list"
        >
          {arrOfLinks.map((e, i) => (
            <motion.li 
              variants={itemVariants}
              role="listitem" 
              key={i}
              className="hover:text-accent-cyan transition-colors"
            >
              <a href={`#${e}`} onClick={handleClose}>{e}</a>
            </motion.li>
          ))}
        </Stack>
      </div>

      <div className="p-8 text-center border-t border-white/10">
        <p className="text-white/40 text-sm tracking-widest uppercase">
          Exploring the future together
        </p>
      </div>
    </motion.div>
  );
}

