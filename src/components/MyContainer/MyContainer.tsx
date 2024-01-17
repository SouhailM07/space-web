import "./mycontainer.css";
// components
import { Navbar, Hero } from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
