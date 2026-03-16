import "./satelite.css";
import { motion } from "framer-motion";
import satelite_img from "/satelite2.jpg";

export default function Satelite() {
  return (
    <article
      id="Satellite"
      className="flex justify-between lg:flex-row flex-col-reverse items-center gap-12 py-20 px-6 lg:px-24"
    >
      <Details />
      <motion.section 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={satelite_img}
            alt="deep space satellite"
            className="relative rounded-lg w-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </motion.section>
    </article>
  );
}

const Details = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/2 space-y-6"
    >
      <div className="space-y-2">
        <h5 className="text-accent-purple font-display tracking-[0.3em] uppercase text-sm font-bold">
          Deep Space
        </h5>
        <h2 className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
          PLANETARY OBSERVATORY
        </h2>
      </div>
      
      <p className="text-lg text-white/70 font-sans leading-relaxed">
        Our planetary observatory captures breathtaking high-resolution imagery of the celestial bodies in our solar system. 
        Equipped with advanced multi-spectral sensors, we reveal the hidden secrets of the universe, 
        one galaxy at a time.
      </p>

      <div className="pt-4">
        <button className="btn-outline border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white">
          View Gallery
        </button>
      </div>
    </motion.section>
  );
};
