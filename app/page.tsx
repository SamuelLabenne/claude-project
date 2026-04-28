import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Platforms from "./components/Platforms";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Platforms />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
