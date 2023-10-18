const deskStructure = (S: any) =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
        .title('About Me')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')),
            ...S.documentTypeListItems().filter((listItem: any) => !['about'].includes(listItem.getId())),
    ])

export default deskStructure;
