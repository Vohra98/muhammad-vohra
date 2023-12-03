import { getCompanies } from "@/sanity/sanity-utils";
import Hero from "@/components/hero/Hero";
import { Duplex } from "stream";

const Home = async () => {

  const companies = await getCompanies();

  console.log(companies);

  return (
    <>
      <div className="py-24">
          <Hero 
            title="Turning Your vision into a reality"
            subtitle="Helping you with your next big project."
            companies={companies}
          />
      </div>
    </>
    
    
  )
}

export default Home;
