import Github from '@icons/Github.astro'
import Linkedin from '@icons/Linkedin.astro'
import Mail from '@icons/Mail.astro'
import PDF from '@icons/PDF.astro'
import pdf from '/assets/Alexis Lucas - CV.pdf'

console.log(pdf)

interface Social {
  href: string
  linkTitle: string
  Icon: any // No known type for Astro components
}

export const SITE = {
  author: 'Alexis Lucas',
  description: 'Mon CV, fait avec Astro.',
  title: 'Alexis Lucas - CV'
}

export const SOCIALS: Social[] = [
  {
    href: 'https://github.com/sixelasacul',
    linkTitle: 'Mon profil GitHub',
    Icon: Github
  },
  {
    href: 'https://www.linkedin.com/in/sixelasacul/',
    linkTitle: 'Mon profil LinkedIn',
    Icon: Linkedin
  },
  {
    href: 'mailto:sixela.sacul.pro@pm.me',
    linkTitle: 'Me contacter par mail',
    Icon: Mail
  },
  {
    href: pdf,
    linkTitle: 'Télécharger la version PDF',
    Icon: PDF
  }
]
