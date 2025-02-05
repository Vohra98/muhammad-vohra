"use client";

import { Container } from "@/components/global.styled";
import Image from "next/image";
import Button from "@/components/button/Button";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Typed from 'typed.js';
import {Company} from "@/types/Company";
import {useEffect, useRef} from "react";

interface HeroProps {
  title:string[],
  subtitle?: string;
  button?: button;
  companies?: Company[];
}

interface button {
  text: string;
  link: string;
}

const Hero = ({ title, subtitle, companies, button, }: HeroProps) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseonhover: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            },
        },
    ],
  };

  const typedTitle = useRef(null);

     
    useEffect(() => {
        const typyed = new Typed(typedTitle.current, {  
            strings: title,
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            showCursor: true,
            cursorChar: '',
        });

        return () => {
            typyed.destroy();
        };
    }, []);
  return (
    <div className={`hero py-24 lg:pt-56 fixed top-0 left-0 w-screen h-screen -z-10`}>
      <Container>
        <div className="px-8 -z-10">
          <h1
            className={`text-6xl lg:text-7xl xl:text-8xl font-bold mx-auto text-center max-w-[65rem] min-h-[100px]`}
            ref={typedTitle}
          >
            
          </h1>
          {subtitle && (
            <motion.p
              className="my-4 text-xl xl:text-2xl text-gray font-medium text-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: .5 }}
            >
              {subtitle}
            </motion.p>
          )}
          {button && (
            <motion.div
              className="my-16 lg:my-24 text-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: .5 }}
            >
              <Button
                text={button.text}
                url={button.link}
                testId="hero-button"
              />
            </motion.div>
          )}
          {companies && (
            <>
              
              <motion.div
                className="py-8 overflow-hidden" data-testid="companies-list"
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: .5 }}
              >
                <Slider {...settings} ref={(slider) => (slider = slider)}>
                  {companies?.map((company) => {
                    return (
                      <li key={company._id} className="p-4">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={100}
                          height={100}
                        />
                      </li>
                    );
                  })}
                </Slider>
              </motion.div>
            </>
          )}
        </div>
      </Container>
    </div>
    
  );
};

export default Hero;
