import Github from '@icons/Github.astro'
import Linkedin from '@icons/Linkedin.astro'
import Mail from '@icons/Mail.astro'
import PDF from '@icons/PDF.astro'
import { type Locale, useTranslations } from '@utils/i18n'

export interface Social {
  href: string
  linkTitle: string
  // No known type for Astro components
  Icon: (props: Record<string, unknown>) => unknown
  printable: boolean
}

export const SITE = {
  author: 'Alexis Lucas (Sixela Sacul)'
}

const PDF_HREFS: Record<Locale, string> = {
  fr: '/assets/Alexis Lucas - CV.pdf',
  en: '/assets/Alexis Lucas - Resume.pdf'
}

export function getSocials(locale: Locale): Social[] {
  const t = useTranslations(locale)

  return [
    {
      href: 'https://github.com/sixelasacul',
      linkTitle: t('socials.github'),
      printable: true,
      Icon: Github
    },
    {
      href: 'https://www.linkedin.com/in/sixelasacul/',
      linkTitle: t('socials.linkedin'),
      printable: true,
      Icon: Linkedin
    },
    {
      href: 'mailto:pro@sixe.la',
      linkTitle: t('socials.mail'),
      printable: true,
      Icon: Mail
    },
    {
      href: PDF_HREFS[locale],
      linkTitle: t('socials.pdf'),
      printable: false,
      Icon: PDF
    }
  ]
}
