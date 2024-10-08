import { Project } from "@/types/Projects";
import { About } from "@/types/About";
import { client } from "./lib/client";
import imageUrlBuilder from '@sanity/image-url'
import { Experience } from "@/types/Experience";
import { Company } from "@/types/Company";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        `*[_type == "project"][!(_id in path("drafts.**"))] | order(_createdAt desc) {
            _id,
            name,
              order,
            blurb,
            "image": image.asset->url,
            "mobileImage": mobileImage.asset->url,
            technologies[]->{
                _id,
                name,
                experience
            },
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
            "mobileImage": mobileImage.asset->url,
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

export async function getExperiences(): Promise<Experience[]> {
    return client.fetch(
        `*[_type == "experience"] | order(endDate desc){
            _id,
            _createdAt,
            companyName,
            jobTitle,
            startDate,
            isCurrent,
            endDate,
            content,
            "logo": logo.asset->url,
          }`
    )
}

export async function getExperience(id: string): Promise<Experience> {
    return client.fetch(
        `*[_type == "experience"] && id.current == $id[0]{
            _id,
            _createdAt,
            companyName,
            jobTitle,
            startDate,
            isCurrent,
            endDate,
            content
        }`,
        {id}
    )
}

export async function getCompanies(): Promise<Company[]> {
    return client.fetch(
        `*[_type == "companies"]{
            _id,
            name,
            "logo": logo.asset->url ,
          }`
    )
}

export async function getAbout(): Promise<About> {
    return client.fetch(
        `*[_type == "about"][0]{
            name,
            content,
            "image": image.asset->url,
            technologies[]->{
                _id,
                name,
                type,
                experience
            },
        }`
    )
}