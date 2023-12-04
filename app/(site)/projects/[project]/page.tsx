"use client";

import { Container } from "@/components/global.styled";
import { getProject } from "@/sanity/sanity-utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    project: string;
  };
};

const MotionImage = motion(Image);

const project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await getProject(slug);

  console.log(project);

  return (
    <>
      <Container>
        <div className="bg-dark relative">
            <picture>
                <source srcSet={project.image} media="(min-width: 568px)" />
                <motion.img
                    src={project.mobileImage}
                    className="rounded-lg border border-gray-500 object-cover w-full"
                    alt={project.name}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.5 }}
                />
            </picture>
          <motion.div
            className="absolute bottom-8 left-0 right-0 m-auto w-11/12 bg-light text-dark rounded"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h1>{project.name}</h1>
            <div>
              Technoligies
              <div>
                <Link href={project.url}>Vist Site</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default project;
