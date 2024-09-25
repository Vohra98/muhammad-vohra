"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { textVariant, staggerContainer } from "@/utils/motion";
import { styles } from "@/styles";
import { Experience } from "@/types/Experience";
import { PortableText } from "@portabletext/react";

interface ExperiencesProps {
  experiences: Experience[];
}



const Experiences = ({ experiences }: ExperiencesProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const ptComponents = {
    list: {
      bullet: ({ children }: any) => {
        return <ul className="list-disc pl-8 pt-4 text-[18px]">{ children }</ul>;
      },
    },
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 sm:py-12 py-20 px-8`}
    >
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[14px] text-gray uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Experience
        </h2>
      </motion.div>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              visible={inView}
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={format(experience.startDate, "MMM, yyyy") + " - " + (experience.endDate ? format(experience.endDate, "MMM, yyyy") : "Present")}
              iconStyle={{ background: "#c0c0c0" }}
              icon={
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src={experience.logo}
                    alt={experience.companyName}
                    className="w-[50px] h-[50px]"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[30px] font-bold">
                  {experience.jobTitle}
                </h3>
                <p className="text-[16px] text-white font-semibold m-0">
                  {experience.companyName}
                </p>

                <div>
                  <PortableText value={experience.content} components={ptComponents}/>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experiences;
