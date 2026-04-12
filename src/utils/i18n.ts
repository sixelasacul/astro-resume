export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]

export const ui = {
  fr: {
    'site.title': 'Alexis Lucas - CV',
    'site.description':
      'Alexis Lucas (ou Sixela Sacul), je suis développeur et dev ops web spécialisé front-end (React, TypeScript, Tailwind) sur Lyon. Je suis curieux, créatif et passionné et disponible pour vos projets en freelance.',

    'home.jobTitle': "Ingénieur d'études web front-end",
    'home.intro':
      "Fort de 8 ans d'expérience en développement web front-end et dev ops, acquise à Dublin et en France, je propose mes compétences en freelance en étant basé à Lyon. Ma créativité, ma curiosité et ma passion pour l'écosystème JS sont des atouts que je souhaite mettre à profit dans vos projets.",
    'home.profileAlt': 'Photo de profil',

    'home.skills.hint':
      "(Sélectionnez une compétence pour filtrer les expériences et projets personnels qui l'utilisent)",
    'home.sections.skills': 'Compétences',
    'home.sections.experience': 'Expériences',
    'home.sections.sideProjects': 'Projets personnels',
    'home.seeMoreOnGithub': '(Voir plus sur Github)',
    'home.sections.education': 'Formations',

    'socials.github': 'Mon profil GitHub',
    'socials.linkedin': 'Mon profil LinkedIn',
    'socials.mail': 'Me contacter par mail',
    'socials.pdf': 'Télécharger la version PDF'
  },
  en: {
    'site.title': 'Alexis Lucas - Resume',
    'site.description':
      'Alexis Lucas (or Sixela Sacul), front-end focused web developer and dev ops (React, TypeScript, Tailwind) based in Lyon. Curious, creative, and passionate — available for freelance projects.',

    'home.jobTitle': 'Front-end Web Engineer',
    'home.intro':
      "With over 8 years of experience in front-end web development and dev ops, built across Dublin and France, I offer my skills as a freelancer based in Lyon. My creativity, curiosity, and passion for the JS ecosystem are assets I'm eager to bring to your projects.",
    'home.profileAlt': 'Profile picture',

    'home.skills.hint':
      '(Select a skill to filter the experiences and side projects that use it)',
    'home.sections.skills': 'Skills',
    'home.sections.experience': 'Experience',
    'home.sections.sideProjects': 'Side Projects',
    'home.seeMoreOnGithub': '(See more on GitHub)',
    'home.sections.education': 'Education',

    'socials.github': 'My GitHub profile',
    'socials.linkedin': 'My LinkedIn profile',
    'socials.mail': 'Get in touch by email',
    'socials.pdf': 'Download the PDF version'
  }
} as const satisfies Record<Locale, Record<string, string>>

export type TranslationKey = keyof (typeof ui)[Locale]

export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return ui[locale][key]
  }
}
