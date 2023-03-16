import { getCollection } from 'astro:content'

export async function getActiveSkills() {
  const experiences = await getCollection('experiences')
  const sideProjects = await getCollection('sideProjects')

  const skillSet = new Set<string>()
  experiences.forEach(exp => {
    const { active = [] } = exp.data.skills
    active.forEach(skill => {
      skillSet.add(skill)
    })
  })
  sideProjects.forEach(project => {
    const { active = [] } = project.data.skills
    active.forEach(skill => {
      skillSet.add(skill)
    })
  })

  return skillSet
}

export function encodeSkill(skill: string) {
  return encodeURIComponent(skill.toLowerCase().replaceAll(' ', '-'))
}
