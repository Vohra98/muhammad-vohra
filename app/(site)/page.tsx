import {
  getCompanies,
  getProjects,
  getExperiences,
} from "@/sanity/sanity-utils";
import Hero from "@/components/hero/index";
const Home = async () => {
  const companies = await getCompanies();
  const experiences = await getExperiences();
  const projects = await getProjects();

  return (
    <>
      {/* This is the background image     */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 ">
        <picture>
          <source srcSet="/background.png" media="(min-width: 768px)" />
          <img
            src="/background-mobile.png"
            className="w-full h-full object-center object-cover"
            alt="background"
          ></img>
        </picture>
      </div>

      <main>
        {/* // Hero section */}
        <div className="min-h-[75vh] xl:min-h-[80vh]">
          <Hero
            title={[
              "Muhammad Vohra",
              "Software Engineer",
              "Frontend Focused",
              "Muhammad Vohra",
            ]}
            subtitle="Turning your vision into a reality"
            companies={companies}
            button={{ text: "Let's talk", link: "/contact" }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
