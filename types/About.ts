import { PortableTextBlock } from "sanity";
import { Technology } from "./Technology";

export type About = {
    name: string;
    image: string;
    content: PortableTextBlock[];
    technologies: Technology[];
};