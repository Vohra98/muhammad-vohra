import { About } from '@/types/About';
import { Container } from "../global.styled";
import { motion } from "framer-motion";

interface AboutProps {
    about: About
};

const About = ({ about } : AboutProps) => {

    return (
        <>
            <Container>
                <div>
                    <h2
                        className="text-5xl lg:text-6xl xl:text-7xl font-bold text-center"
                        data-testid="title"
                    >
                        About Me
                    </h2>
                    <motion.p
                        className="my-4 text-xl xl:text-2xl text-gray font-medium text-center"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: .5 }}
                        >
                        front-end developer
                    </motion.p>
                </div> 
            </Container>
            
        </>
    )
};

export default About;