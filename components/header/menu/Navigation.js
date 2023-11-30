import { motion } from "framer-motion";
import MenuItem from "./MenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => (
  <motion.ul className="absolute top-12 " variants={variants}>
    {itemIds.map(item => (
      <MenuItem i={item.id} key={item.id} name={item.name} url={item.url} />
    ))}
  </motion.ul>
  
);

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
  }
];


export default Navigation;