import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, icon, index }) => {
  return (
    <motion.div
      className='xs:w-[250px] w-full'
      variants={fadeIn("right", "spring", .5 * index, 0.75)}
    >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className='w-full green-pink-gradient p-2 rounded-lg shadow-card'
        >
          <div
            className='bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            options={{
              max: 45,
              scale: 1,
              transition: true,
              speed: 100,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
          > 
            <img src={icon} alt={title} className='h-16 w-16 object-contain'/>
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
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Experienced Full Stack Engineer with 8 years of expertise in front-end development and a strong background in building scalable systems. Proficient in modern frameworks like React, Next.js, and Node.js, with proven success in integrating headless CMS, leading automation projects, and optimizing complex systems for renowned companies like OakNorth Bank and Typeform. Adept at enhancing productivity, improving system reliability, and delivering user-friendly designs through innovative engineering practices and collaboration.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
       {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
       ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')