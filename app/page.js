"use client";

import Home from "@/components/home";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import { useEffect } from "react";
import { incrementCounter } from "@/actions/action";

export default function HomePage() {
  useEffect(() => {
    incrementCounter();
  }, []);
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
