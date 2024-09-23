"use client"
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '@/styles'
import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'
import Image, { StaticImageData } from 'next/image'

interface ServiceCardProps {
    title: string;
    icon: StaticImageData;
    index: number;
}

const ServiceCard = ({ title, icon, index } : ServiceCardProps) => {
  return (
    <motion.div
      className='sm:w-[250px] w-full'
      variants={fadeIn("right", "spring", .5 * index, 0.75)}
    >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className='w-full green-pink-gradient p-2 rounded-lg shadow-card'
        >
          <div className='bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'> 
            <Image src={icon} alt={title} className='h-16 w-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
      </motion.div>
  )
}
 
const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        className='text-center'
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-gray text-[20px] max-w-5xl leading-[30px] m-auto text-center'>
        Experienced Full Stack Engineer with 8 years of expertise in front-end development and a strong background in building scalable systems. Proficient in modern frameworks like React, Next.js, and Node.js, with proven success in integrating headless CMS, leading automation projects, and optimizing complex systems for renowned companies like OakNorth Bank and Typeform. Adept at enhancing productivity, improving system reliability, and delivering user-friendly designs through innovative engineering practices and collaboration.
      </motion.p>

      <div className='mt-20 flex justify-center items-stretch flex-wrap gap-10'>
       {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
       ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')