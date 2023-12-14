import { Project } from "@/types/Projects";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Container } from "../global.styled";

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex + 1 === projects.length ? 0 : prevIndex + 1
    );
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <Container>
        <div className=" flex items-center justify-center">
        <div>
          <h2>{projects[currentProjectIndex].name}</h2>
          <div className="">
            <PortableText value={projects[currentProjectIndex].content} />
          </div>
        </div>
        <Image
          src={projects[currentProjectIndex].image}
          key={currentProjectIndex}
          alt=""
          width={900}
          height={300}
        />
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
