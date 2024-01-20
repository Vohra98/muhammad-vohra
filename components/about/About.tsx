import { About } from "@/types/About";
import { Container } from "../global.styled";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../button/Button";
import { Technology } from "@/types/Technology";

interface AboutProps {
  about: About;
}
interface SkillsProps {
  title: string;
  skills: Technology[];
}

type SectionContentType = "about" | "skills";

const About = ({ about }: AboutProps) => {
  const [sectionContent, setSectionContent] =
    useState<SectionContentType>("about");

  return (
    <section id="about" className="about__gradient  py-56 pb-24 z-10">
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-start">
          <h2
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-16"
            data-testid="title"
          >
            <span className="bg-gradient-to-l from-light via-primary to-primaryDark text-transparent bg-clip-text">
              Hi, I&apos;m
            </span>{" "}
            Muhammad
          </h2>
          <div className="text-center my-8 text-3xl rounded-xl bg-[#8458ff24] inline-block">
            <button
              onClick={() => setSectionContent("about")}
              data-testid="about-button"
              className={`text-white text-lg font-bold p-2 px-8 rounded-xl focus:outline-none focus:shadow-outline ${
                sectionContent === "about" ? "bg-primaryDark" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => setSectionContent("skills")}
              data-testid="skills-button"
              className={`text-white text-lg font-bold p-2 px-8 rounded-xl focus:outline-none focus:shadow-outline ${
                sectionContent === "skills" ? "bg-primaryDark" : ""
              }`}
            >
              Skills
            </button>
          </div>

          {sectionContent === "about" && (
            <div
              data-testid="content"
              className="text-xl xl:text-2xl text-center prose-strong:text-primary prose-headings:text-3xl prose-headings:pb-4"
            >
              Im a <strong>passionate</strong> Frontend Developer with 7 years
              of experience crafting seamless, visually appealing{" "}
              <strong>user experiences</strong>. I blend{" "}
              <strong>creativity</strong> and technical expertise to create
              engaging digital solutions that meet <strong>user needs</strong>{" "}
              and <strong>business objectives</strong>.
            </div>
          )}

          {sectionContent === "skills" && (
            <>
              <ul className="lg:hidden  flex w-full flex-wrap">
                {about.technologies.map((technology) => (
                  <li
                    key={technology._id}
                    className="flex items-center justify-between py-4 px-8 w-full lg:w-1/2"
                  >
                    <h5 className="flex-1 text-xl">{technology.name}</h5>
                    <div className="flex-1 w-full h-2 bg-light rounded-full">
                      <motion.div
                        className="h-2 rounded-full bg-primary w-full"
                        initial={{ width: 0 }}
                        animate={{ width: technology.experience + "%" }}
                        transition={{ delay: 1, duration: 1 }}
                        role="progressbar"
                        aria-label={technology.experience + "%"}
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hidden lg:flex items-st gap-8 justify-between text-dark">
                <SkillsSection
                  title="Foundational"
                  skills={about.technologies.filter(
                    (technology) => technology.type === "foundational"
                  )}
                />
                <SkillsSection
                  title="Frontend"
                  skills={about.technologies.filter(
                    (technology) => technology.type === "frontend "
                  )}
                />
                <SkillsSection
                  title="Tooling and Technologies"
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

const SkillsSection = ({ title, skills }: SkillsProps) => {
  return (
    <div
      className="bg-light p-4 flex-1 rounded-xl"
      data-testid="skills-section"
    >
      <h5>{title}</h5>
      <ul>
        {skills?.map((skill) => (
          <li key={skill._id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
