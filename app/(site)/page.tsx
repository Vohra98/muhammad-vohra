import HomePage from "@/pages/home/HomePage";
import { getCompanies, getProjects, getAbout } from "@/sanity/sanity-utils";

const Home = async () => {
  const companies = await getCompanies();
  const projects = await getProjects();
  const about = await getAbout();

  return (
    <HomePage companies={companies} projects={projects} about={about}/>
  );
};

export default Home;
