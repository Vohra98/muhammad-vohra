"use client"

import { About } from "@/types/About";
import { Container } from "../global.styled";
import { motion, useInView } from "framer-motion";
import { Technology } from "@/types/Technology";
import Disk from "@/icons/Disk";
import Doughnut from "@/icons/Doughnut";
import Bullseye from "@/icons/Bullseye";
import Image from "next/image";

interface AboutProps {
  about: About;
}
interface SkillsProps {
  title: string;
  delay: number;
  bulletStyle: string;
  skills: Technology[];
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="about__gradient  py-56 pb-24 z-10">
      <Container>
        <div className="flex flex-col items-center gap-8 justify-between w-full ">
          <SkillsSection
              title="Foundational"
              delay={0}
              bulletStyle="Disk"
              skills={about.technologies.filter(
                  (technology) => technology.type === "foundational"
              )}
          />
          <SkillsSection
              title="Frontend"
              delay={0.5}
              bulletStyle="Doughnut"
              skills={about.technologies.filter(
                  (technology) => technology.type === "frontend "
              )}
          />
          <SkillsSection
              title="Tooling & Technologies"
              delay={1}
              bulletStyle="Bullseye"
              skills={about.technologies.filter(
                  (technology) => technology.type === "toolingAndTechnologies"
              )}
          />
        </div>
      </Container>
    </section>
  );
};

const SkillsSection = ({title, skills, delay, bulletStyle}: SkillsProps) => {
  return (
      <motion.div
          className="bg-[#ffffff05] mt-4 lg:m-8 p-4 flex-1 rounded-xl w-full"
          data-testid="skills-section"
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: delay, duration: .5}}
      >
        <h3
            className="text-3xl lg:text-5xl font-bold mt-[-2rem] lg:mt-[-3rem] mb-4 uppercase text-[#ffffff70]"
            data-testid="title"
        >
          {title}
        </h3>
        <ul
            className={`flex flex-wrap items-center justify-start pl-4`}
            data-testid="skills"
        >
          {skills?.map((skill, index) => (
              <li
                  key={skill._id}
                  className="flex items-center w-full sm:w-1/2 lg:w-1/3 py-2"
              >
                {bulletStyle === "Disk" && <Disk/>}
                {bulletStyle === "Doughnut" && <Doughnut/>}
                {bulletStyle === "Bullseye" && <Bullseye />}
                <span className="ml-2 font-bold">{skill.name}</span>
            </li>
          
        ))}
      </ul>
    </motion.div>
  );
};

export default About;