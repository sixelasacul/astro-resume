import { defineCollection } from 'astro:content'
import {
  experienceSchema,
  sideProjectSchema,
  educationsSchema
} from './_schemas'

const experiences = defineCollection({
  schema: experienceSchema
})

const sideProjects = defineCollection({
  schema: sideProjectSchema
})

const educations = defineCollection({
  schema: educationsSchema
})

export const collections = { experiences, sideProjects, educations }
