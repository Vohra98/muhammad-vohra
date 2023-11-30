"use client"

import Link from "next/link";
import { useState } from 'react';
import { AnimatePresence, motion, useCycle } from "framer-motion";

import { Container } from "../global.styled";
import { HeaderWrapper, NavWrapper, SocialIconsWrapper} from "./header.styles";
import Logo from "./Logo";

const
    MotionLink = motion(Link),
    links = [
        { name: "Home", to: "/", id: 1 },
        { name: "About", to: "about", id: 2 },
        { name: "Projects", to: "projects", id: 3 },
        { name: "Contact", to: "contact", id: 4 },
        { name: "Download CV", to: "/", id: 5 }
    ],
    sideVariants = {
        closed: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
          }
        },
        open: {
          transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
          }
        }
      },
    itemVariants = {
        closed: {
          opacity: 0
        },
        open: { opacity: 1 }
      };
      

    

const Header = () => {
    const [open, cycleOpen] = useCycle(false, true);

    return(
        <header className="w-full py-8 font-medium relative">
            <Container>
                <HeaderWrapper>
                    <div className="absolute top-0 h-screen left-0 bg-red-900">
                        <AnimatePresence>
                            {open && (
                                <motion.nav
                                    initial={{ width: 0 }}
                                    animate={{ width: '300px' }}
                                    exit={{
                                        width: 0,
                                        transition: { delay: 1, duration: 0.3 }
                                      }}
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        className="flex flex-col justify-center items-center h-screen"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sideVariants}
                                        data-testid="navigation"
                                    >
                                        {links.map(({ name, to, id }) => (
                                            <motion.a key={id} href={to} whileHover={{ scale: 1.1 }} variants={itemVariants}>
                                            {name}
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                    
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </div>
                    <NavWrapper>
                        <div className="btn-container">
                            <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
                        </div>
                    </NavWrapper>
                    
                    
                    <Logo/>

                    <SocialIconsWrapper>
                        <MotionLink data-testid="github" href="https://github.com/Vohra98" target="_blank" className='mx-8' whileHover={{
                            transform: 'translateY(-5px)',
                            transition: { duration: 0.3 },
                        }}>
                            Github
                        </MotionLink>
                        <MotionLink data-testid="linkedin" href="https://www.linkedin.com/in/muhammad-vohra-805241175" target="_blank" whileHover={{
                            transform: 'translateY(-5px)',
                            transition: { duration: 0.3 },
                        }}>
                            LinkedIn
                        </MotionLink>
                    </SocialIconsWrapper>
                </HeaderWrapper>
                
            </Container>
        </header>
    );
};

export default Header;