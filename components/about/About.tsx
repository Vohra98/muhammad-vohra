import { About } from "@/types/About";
import { Container } from "../global.styled";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

interface AboutProps {
  about: About;
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="py-56 pb-24 about__gradient z-10">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-16"
            data-testid="title"
          >
            <span className="bg-gradient-to-r from-light via-primary to-primaryDark text-transparent bg-clip-text">Hi, I'm</span> Muhammad
          </h2>
          <div className="flex flex-col items-center justify-between gap-16">
            <div data-testid="content" className="text-xl xl:text-2xl text-center prose-strong:text-primary prose-headings:text-3xl prose-headings:pb-4">
              <PortableText value={about.content} />
            </div>
            <ul className="w-full flex flex-wrap">
                {about.technologies.map((technology) => (
                  <li
                    key={technology._id}
                    className="flex items-center justify-between py-4 px-8 w-full lg:w-1/2"
                  >
                    <h5 className="flex-1 text-xl">{technology.name}</h5>
                    <div className="flex-1 w-full h-2 bg-light rounded-full">
                        <motion.div
                            className="h-2 rounded-full bg-primary w-full"
                            initial={{ width: 0 }}
                            animate={{ width: technology.experience + "%" }}
                            transition={{ delay: 1, duration: 1 }}
                            role="progressbar"
                            aria-label={technology.experience + "%"}
                        >
                        </motion.div>
                    </div>
                    
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
