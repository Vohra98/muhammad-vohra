"use client"

import { Project } from "@/types/Projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);


interface ProjectCardProps {
    project: Project;
}



const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <MotionLink
            className="flex items-center justify-between flex-col flex-wrap w-full lg:w-5/12 p-4 my-4 lg:m-4 bg-[#3c296f42] rounded"
            whileHover={{
                transform: 'translateY(-5px)',
                scale: 1.1,
                transition: { duration: 0.3 },
            }}
            href={`/projects/${project.slug}`}
        >
            <div className="pb-4">
                <Image 
                  src={project.image}
                  width={900}
                  height={300}
                  alt={project.name}
                  className="rounded-lg w-full border border-gray-500 object-cover"
                />
            </div>
            <div className="">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                {/* <Link href={`/projects/${project.slug}`}>View Project</Link> */}
            </div>
        </MotionLink>
    )
};

export default ProjectCard;