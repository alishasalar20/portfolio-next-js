import Image from "next/image";
import Hero from "@/components/Hero"
import About1 from "@/components/About";
import Contact1 from "@/components/Contact";
import Skills1 from "@/components/Skills";
import Project1 from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <About1/>
    
      <Skills1 />
      <Project1 />
      <Contact1 />
    </div>
  
  );
}
