import { getCompanies } from "@/sanity/sanity-utils";
import Hero from "@/components/hero/Hero";
import { Duplex } from "stream";

const Home = async () => {
  const companies = await getCompanies();

  return (
    <>
      <Hero
        title={[
          <span key="1">Turning your </span>,
          <span key="2"
                className="bg-gradient-to-r from-light via-primary to-primaryDark text-transparent bg-clip-text"
          >
            vision
          </span>,
          <span key="3"> into a reality</span>,
        ]}
        subtitle="Helping you with your next big project."
        companies={companies}
        button={{ text: "Let's talk", link: "/contact" }}
        position="left"
      />
    </>
  );
};

export default Home;
