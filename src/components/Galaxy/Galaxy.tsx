import "./galaxy.css";
import { motion } from "framer-motion";
import satelite_img from "/satelite1.jpg";

export default function Galaxy() {
  return (
    <article
      id="Galaxy"
      className="flex justify-between lg:flex-row flex-col items-center gap-12 py-20 px-6 lg:px-24"
    >
      <motion.section 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={satelite_img}
            alt="galaxy satellite"
            className="relative rounded-lg w-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </motion.section>
      <Details />
    </article>
  );
}

const Details = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/2 space-y-6"
    >
      <div className="space-y-2">
        <h5 className="text-accent-cyan font-display tracking-[0.3em] uppercase text-sm font-bold">
          Our Mission
        </h5>
        <h2 className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
          RAPIDCAST
        </h2>
      </div>
      
      <p className="text-lg text-white/70 font-sans leading-relaxed">
        Our RapidCast technology enables real-time data streaming across the cosmos. 
        By leveraging ultra-high velocity satellite networks, we ensure that every byte of information 
        travels at the speed of light, bridging the gap between distant worlds and our home planet.
      </p>

      <div className="pt-4">
        <button className="btn-primary">
          Explore Technology
        </button>
      </div>
    </motion.section>
  );
};
