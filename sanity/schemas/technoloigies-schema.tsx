import { Rule } from "sanity";

const technoliogies = {
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Technology Name',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Technology Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Foundational', value: 'foundational'},
                    {title: 'Frontend ', value: 'frontend '},
                    {title: 'Tooling and Technologies', value: 'toolingAndTechnologies'},
                ]
            }
        },
        {
            name: 'experience',
            title: 'Experience Percentage',
            type: 'number',
            validation: (Rule: Rule) => [
                Rule.min(50).warning('You should have at least 50% experience to list a technology'),
                Rule.max(100).error('Percentages should be less than 100%')
            ]
        }
    ]
};

export default technoliogies;