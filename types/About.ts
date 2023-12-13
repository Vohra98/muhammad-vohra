import { PortableTextBlock } from "sanity";

export type About = [{
    name: string;
    image: string;
    content: PortableTextBlock[];
}];