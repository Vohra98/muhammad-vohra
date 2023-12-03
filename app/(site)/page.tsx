import { getCompanies } from "@/sanity/sanity-utils";
import Hero from "@/components/hero/Hero";


const Home = async () => {
  return (
    <div className="py-24">
        <Hero 
          title="Your vision into a reality"
          subtitle="Helping you with your next big project."
        />
    </div>
    
  )
}

export default Home;