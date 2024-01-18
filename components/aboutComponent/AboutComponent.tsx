/* eslint-disable @next/next/no-img-element */

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
                <div className="min-h-screen">
                    {about?.map((about) => {
                        return (
                            <div key={1} className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-center'>
                                <div data-testid="about-section" className="flex-1 text-xl xl:text-3xl font-medium prose-p:text-gray prose-headings:text-4xl prose-strong:text-white prose-p:leading-normal prose-headings:leading-normal">
                                    <PortableText
                                        value={about.content}
                                    />
                                </div>
                                <div className='flex-1 flex ietms-center justify-center'>
                                    <img width={400} height={400} src={about.image} alt="muhammad Vohra memoji" className='w-full'/>
                                </div>
                            </div>
                            
                        )
                    })}
                </div>
            </Container>
        </>
        
    );
};
export default AboutComponent;