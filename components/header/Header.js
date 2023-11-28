"use client";

import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/utils/use-dimensions";
import { useRef } from 'react';

import { Container } from "../global.styled";
import { HeaderWrapper, Nav, SocialIconsWrapper} from "./header.styles";
import Logo from "./Logo";
import MenuToggle from "./menu/MenuToggle";
import Navigation from "./menu/Navigation";

const MotionLink = motion(Link);
const MotionNav = motion(Nav);

const sidebar = {
    open: (height = 3000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


const Header = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return(
        <header className="w-full py-8 font-medium">
            <Container>
                <HeaderWrapper>
                    <MotionNav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                    >
                        <MenuToggle toggle={() => toggleOpen()} />
                        <Navigation />
                        <motion.div className="background" variants={sidebar} />
                    </MotionNav>

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