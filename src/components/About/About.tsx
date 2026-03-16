import "./about.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "/wave-Gif.webm";

export default function About() {
  interface arrOfCards_type {
    icon: any;
    imgTitle: string;
    title: string;
    txt: string;
    color: string;
  }
  const arrOfCards: arrOfCards_type[] = [
    {
      icon: <FaReact className="text-6xl" />,
      imgTitle: "HST",
      title: "300-1500km",
      txt: "Used for astronomical observations, capturing stunning images of the universe with precision optics.",
      color: "text-blue-400",
    },
    {
      icon: <FaShuttleSpace className="text-6xl" />,
      imgTitle: "ISS",
      title: "408km",
      txt: "A habitable artificial satellite orbiting Earth, serving as a cutting-edge space research laboratory.",
      color: "text-accent-cyan",
    },
    {
      icon: <FaSpaceAwesome className="text-6xl" />,
      imgTitle: "GPS",
      title: "20,200km",
      txt: "A constellation of satellites providing precise global navigation and timing services 24/7.",
      color: "text-accent-purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="Technology" className="mx-auto max-w-[90rem] py-24 px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight">MISSION EQUIPMENT</h2>
        <div className="h-1 w-24 bg-accent-cyan mx-auto rounded-full"></div>
      </div>

      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        role="list" 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      >
        {arrOfCards.map((e, i) => (
          <motion.li
            variants={cardVariants}
            key={i}
            className="glass-dark p-10 rounded-3xl flex flex-col items-center text-center space-y-6 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 blur-3xl -mr-16 -mt-16 group-hover:bg-accent-cyan/20 transition-colors"></div>
            
            <div className={`${e.color} group-hover:scale-110 transition-transform duration-500`}>
              {e.icon}
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-display font-bold tracking-wider">{e.imgTitle}</h1>
              <h2 className="text-accent-cyan font-sans font-medium tracking-widest text-sm uppercase">{e.title}</h2>
            </div>

            <p className="text-white/60 font-sans leading-relaxed">
              {e.txt}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      <div className="relative w-full h-48 overflow-hidden rounded-3xl mt-12">
        <video
          src={wave}
          muted
          autoPlay
          loop
          className="w-full h-full object-cover opacity-30 scale-150"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
      </div>
    </section>
  );
}
