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
      {/* <Navbar /> */}
      <main>
        <Hero />
        <article className="bg-black relative z-[1] space-y-[3rem] lg:space-y-[10rem]">
          <About />
          <Galaxy />
          <Satelite />
        </article>
      </main>
      <Footer />
    </>
  );
}
