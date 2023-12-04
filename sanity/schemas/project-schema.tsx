const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Project Name',
            type: 'string'
        },
        {
            name : 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true
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
            name: 'mobileImage',
            title: 'Mobile Project Image',
            type: 'image',
            options: {
                hotspot: false
            },
        },
        {
            name: 'url',
            title: 'Project URL',
            type: 'url'
        },
        {
            name: 'technologies',
            title: 'Technologies Used',
            type: 'array',
            of: [{type: 'reference', to: {type: 'technologies'}}]
        },
        {
            name: 'content',
            title: 'Project Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'blockquote',
            title: 'Blockquote',
            type: 'object',
            fields: [
                {name: 'quote', type: 'string', title: 'Quote'},
                {name: 'author', type: 'string', title: 'Author'},
            ]
        }
    ]
}

export default project;