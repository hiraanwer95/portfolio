export type PortfolioItem = {
  name: string
  imgUrl: string
  techUsed?: string
  link: string
  /** Extra destinations (e.g. Play Store + website). */
  extraLinks?: { label: string; href: string }[]
}

/**
 * Past & present projects (mobile, web, CRM). Images via site favicons where no single OG asset is bundled.
 */
export const portfolioWorks: PortfolioItem[] = [
  {
    name: 'Star Bazaar',
    techUsed: 'Entertainment · personalised video shoutouts',
    link: 'https://play.google.com/store/apps/details?id=com.app.starbazaar',
    imgUrl: '/works/starbazaar.png',
  },
  {
    name: 'Winner Winner',
    techUsed: 'Casual game · Android',
    link: 'https://winner-winner.en.uptodown.com/android',
    imgUrl: '/works/winner-winner.png',
  },
  {
    name: 'PartsBuzz',
    techUsed: 'Marketplace · cars & car parts',
    link: 'https://partsbuzz.com/',
    imgUrl: '/works/partsbuzz.png',
    extraLinks: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.partsbuzzapp',
      },
    ],
  },
  {
    name: 'GZ Motors',
    techUsed: 'Premium used vehicles · UK dealership & showroom',
    link: 'https://gzmotors.co.uk/',
    imgUrl: '/works/gzmotors.png',
  },
  {
    name: 'Muslim and Quran',
    techUsed: 'Islamic app & web — prayer times, Quran, Hadith, Qibla',
    link: 'https://muslimandquran.com/',
    imgUrl: '/works/muslim-and-quran.png',
  },
  {
    name: 'SCC CRM',
    techUsed: 'Chartered accountants · client CRM portal',
    link: 'https://crm.scc-ca.com/',
    imgUrl: '/works/scc-crm.png',
    extraLinks: [{ label: 'SCC website', href: 'https://scc-ca.com/' }],
  },
  {
    name: 'Colgate Palmolive — Store Perfect CRM',
    techUsed: 'Enterprise CRM / dashboard',
    link: 'https://storeperfect.colgate-palmolive.com.pk/staging2018/live/Dashboard',
    imgUrl: '/works/store-perfect.png',
  },
  {
    name: 'Brickart',
    techUsed: 'Image → brick mosaic plans · iOS / iPad',
    link: 'https://apps.apple.com/app/brickart/id6758808808',
    imgUrl: '/works/brickart.png',
  },
]

/** @deprecated Use portfolioWorks */
export const mobileApps = portfolioWorks
