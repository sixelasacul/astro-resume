# My resume

Fait avec [Astro](https://astro.build/), inspiré par le thème [Astro Paper](https://github.com/satnaing/astro-paper).

Une ancienne implémentation, inachevée, utilisant Gatsby peut être trouvée ici: [sixelasacul/gatsby-resume](https://github.com/sixelasacul/gatsby-resume).

Pour générer le CV au format PDF, il faut lancer `pnpm pdf` et utiliser la convertisseur PDF du navigateur au moment de l'impression, avec les paramètres suivants :

- Format A4
- Imprimer les arrière-plans
- Ne pas imprimer les en-têtes et pieds de page
- Scale : 66% (pour tenir sur 2 pages)
- Marges personnalisées
  - haut et bas : 2.54mm, 0.10"
  - gauche et droite : 0mm, 0"

## TODOs

- [ ] Color code for skills??? Like tests, front, back, infra, tools, idk
- [ ] Rethink layout to not take like 3 pages wtf
  - [ ] First experiences are smaller, I could group them like side projects
  - [ ] Probably too many active skills
  - [ ] Header could be all horizontal (links right next to the profile)
    - [ ] or at least have all links in one line
  - [ ] Instead of showing whole link, just the external link logo
- [X] Make it available in english (thanks ai...)
  - [X] Switcher button not visible in print
  - [X] Detect user language and move to /en
  - [X] Specific PDF
  - [X] Localized content
- [ ] Move to oxfmt, oxlint
