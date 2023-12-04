import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Container } from "@/components/global.styled";
import Hero from "@/components/hero/Hero";
import { getProjects } from "@/sanity/sanity-utils";

const Projects = async () => {

  const projects = await getProjects();

  return (
    <>
        <Hero
            title="Projects"
            position="left"
        />

        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {projects.map((project) => {
              return (
                <ProjectCard key={project._id} project={project}/>
              )
            })}
          </div>
        </Container>

        

        
    </>
  )
}

export default Projects;