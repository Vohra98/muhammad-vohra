const about = {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {
                type: 'technologies'
              }
            ]
          }
        ]
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'years',
        title: 'Years',
        type: 'number'
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
  
  export default about;