"use client"

import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import { Company } from "@/types/Company";
import { Project } from "@/types/Projects";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { About as AboutType }  from "@/types/About";
import About from "@/components/about/About";

interface HomePageProps {
    companies: Company[];
    projects: Project[];
    about: AboutType;
}


const HomePage = ({companies, projects, about}: HomePageProps) => {
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");
  const [textColour, setTextColour] = useState("text-light");

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 70) {
      return setHeaderBackground("bg-transparent"), setTextColour("text-light");
    } else if (latest > 70 && latest < 400) {
      return setHeaderBackground("bg-light"), setTextColour("text-dark");
    }
  })

    return (
        <>
      {/* This is the background image     */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 ">
        <picture>
          <source srcSet="/background.png" media="(min-width: 768px)" />
          <img
            src="/background-mobile.png"
            className="w-full h-full object-center object-cover"
            alt="background"
          ></img>
        </picture>
      </div>


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
            subtitle="Muhammad Vohra | Frontend Developer"
            companies={companies}
            button={{ text: "Let's talk", link: "/contact" }}
          />
        </div>

        {/* // About section */}
          <About about={about}/>

      </main>
    </>
    )
};

export default HomePage;