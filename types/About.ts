import { PortableTextBlock } from "sanity";
import { Technology } from "./Technology";

export type About = {
    name: string;
    content: PortableTextBlock[];
    technologies: Technology[];
};