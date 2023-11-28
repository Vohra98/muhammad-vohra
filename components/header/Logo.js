"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div data-testid="logo" className="logo flex items-center justify-center">
            <MotionLink href="/" className="w-16 h-16 bg-dark flex items-center justify-center rounded"
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
            }}>
                <img className="w-10" src="/images/svgs/logo.svg" alt="Logo" />
            </MotionLink>
        </div>
    );
};

export default Logo;