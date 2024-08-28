"use client";

import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useDimensions } from "@/utils/use-dimensions";
import { useRef, useState, useEffect } from "react";

import {
  HeaderWrapper,
  SocialIconsWrapper,
} from "./header.styles";
import { Nav, NavBackground } from "./menu/menu.styles";
import Logo from "./Logo";
import MenuToggle from "./menu/MenuToggle";
import Navigation from "./menu/Navigation";

interface HeaderProps {
    headerBackground: string;
    textColour: string;
};

const MotionLink = motion(Link);
const MotionNav = motion(Nav);
const MotionNavBackground = motion(NavBackground);

const sidebar = {
  open: {
    clipPath: `inset(0 0 0 0 round 5px`,
    duration: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 5000,
    },
  },
  closed: {
    clipPath: "inset(12px 248px 447px 12px round 5px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = ({ headerBackground, textColour}: HeaderProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleMenuToggle = () => {
    toggleOpen();
  };

  return (
    <motion.header
      className={`w-full font-medium fixed top-0 left-0 z-20 transition ease-in-out duration-300  ${headerBackground}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="px-8 py-2">
        <HeaderWrapper>
          <MotionNav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <MenuToggle toggle={() => toggleOpen()} />
            <AnimatePresence>
              {isOpen && <Navigation menuclick={handleMenuToggle} />}
            </AnimatePresence>

            <MotionNavBackground
              className={`${isOpen ? "z-10" : "z-0"}`}
              variants={sidebar}
            />
          </MotionNav>

          <Logo />

          <SocialIconsWrapper>
            {/* <MotionLink
              data-testid="github"
              href="https://github.com/Vohra98"
              target="_blank"
              className="mx-8"
              whileHover={{
                transform: "translateY(-5px)",
                transition: { duration: 0.3 },
              }}
            >
              Github
            </MotionLink> */}
            <MotionLink
              data-testid="linkedin"
              href="https://www.linkedin.com/in/muhammad-vohra-805241175"
              target="_blank"
              className={`${textColour}`}
              whileHover={{
                transform: "translateY(-5px)",
                transition: { duration: 0.3 },
              }}
            >
              LinkedIn
            </MotionLink>
          </SocialIconsWrapper>
        </HeaderWrapper>
      </div>
    </motion.header>
  );
};

export default Header;
