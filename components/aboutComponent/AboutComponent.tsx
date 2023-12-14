import { About } from '@/types/About';
import {PortableText} from '@portabletext/react'
import { Container } from '../global.styled';
import Image from 'next/image';

interface AboutProps {
    about: About
};

const AboutComponent = ({ about }: AboutProps) => {
    return (
        <>
            <Container>
                <div className="min-h-screen flex flex-col-reverse lg:flex-row gap-8 items-center justify-center">
                    {about?.map((about) => {
                        return (
                            <>
                                <div className="flex-1">
                                    <h2 className="text-4xl font-bold">{about.name}</h2>
                                    <PortableText
                                        value={about.content}
                                    />

                                </div>
                                <div className='flex-1'>
                                    <Image width={400} height={400} src={about.image} alt="muhammad Vohra memoji " />
                                </div>
                            </>
                            
                        )
                    })}
                </div>
            </Container>
        </>
        
    );
};
export default AboutComponent;