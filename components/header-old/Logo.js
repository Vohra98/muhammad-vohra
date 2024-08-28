"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <MotionLink href="/" className="w-10 h-10 bg-light flex items-center justify-center rounded" data-testid="logo"
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
            }}>
                <Image className="w-8" width={40} height={40} src="/images/svgs/logo.svg" alt="Logo" />
            </MotionLink>
    );
};

export default Logo;