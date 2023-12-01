import { Rule } from "sanity";

const companies = {
    name: 'companies',
    title: 'Companies',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: false
        },
        validation: (Rule: Rule) => [
            Rule.required().error('Logo is required'),
          ]
      }
    ]
}

export default companies;