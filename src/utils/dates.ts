import type { ExperienceFrontmatter } from '@content/_schemas'
import { formatDistance } from 'date-fns'
import { fr } from 'date-fns/locale'

export type Dates = Pick<ExperienceFrontmatter, 'startDate' | 'endDate'>

const formatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long'
})

export function formatRange({ startDate, endDate = new Date() }: Dates) {
  return `${formatter.formatRange(startDate, endDate)} (${formatDistance(
    endDate,
    startDate,
    { locale: fr }
  )})`
}
