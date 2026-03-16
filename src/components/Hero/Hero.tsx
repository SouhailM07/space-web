import "./hero.css";
import { Land } from "../../components";
import { motion } from "framer-motion";
import space_v from "/earth-bg.webm";

export default function Hero() {
  return (
    <article
      id="About"
      className="relative min-h-screen mx-auto max-w-[100rem] text-white flex items-center lg:justify-start justify-center overflow-hidden"
    >
      <video
        src={space_v}
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-primary/80 z-[-1]"></div>

      <section
        id="About__s1"
        className="relative z-10 max-w-[44rem] px-6 lg:ml-24 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-display font-bold tracking-tighter leading-tight mb-6">
            ORBIT THE <span className="text-accent-cyan">EARTH</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/70 font-sans max-w-[35rem] leading-relaxed mb-10">
            Experience the majesty of our home planet from the silence of weightless space. 
            Join our next mission to explore the final frontier and witness the dawn from a perspective like no other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary uppercase tracking-[0.2em] text-sm">
              Launch Mission
            </button>
            <button className="btn-outline uppercase tracking-[0.2em] text-sm">
              View Schedule
            </button>
          </div>
        </motion.div>
      </section>
      
      <motion.div 
        className="hidden lg:block absolute right-0 bottom-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Land />
      </motion.div>
    </article>
  );
}
