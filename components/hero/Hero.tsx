import { Container } from "@/components/global.styled";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle?: string; 
    companies?: Company[];
}

interface Company {
    _id: string;
    name: string;
    logo: string;
}

const Hero = ({ title, subtitle, companies } : HeroProps) => {
    return(
        <div className="hero">
            <Container>
                <div className="px-8">
                    <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold">{title}</h1>
                    {subtitle &&
                        <p className="my-4 text-xl xl:text-2xl text-gray font-medium">{subtitle}</p>
                    }
                    <div>
                        {companies &&
                            <div className="py-8">
                                <ul className="flex items-center justify-between flex-wrap">
                                {companies.map((company) => {
                                    return (
                                    <li key={company._id} className="p-4"> 
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={100}
                                            height={100}
                                        />
                                    </li>
                                    )
                                })}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                
                
                
            </Container>
        </div>
    )
};

export default Hero;