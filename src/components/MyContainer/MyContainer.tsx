import "./mycontainer.css";
// components
import { Navbar, Hero, About } from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="bg-black relative z-[1]">
          <About />
        </div>
      </main>
    </>
  );
}
