import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    blurb: string;
    image: string;
    mobileImage: string;
    url: string;
    technologies: Array<{
        _id: string;
        name: string;
        experience: number;
    }>;
    content: PortableTextBlock[];
    blockquote: {
        quote: string;
        author: string;
    }

};