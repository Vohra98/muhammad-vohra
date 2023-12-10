"use client"

import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Project";
import Header from "@/components/header/Header";
import { Company } from "@/types/Company";
import { Project } from "@/types/Projects";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface HomePageProps {
    companies: Company[];
    projects: Project[];
}


const HomePage = ({companies, projects}: HomePageProps) => {

  const [headerBackground, setHeaderBackground] = useState("bg-transparent");
  const [textColour, setTextColour] = useState("text-light");
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 70) {
      return setHeaderBackground("bg-transparent"), setTextColour("text-light");
    } else if (latest > 70 && latest < 400) {
      return setHeaderBackground("bg-light"), setTextColour("text-dark"), setBackgroundOpacity(1);
    } else if (latest > 400) {
      let opacity = (1 - (latest - 400) / 400);
      return setHeaderBackground("bg-light"), setTextColour("text-dark"), setBackgroundOpacity(opacity);
    }
  })


    return (
        <>
      {/* This is the background image     */}
      <motion.div className="fixed top-0 left-0 w-screen h-screen -z-10 " style={{opacity: backgroundOpacity}}>
        <picture>
          <source srcSet="/background.png" media="(min-width: 768px)" />
          <img
            src="/background-mobile.png"
            className="w-full h-full object-center object-cover"
            alt="background"
          ></img>
        </picture>
      </motion.div>


      <Header headerBackground={headerBackground} textColour={textColour}/>

      <main>
        {/* // Hero section */}
        <div className="min-h-screen" ref={heroRef}>
          <Hero
            title={[
              <span key="1">Turning your </span>,
              <span
                key="2"
                className="bg-gradient-to-r from-light via-primary to-primaryDark text-transparent bg-clip-text"
              >
                vision
              </span>,
              <span key="3"> into a reality</span>,
            ]}
            subtitle="Helping you with your next big project."
            companies={companies}
            button={{ text: "Let's talk", link: "/contact" }}
            position="left"
          />
        </div>
        
        {/* // Projects section */}
        <div className="py-8">
          <Projects projects={projects} />
        </div>
      </main>
    </>
    )
};

export default HomePage;