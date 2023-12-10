import HomePage from "@/pages/home/HomePage";
import { getCompanies } from "@/sanity/sanity-utils";
import { getProjects } from "@/sanity/sanity-utils";

const Home = async () => {
  const companies = await getCompanies();
  const projects = await getProjects();

  return (
    <HomePage companies={companies} projects={projects}/>
  );
};

export default Home;
