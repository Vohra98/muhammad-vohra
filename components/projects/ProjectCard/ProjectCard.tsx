"use client"

import { Project } from "@/types/Projects";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect, useRef} from "react";
import Button from "@/components/button/Button";
import {PortableText} from '@portabletext/react'

const MotionLink = motion(Link);


interface ProjectCardProps {
    project: Project;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [paralaxSpeed, setParalaxSpeed] = useState<number>(20);

    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setParalaxSpeed(20)
        } else {
            setParalaxSpeed(100)
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    })

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, paralaxSpeed);

    return (
        <>
            <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center relative py-24 lg:py-[20vh]" ref={ref} >
                <motion.div style={{ y }} className="w-1/3 my-8">
                    <h2 className="text-2xl font-bold pb-8">{project.name}</h2>
                    {/* <PortableText value={project.content} /> */}
                    <div className="pb-16">Helping NASA Mission Control personnel navigate and communicate Artemis mission alterations in uncharted lunar regions</div>
                    <Button 
                        text="View Project"
                        url={`/projects/${project.slug}`}
                        testId="project-card-button"
                        className="my-4"
                    />
                </motion.div>
                <div className="relative overflow-hidden max-h-[90vh] h-full w-2/3">
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