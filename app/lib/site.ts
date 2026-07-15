// Single source of truth for site-wide metadata (SEO, OG, JSON-LD, sitemap).
// Update `url` to the real production domain when it's confirmed.
export const SITE = {
  url: 'https://orbinozevents.com',
  name: 'Orbinoz Event Planners',
  shortName: 'Orbinoz',
  legalName: 'Orbinoz Event Planners Pvt Ltd',
  title: 'Orbinoz Event Planners Pvt. Ltd.',
  description:
    'Orbinoz is a corporate event management company in Kochi, Kerala. Conferences, product launches, award nights, dealer meets and brand activations — planned and produced end to end.',
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
    'https://www.instagram.com/orbinoz.eventplanners',
    'https://www.linkedin.com/company/orbinoz-event-planners-pvt-ltd/',
    'https://www.facebook.com/share/1JopeK5572/',
  ],
} as const;
