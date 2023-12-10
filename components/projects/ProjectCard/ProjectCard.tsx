"use client"

import { Project } from "@/types/Projects";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect, useRef} from "react";
import Button from "@/components/button/Button"

interface ProjectCardProps {
    project: Project;
    index: number;
}


const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <>
            <section className={`w-full flex flex-col-reverse ${(index % 2 == 0) ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-8 relative mb-8`}>
                <div className={`flex-1 my-8 `}>
                    <h2 className="text-2xl font-bold pb-8">{project.name}</h2>
                    {/* <PortableText value={project.content} /> */}
                    <div className="pb-16">Helping NASA Mission Control personnel navigate and communicate Artemis mission alterations in uncharted lunar regions</div>
                    <Button 
                        text="View Project"
                        url={`/projects/${project.slug}`}
                        testId="project-card-button"
                        className="my-4"
                    />
                </div>
                <div className={`relative overflow-hidden max-h-[90vh] h-full flex-2 `}>
                    <Image 
                    src={project.image}
                    width={900}
                    height={300}
                    alt={project.name}
                    className="rounded-lg w-full border border-gray-500 object-cover"
                    />
                </div>
                
                
            </section>
            
        </>
        
    )
};

export default ProjectCard;