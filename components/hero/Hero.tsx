import { Container } from "@/components/global.styled";

interface HeroProps {
    title: string;
    subtitle?: string;

}

const Hero = ({ title, subtitle } : HeroProps) => {
    return(
        <div className="hero">
            <Container>
                <div className="px-8">
                    <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold">{title}</h1>
                    {subtitle &&
                        <p className="my-4 text-xl xl:text-2xl text-gray font-medium">{subtitle}</p>
                    }
                </div>
                
            </Container>
        </div>
    )
};

export default Hero;