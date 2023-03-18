import Github from '@icons/Github.astro'
import Linkedin from '@icons/Linkedin.astro'
import Mail from '@icons/Mail.astro'
import Phone from '@icons/Phone.astro'
import PDF from '@icons/PDF.astro'
import pdf from '/assets/Alexis Lucas - CV.pdf'

interface Social {
  href: string
  linkTitle: string
  Icon: any // No known type for Astro components
  printable: boolean
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
    href: 'mailto:sixela.sacul.pro@pm.me',
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
