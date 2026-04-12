import type { ExperienceFrontmatter } from '@content/_schemas'
import { formatDistance } from 'date-fns'
import type { Locale as DateFnsLocale } from 'date-fns'
import { fr, enUS } from 'date-fns/locale'
import type { Locale } from '@utils/i18n'

export type Dates = Pick<ExperienceFrontmatter, 'startDate' | 'endDate'>

const formatters: Record<Locale, Intl.DateTimeFormat> = {
  fr: new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long' }),
  en: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' })
}

const dateFnsLocales: Record<Locale, DateFnsLocale> = {
  fr,
  en: enUS
}

export function formatRange(
  { startDate, endDate = new Date() }: Dates,
  locale: Locale = 'fr'
) {
  return `${formatters[locale].formatRange(startDate, endDate)} (${formatDistance(
    endDate,
    startDate,
    { locale: dateFnsLocales[locale] }
  )})`
}
