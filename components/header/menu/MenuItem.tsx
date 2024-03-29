import { motion } from "framer-motion";
import Link from "next/link";
import { MenuIcon, MenuText } from "./menu.styles";

interface MenuItemProps {
  i: number;
  name: string;
  url: string;
  target: string;
  menuclick: () => void;
}


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#8458ff", "#7444fd", "#5e27fa", "#7700FF", "#5115fa"];

const MenuItem = ({ i, name, url, target, menuclick } : MenuItemProps) => {
  const style = { 
    border: `2px solid ${colors[i]}`,
    color: colors[i],
   };
  return (
    <motion.li 
        className="mb-4 flex items-center pointer"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
      <Link
        href={url}
        className="flex items-center justify-center w-full"
        target={target}
        onClick = {() => menuclick()}
      >
        <MenuIcon style={style} />
        <MenuText style={style}>
          {name}
        </MenuText>
      </Link>
    </motion.li>
    
  );
};


export default MenuItem;