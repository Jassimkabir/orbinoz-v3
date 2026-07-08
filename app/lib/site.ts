// Single source of truth for site-wide metadata (SEO, OG, JSON-LD, sitemap).
// Update `url` to the real production domain when it's confirmed.
export const SITE = {
  url: 'https://orbinozevents.com',
  name: 'Orbinoz Event Planners',
  shortName: 'Orbinoz',
  legalName: 'Orbinoz Event Planners Pvt Ltd',
  title: 'Orbinoz | Corporate Event Studio',
  description:
    'Orbinoz Event Planners designs and produces corporate events, entertainment, staging and brand experiences. Moments engineered to feel inevitable. Kochi, Kerala.',
  locale: 'en_IN',
  ogImage: '/hero/1.jpg',
  telephone: '+914843504541',
  email: 'info@orbinozevents.com',
  address: {
    street: '1441/30, First Floor, VKV Ln Rd, Chembumukku, Vazhakkala',
    locality: 'Kochi',
    region: 'Kerala',
    postalCode: '682030',
    country: 'IN',
  },
  socials: [
    'https://www.instagram.com/orbinozevents/',
    'https://www.linkedin.com/company/orbinoz',
    'https://twitter.com/orbinoz',
    'https://www.facebook.com/orbinozevents',
  ],
} as const;
