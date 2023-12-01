import { Container } from "@/components/global.styled";

const Hero = ({ title, subtitle }) => {
    return(
        <div className="hero">
            <Container>
                <div className="px-8">
                    <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold">{title}</h1>
                    <p className="my-4 text-xl xl:text-2xl text-gray font-medium">{subtitle}</p>
                </div>
                
            </Container>
        </div>
    )
};

export default Hero;