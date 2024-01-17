import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// assets
import nav_logo from "/logo.png";

export default function Navbar() {
  const arrOfLinks: string[] = ["About", "Technology", "Galaxy", "Satellite"];

  return (
    <>
      <AppBar position="sticky" className="!bg-transparent">
        <Toolbar className="justify-between font-medium" component="nav">
          <div className="flex space-x-[1rem] items-center text-[1.8rem]">
            <img src={nav_logo} alt="logo" className="w-[3rem]" />
            <p>TJC-SPACE</p>
          </div>
          <Stack
            className="text-[1.2rem]"
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
      </AppBar>
    </>
  );
}
