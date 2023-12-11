'use client'

import { Project } from "@/types/Projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Container } from "../global.styled";

interface ProjectsProps {
    projects: Project[];
}

const Projects = ({ projects }: ProjectsProps ) => {

    return (
        <div id="projects" className="">
            <Container>
                <div className="flex items-start justify-evenly relative">
                    <div
                        className="
                            w-1/6
                            rotate-90
                            origin-bottom-left
                            sticky
                            top-0"
                    >
                        <h3 className="text-4xl lg:text-6xl xl:text-[10rem] font-bold text-[#ffffff36]">Projects</h3>
                    </div>
                    <div className="w-5/6 mt-8 lg:mt-40">
                        <div className="flex-col flex-wrap lg:flex-row items-center justify-start">
                            {projects?.map((project, index) => {
                                return (
                                    <ProjectCard index={index} key={project._id} project={project} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};
export default Projects;