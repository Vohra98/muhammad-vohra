import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i, name, url }) => {
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
      >
        <div className="icon-placeholder" style={style} />
        <div className="text-placeholder p-2" style={style}>
          {name}
        </div>
      </Link>
    </motion.li>
    
  );
};


export default MenuItem;