import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import {
  experienceSchema,
  sideProjectSchema,
  educationsSchema
} from './content/_schemas'

const experiences = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experiences' }),
  schema: experienceSchema
})

const sideProjects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sideProjects' }),
  schema: sideProjectSchema
})

const educations = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/educations' }),
  schema: educationsSchema
})

export const collections = { experiences, sideProjects, educations }
