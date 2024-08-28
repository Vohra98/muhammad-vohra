import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { MenuWrapper } from "./menu.styles";

interface NavProps {
  className?: string;
  menuclick : () => void;
};

const MotionMenuWrapper : any = motion(MenuWrapper);

const variants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ( {className, menuclick }: NavProps ) => {

  return (
    <MotionMenuWrapper
      className={className}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      data-testid="sidebar"
    >
      {itemIds?.map((item) => (
        <MenuItem key={item.id} i={item.id} name={item.name} url={item.url} menuclick={menuclick} target={item.target}/>
      ))}
    </MotionMenuWrapper>
  )

};

const itemIds = [
  {
    id: 0,
    name: "Home",
    url: "/",
    target: "_self"
  },
  {
    id: 1,
    name: "About",
    url: "/#about",
    target: "_self"
  },
  {
    id: 2,
    name: "Projects",
    url: "/#projects",
    target: "_self"
  },
  {
    id: 3,
    name: "Contact",
    url: "/#contact",
    target: "_self"
  },
  {
    id: 4,
    name: "Download CV",
    url: "/muhammad-vohra-cv.pdf",
    target: "_blank"
  },
];

export default Navigation;
