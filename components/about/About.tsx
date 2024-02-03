import { About } from "@/types/About";
import { Container } from "../global.styled";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

type SectionContentType = "about" | "skills";



const About = ({ about }: AboutProps) => {
  const [sectionContent, setSectionContent] = useState<SectionContentType>("about");
  const [showAnnimation, setShowAnnimation] = useState(false)
  const [AnnimationDelay, setAnnimationDelay] = useState(1.5)
  const ref = useRef(null)
  const isInView = useInView(ref)

    if(isInView && !showAnnimation) {
        setShowAnnimation(true)
    }

    const handleButtonClick = (section: SectionContentType) => {
        setSectionContent(section)
        setAnnimationDelay(0)
    }

  return (
    <section id="about" className="about__gradient  py-56 pb-24 z-10">
      <Container>
        <div ref={ref} className="flex flex-col items-center justify-start">
          <motion.h2
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8"
            data-testid="title"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: showAnnimation ? 1 : 0, y: showAnnimation ? 0 : -100 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ delay: .5, duration: .5 }}
          >
            <span className="bg-gradient-to-l from-light via-primary to-primaryDark text-transparent bg-clip-text">
              Hi, I&apos;m
            </span>{" "}
            Muhammad
          </motion.h2>
          <motion.div
            className="text-center my-8 mb-16 text-3xl rounded-xl bg-[#8458ff24] inline-block"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: showAnnimation ? 1 : 0, y: showAnnimation ? 0 : -100 }}
            transition={{ delay: 1, duration: .5 }}
          >
            <button
              onClick={() => handleButtonClick('about')}
              data-testid="about-button"
              className={`text-white text-lg font-bold p-2 px-8 rounded-xl focus:outline-none focus:shadow-outline ${
                sectionContent === "about" ? "bg-primaryDark" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleButtonClick('skills')}
              data-testid="skills-button"
              className={`text-white text-lg font-bold p-2 px-8 rounded-xl focus:outline-none focus:shadow-outline ${
                sectionContent === "skills" ? "bg-primaryDark" : ""
              }`}
            >
              Skills
            </button>
          </motion.div>

          {sectionContent === "about" && (
            <div className="flex flex-col md:flex-row items-center gap-16 justify-between 2xl:max-w-[65rem]">
                <motion.div
                        className="flex-1 w-3/4 h-3/4 md:w-[30rem] md:h-[30rem]"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: showAnnimation ? 1 : 0, x: showAnnimation ? 0 : -100 }}
                        transition={{ delay: AnnimationDelay, duration: .5 }}
                    >
                        {about && (
                            <Image
                            className="w-full h-full object-cover object-center rounded-3xl shadow-2xl shadow-indigo-500/100"
                            src={about.image ? about.image : "/muhammad-vohra.png"}
                            alt="muhammad Vohra"
                            width={500}
                            height={500}
                            />
                        )}
                        
                    </motion.div>
                <motion.div
                    className="flex-1 p-8 "
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: showAnnimation ? 1 : 0, x: showAnnimation ? 0 : 100 }}
                    transition={{ delay: AnnimationDelay, duration: .5 }}
                >
                    <h4 className="text-3xl lg:text-4xl font-bold mb-8 text-[#ffffff70]">A bit about me:</h4>
                    <div
                        data-testid="content"
                        className="text-xl text-center md:text-left prose-strong:text-primary prose-headings:text-3xl prose-headings:pb-4"
                    >
                        <div className="p-4 mb-4 border border-solid border-slate-50 rounded-3xl">
                            Im a <strong>passionate</strong> Frontend Developer with 7 years
                            of experience crafting seamless, visually appealing
                            <strong>user experiences</strong>.
                        </div>
                        <div className="p-4 border border-solid border-slate-50 rounded-3xl">
                            I blend <strong>creativity</strong> and technical expertise to create
                            engaging digital solutions that meet <strong>user needs </strong>
                            and <strong>business objectives</strong>.
                        </div>
                    </div>
                </motion.div>
                
            </div>
          )}

          {sectionContent === "skills" && (
            <>
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
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

const SkillsSection = ({ title, skills, delay, bulletStyle }: SkillsProps) => {
  return (
    <motion.div
      className="bg-[#ffffff05] mt-4 lg:m-8 p-4 flex-1 rounded-xl w-full"
      data-testid="skills-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay, duration: .5 }}
    >
      <motion.h3
        className="text-3xl lg:text-5xl font-bold mt-[-2rem] lg:mt-[-3rem] mb-4 uppercase text-[#ffffff70]"
        data-testid="title"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 1, duration: .5 }}
      >
        {title}
      </motion.h3>
      <ul
        className={`flex flex-wrap items-center justify-start pl-4`}
        data-testid="skills"
      >
        {skills?.map((skill, index) => (
            <motion.li  
                key={skill._id}
                className="flex items-center w-full sm:w-1/2 lg:w-1/3 py-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 3 + (index/4), duration: .25 }}
            >
                {bulletStyle === "Disk" && <Disk />}
                {bulletStyle === "Doughnut" && <Doughnut />}
                {bulletStyle === "Bullseye" && <Bullseye />}
                <span className="ml-2 font-bold">{skill.name}</span>
            </motion.li>
          
        ))}
      </ul>
    </motion.div>
  );
};

export default About;