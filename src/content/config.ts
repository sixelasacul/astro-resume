import { defineCollection } from 'astro:content'
import { experienceSchema, sideProjectSchema } from './_schemas'

const experiences = defineCollection({
  schema: experienceSchema
})

const sideProjects = defineCollection({
  schema: sideProjectSchema
})

export const collections = { experiences, sideProjects }
