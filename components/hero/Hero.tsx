import { Container } from "@/components/global.styled";
import Image from "next/image";
import Button from "@/components/button/Button";

interface HeroProps {
  title: [JSX.Element, JSX.Element, JSX.Element] | string;
  subtitle?: string;
  button? : button;
  companies?: Company[];
  position?: "center" | "left" ;
}

interface Company {
  _id: string;
  name: string;
  logo: string;
}

interface button {
    text: string;
    link: string;
}

const Hero = ({ title, subtitle, companies, button, position }: HeroProps) => {
  return (
    <div className={`hero py-24 text-${position}`}>
      <Container>
        <div className="px-8">
          <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-bold max-w-[65rem] ${position == 'center' ? 'mx-auto text-center' : 'ml-0'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className="my-4 text-xl xl:text-2xl text-gray font-medium">
              {subtitle}
            </p>
          )}
          {button &&
            <div className="my-16 lg:my-24">
                <Button 
                    text={button.text}
                    url={button.link}
                    testId="hero-button"
                />
            </div>
          }
          {companies && (
            <div className="py-8">
              <ul data-testid="companies-list" className="flex items-center justify-between flex-wrap">
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
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
