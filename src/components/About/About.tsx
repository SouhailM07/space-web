import "./about.css";
// mui
import { Card, CardContent, Typography } from "@mui/material";
// assets
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "/wave Gif.gif";

export default function About() {
  interface arrOfCards_type {
    icon: any;
    imgTitle: string;
    title: string;
    txt: string;
  }
  const arrOfCards: arrOfCards_type[] = [
    {
      icon: <FaReact className="text-7xl " fill="white" />,
      imgTitle: "HST",
      title: "300-1500km",
      txt: "Used for astronomical observations,capturing stunning images of the universe",
    },
    {
      icon: <FaShuttleSpace className="text-7xl " fill="white" />,
      imgTitle: "ISS",
      title: "500-1500km",
      txt: "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    },
    {
      icon: <FaSpaceAwesome className="text-7xl " fill="white" />,
      imgTitle: "GPS",
      title: "300-1500km",
      txt: "Part of the Global Positioning System (GPS) used for navigation",
    },
  ];

  return (
    <>
      <section id="About" className=" m-auto max-w-[80rem] ">
        <ul className="grid place-items-center gap-y-[2rem]">
          {arrOfCards.map((e, i) => {
            return (
              <Card
                className="!text-white min-h-[30rem] text-center items-center flex flex-col !bg-sky-900/60 w-[22rem] py-[2rem] space-y-[1rem] !rounded-3xl !relative z-[1]"
                key={i}
              >
                <div className="">{e.icon}</div>
                <Typography variant="h4">{e.imgTitle}</Typography>
                <Typography variant="h4">{e.title}</Typography>
                <CardContent className="!px-[3rem]">
                  <Typography variant="h6">{e.txt}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </ul>
        <div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-[9rem] relative z-[0]"
          />
        </div>
      </section>
    </>
  );
}
