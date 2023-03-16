import type { SocialObjects } from './types'

export const SITE = {
  author: 'Alexis Lucas',
  desc: 'My resume, built with Astro.',
  title: 'Alexis Lucas'
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/sixelasacul',
    linkTitle: `${SITE.author} on Github`,
    active: true
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sixelasacul/',
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true
  },
  {
    name: 'Mail',
    href: 'mailto:sixela.sacul.pro@pm.me',
    linkTitle: `Send an email to ${SITE.author}`,
    active: true
  }
]
