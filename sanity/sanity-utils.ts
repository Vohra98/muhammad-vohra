import { Project } from "@/types/Projects";
import { client } from "./lib/client";

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        `*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            technologies[]->{
                _id,
                name,
                experience
            },
            blockquote,
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return client.fetch(
        `*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            technologies[]->{
                _id,
                name,
                experience
            },
            blockquote,
        }`,
        {slug}
    )
}