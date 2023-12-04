import { Container } from "@/components/global.styled";
import ProjectHero from "@/components/projectHero/ProjectHero";
import { getProject } from "@/sanity/sanity-utils";




type Props = {
  params: {
    project: string;
  };
};

const project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await getProject(slug);

  console.log(project);

  return (
    <>
      <Container>
        <ProjectHero project={project} />
      </Container>
    </>
  );
};

export default project;
