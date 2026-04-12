import { getCollection } from 'astro:content'
import type { Locale } from './i18n'

export async function getActiveSkills(locale: Locale) {
  const experiences = await getCollection('experiences', (e) =>
    e.id.startsWith(`${locale}/`)
  )
  const sideProjects = await getCollection('sideProjects', (e) =>
    e.id.startsWith(`${locale}/`)
  )

  const skillSet = new Set<string>()
  experiences.forEach((exp) => {
    const { active = [] } = exp.data.skills
    active.forEach((skill) => {
      skillSet.add(skill)
    })
  })
  sideProjects.forEach((project) => {
    const { active = [] } = project.data.skills
    active.forEach((skill) => {
      skillSet.add(skill)
    })
  })

  return skillSet
}

export function encodeSkill(skill: string) {
  return encodeURIComponent(skill.toLowerCase().replaceAll(' ', '-'))
}
