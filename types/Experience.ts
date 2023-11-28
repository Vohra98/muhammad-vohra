import { PortableTextBlock } from "sanity";

export type Experience = {
    _id: string;
    _createdAt: Date;
    companyName: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
    content: PortableTextBlock[];
};