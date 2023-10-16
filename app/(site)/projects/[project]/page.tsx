import { getProject } from "@/sanity/sanity-utils";
import {PortableText} from '@portabletext/react'
import Image from "next/image";

type Props = {
    params: {
        project: string;
    }
}

const project =  async ({ params }: Props) => {

    const slug = params.project;

    const project = await getProject(slug);

    console.log(project.image);

    return(
        <div className="">
            <header className="mb-10 flex items-center justify-between">
                <div>
                    <h1 className="text-7xl font-extrabold">
                    <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</span>
                </h1>

                <div className="mt-16 max-w-lg">
                <PortableText
                    value={project.content}
                />
                </div></div>
                

                <a className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full rounded-tr-none transition" href={project.url} target="_blank" rel="noopener noreferrer">View live site</a>
            </header>

            <div>
                <Image 
                  src={project.image}
                  width={1200}
                  height={600}
                  alt={project.name}
                  className="rounded-lg border border-gray-500 object-cover"
                />

                <div className="mt-8">
                    {project.technologies.map((technology) => {
                        return (
                            <span key={technology._id} className="bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2">{technology.name}</span>
                        )
                    })}
                </div>                
            </div>
            


        </div>
        
    )
}

export default project;