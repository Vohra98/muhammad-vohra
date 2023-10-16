import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const projects = await getProjects();

  return (
    <div className="">

      <h1 className="text-7xl font-extrabold">Hello I'm 
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Muhammad!</span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">Hello everyone, check out my projects</p>

      <h2 className="mt-24 font-bold text-gray-800 text-3xl">My projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          return (
            <Link href={`/projects/${project.slug}`} className="border bortder-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition" key={project._id}>
              {project.image && (
                <Image 
                  src={project.image}
                  width={750}
                  height={300}
                  alt={project.name}
                  className="rounded-lg border border-gray-500 object-cover"
                />
              )}
              <div className="mt-2 text-center font-semibold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
              
            </Link>
          )
        })}
      </div>
      
      
    </div>
  )
}

export default Home;