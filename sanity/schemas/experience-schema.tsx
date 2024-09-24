import { title } from "process";
import { Rule } from "sanity";

const experience = {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string'
      },
      {
        name: 'jobTitle',
        title: 'Job title',
        type: 'string'
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
        validation: (Rule: Rule) => [
          Rule.required().error('Start date is required'),
        ]
      },
      {
        name: 'isCurrent',
        title: 'Is Current',
        type: 'boolean'
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date',
        hidden: ({ document} : { document: any }) => document?.isCurrent,
        validation: (Rule: Rule) => [
          Rule.custom((endDate: any, context: any) => {
            const startDate = context.document.startDate
            const current = context.document.isCurrent
            if (current && endDate) {
              return 'End date cannot be set if current is true'
            } else if (startDate && startDate > endDate) {
              return 'End date cannot be before start date'
            }
            return true
          }),
        ]
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: false
        },
        fields: [
            {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string',
            }
        ]
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      }
    ]
  }
  
  export default experience;