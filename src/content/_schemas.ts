import { z } from 'astro:content'

export const experienceSchema = z
  .object({
    company: z.string(),
    title: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    skills: z.object({
      active: z.array(z.string()).optional(),
      inactive: z.array(z.string()).optional()
    })
  })
  .strict()

export type ExperienceFrontmatter = z.infer<typeof experienceSchema>

export const sideProjectSchema = z
  .object({
    name: z.string(),
    link: z.string(),
    startDate: z.date(),
    // techs instead?
    skills: z.object({
      active: z.array(z.string()).optional(),
      inactive: z.array(z.string()).optional()
    })
  })
  .strict()

export type SideProjectFrontmatter = z.infer<typeof sideProjectSchema>

export const educationsSchema = z
  .object({
    name: z.string(),
    diploma: z.string(),
    startDate: z.date(),
    endDate: z.date()
  })
  .strict()

export type EducationsFrontmatter = z.infer<typeof educationsSchema>
