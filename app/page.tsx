import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Founder from "./components/Founder";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Clients />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
