import {} from 'astro:components'
import Github from '@icons/Github.astro'
import Linkedin from '@icons/Linkedin.astro'
import Mail from '@icons/Mail.astro'
import Phone from '@icons/Phone.astro'
import PDF from '@icons/PDF.astro'
import pdf from '/assets/Alexis Lucas - CV.pdf'

interface Social {
  href: string
  linkTitle: string
  // No known type for Astro components
  Icon: (props: Record<string, unknown>) => unknown
  printable: boolean
}

export const SITE = {
  author: 'Alexis Lucas (Sixela Sacul)',
  description:
    'Alexis Lucas (ou Sixela Sacul), je suis développeur web spécialisé front-end (React, TypeScript, Tailwind) sur Lyon. Je suis curieux, créatif et passionné et disponible pour vos projets en freelance.',
  title: 'Alexis Lucas - CV'
}

export const SOCIALS: Social[] = [
  {
    href: 'https://github.com/sixelasacul',
    linkTitle: 'Mon profil GitHub',
    printable: true,
    Icon: Github
  },
  {
    href: 'https://www.linkedin.com/in/sixelasacul/',
    linkTitle: 'Mon profil LinkedIn',
    printable: true,
    Icon: Linkedin
  },
  {
    href: 'mailto:pro@sixe.la',
    linkTitle: 'Me contacter par mail',
    printable: true,
    Icon: Mail
  },
  {
    href: 'tel:+33635109657',
    linkTitle: "M'appeler",
    printable: true,
    Icon: Phone
  },
  {
    href: pdf,
    linkTitle: 'Télécharger la version PDF',
    printable: false,
    Icon: PDF
  }
]
