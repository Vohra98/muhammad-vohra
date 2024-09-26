import { useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import { logo } from "@/assets";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const navLinks = [
  {
    href: "/#about",
    title: "About",
  },
  {
    href: "/#experiences",
    title: "Experiences",
  },
  {
    href: "/#projects",
    title: "Projects",
  },
  {
    href: "/#contact",
    title: "Contact",
    className: "bg-primary py-1 px-2 rounded-md text-white",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed z-20 pt-4 px-8 w-screen">
      <div className="bg-transparent backdrop-blur-md mx-auto sm:w-max p-2 rounded-xl flex items-center justify-between">
        {/* logo */}
        <div>
          <Link href="/#home">
            <Image src={logo} alt="MV logo" width={50} height={50} />
          </Link>
        </div>
        {/* menu */}
        <nav className="hidden sm:block">
          <ul className="flex items-center justify-end ml-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`group mx-6 text-[18px] ${
                  active === link.title ? "border-b-2 text-white" : ""
                } ${link.className ? link.className : "text-gray"}`}
              >
                <Link
                  href={link.href}
                  onClick={() => setActive(link.title)}
                  className={`transition-all duration-300 group-hover:text-white`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="block sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </nav>
      </div>
      <div
        className={`absolute right-0 left-0 w-screen h-screen flex flex-col items-center justify-center transition-all duration-700 z-[-20] ${
          isOpen ? "top-0" : "top-[-100vh]"
        }`}
      >
        <ul className="#0000004f backdrop-blur-md w-full h-full flex flex-col items-center justify-start pt-32">
          {navLinks.map((link, index) => (
              <li
                key={index}
                className={`group my-4 transition-opacity duration-300 delay-300 text-[25px]
                  ${active === link.title ? "border-b-2 text-white" : ""}
                  ${link.className ? link.className : "text-gray"}
                  ${isOpen ? "opacity-100" : "opacity-0"}
                `}
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(link.title);
                    setOpen(!isOpen);
                  }}
                  className={`transition-all duration-300 group-hover:text-white`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
