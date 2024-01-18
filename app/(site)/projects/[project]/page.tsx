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

  return (
    <div className="pt-32">
      <Container>
        <ProjectHero project={project} />
      </Container>
    </div>
  );
};

export default project;
