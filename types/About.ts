import { PortableTextBlock } from "sanity";

export type About = {
    _id: string;
    _createdAt: Date;
    name: string;
    description: string;
    email: string;
    image: string;
    location: string;
    years: string;
    content: PortableTextBlock[];
};