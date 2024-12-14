import Home from "@/components/home";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <section>
      <Home />
      <About />
      <Pricing />
      <Gallery />
      <Contact />
    </section>
  );
}
