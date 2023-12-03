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
    >
      {itemIds.map((item) => (
        <MenuItem key={item.id} i={item.id} name={item.name} url={item.url} menuclick = {menuclick} />
      ))}
    </MotionMenuWrapper>
  )

};

const itemIds = [
  {
    name: "Home",
    url: "/",
    id: 0,
  },
  {
    name: "About",
    url: "/about",
    id: 1,
  },
  {
    name: "Projects",
    url: "/projects",
    id: 2,
  },
  {
    name: "Contact",
    url: "/contact",
    id: 3,
  },
  {
    name: "Download CV",
    url: "/cv",
    id: 4,
  },
];

export default Navigation;
