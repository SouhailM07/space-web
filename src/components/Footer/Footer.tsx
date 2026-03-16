import "./footer.css";
import gps_logo from "/location-dot-solid.svg";
import email_logo from "/envelope-solid.svg";
import phone_logo from "/phone-solid.svg";
import facebook_logo from "/facebook.svg";
import instagram_logo from "/instagram.svg";
import linkedin_logo from "/linkedin.svg";

export default function Footer() {
  return (
    <footer className="relative bg-space-900 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent"></div>
      
      <div className="max-w-[80rem] mx-auto px-6">
        <Top />
        <hr className="border-white/5 my-12" />
        <Bottom />
      </div>
    </footer>
  );
}

const Top = () => {
  const quickLinks = ["Home", "About", "Services", "Login"];
  const contactLinks = [
    { img: gps_logo, label: "Noida, Uttar Pradesh" },
    { img: email_logo, label: "abc@gmail.com" },
    { img: phone_logo, label: "+91 123456789" },
  ];

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <section className="lg:col-span-2 space-y-6">
        <h1 className="font-display font-bold text-4xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Be Ready To Grow
        </h1>
        <p className="font-sans text-white/60 text-lg max-w-[25rem]">
          Get Exclusive <span className="text-accent-cyan font-bold">Updates</span> straight to your inbox and stay ahead of the curve.
        </p>
        <div className="flex max-w-[25rem]">
          <input
            type="text"
            className="flex-1 bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 outline-none focus:border-accent-cyan/50 transition-colors"
            placeholder="Email@example.com"
          />
          <button className="bg-accent-cyan text-black font-bold px-6 py-3 rounded-r-xl hover:bg-white transition-colors">
            Join
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-white font-display font-bold text-xl uppercase tracking-widest">Quick Links</h2>
        <ul className="space-y-4 text-white/50">
          {quickLinks.map((e, i) => (
            <li key={i} className="hover:text-accent-cyan transition-colors cursor-pointer w-fit">
              {e}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-white font-display font-bold text-xl uppercase tracking-widest">Contact Us</h2>
        <ul className="space-y-4 text-white/50">
          {contactLinks.map((e, i) => (
            <li key={i} className="flex gap-4 items-center">
              <img src={e.img} alt="logo" className="h-5 w-5 brightness-200" />
              <p className="hover:text-white transition-colors cursor-default">{e.label}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

const Bottom = () => {
  const socialLinks = [instagram_logo, facebook_logo, linkedin_logo];

  return (
    <article className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-sans text-white/30">
      <section>
        &copy; 2024 TCJ. All rights reserved. Built for the future of space exploration.
      </section>
      
      <section>
        <div className="flex gap-6">
          {socialLinks.map((e, i) => (
            <a key={i} href="#" className="hover:scale-110 transition-transform hover:brightness-125">
              <img src={e} alt="social icon" className="h-8 w-8 filter invert opacity-50 hover:opacity-100" />
            </a>
          ))}
        </div>
      </section>

      <section className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
      </section>
    </article>
  );
};
