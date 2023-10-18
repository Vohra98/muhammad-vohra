import { Project } from "@/types/Projects";
import { About } from "@/types/About";
import { client } from "./lib/client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}

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


export async function getAbout(): Promise<About> {
    return client.fetch(
        `*[_type == "about"][0]{
            _id,
            _createdAt,
            name,
            description,
            email,
            years,
            location,
            "image": image.asset->url,
            content
          }
          `
    )
}