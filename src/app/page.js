import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HeadAnimation = dynamic(() => import("@/components/HeadAnimation"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeadAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
