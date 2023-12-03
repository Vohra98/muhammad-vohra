import { getCompanies } from "@/sanity/sanity-utils";
import Hero from "@/components/hero/Hero";
import { Duplex } from "stream";

const Home = async () => {

  const companies = await getCompanies();

  return (
    <>
      <div className="py-24">
          <Hero 
            title={["Turning your ", <span className="bg-gradient-to-r from-light via-primary to-primaryDark text-transparent bg-clip-text">vision</span> , " into a reality"]}
            subtitle="Helping you with your next big project."
            companies={companies}
            button={
              {text: "Get Started", link: "/contact"}
            }
          />
      </div>
    </>
    
    
  )
}

export default Home;
