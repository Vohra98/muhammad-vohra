import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project-schema'
import technoliogies from './schemas/technoloigies-schema'
import pages from './schemas/pages-schema'
import about from './schemas/about-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, technoliogies, pages, about],
}
