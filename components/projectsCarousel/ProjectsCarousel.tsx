import { Project } from "@/types/Projects";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../global.styled";
import Button from "../button/Button";

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNextProject = () => {
    setDirection("right");
    setCurrentProjectIndex((prevIndex) =>
      prevIndex + 1 === projects.length ? 0 : prevIndex + 1
    );
  };

  const handlePreviousProject = () => {
    setDirection("left");
    setCurrentProjectIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const imageVariants = {
    enter: (direction: string) => {
      return {
        x: direction === "left" ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => {
      return {
        zIndex: 0,
        x: direction === "left" ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <Container>
        <div className=" flex flex-col md:flex-row items-center justify-center gap-8 lg:min-h-[70vh] w-full">
          {projects && (
            <>
              <div className="flex-1 flex items-start flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold">
                    {projects[currentProjectIndex].name}
                  </h3>
                  <div className="">
                    <p>{projects[currentProjectIndex].blurb}</p>
                  </div>
                </div>
                <Button
                  text="View Project"
                  url={`/projects/${projects[currentProjectIndex].slug}`}
                  testId="project-card-button"
                  className="my-4"
                />
              </div>

              <div
                key={currentProjectIndex}
                className="flex-1 h-[22rem] relative overflow-hidden rounded-xl shadow-xl flex"
              >
                <AnimatePresence>
                  <motion.img
                    src={projects[currentProjectIndex].image}
                    alt={projects[currentProjectIndex].name}
                    className="w-full h-full object-cover object-center"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  />
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </Container>

      <div className="left" onClick={handlePreviousProject}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
          fill="#fff"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
      <div className="right" onClick={handleNextProject}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
          fill="#fff"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    </>
  );
};

export default ProjectsCarousel;
