import "./mycontainer.css";
// components
import {
  Navbar,
  Hero,
  About,
  Galaxy,
  Satelite,
  Footer,
} from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="bg-black py-[4rem] relative z-[1] space-y-[3rem] lg:space-y-[10rem]">
          <About />
          <Galaxy />
          <Satelite />
        </div>
      </main>
      <Footer />
    </>
  );
}
