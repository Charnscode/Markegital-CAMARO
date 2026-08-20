export const packages = [
  {
    id: 'offre-1',
    name: 'Offre 1',
    price: '100.000',
    duration: '1 mois',
    highlight: false,
    features: [
      'Facebook + TikTok : 1 publication / jour',
      'Animation de page & réponses aux commentaires',
      'Calendrier éditorial (script + texte)',
      '1 campagne publicitaire payante',
      'Analyse publicitaire gratuite',
      '2 affiches sur commande',
    ],
  },
  {
    id: 'offre-2',
    name: 'Offre 2',
    price: '250.000',
    duration: '3 mois',
    highlight: false,
    features: [
      'Facebook + TikTok : 3 publications / jour',
      'Animation de page & réponses aux commentaires',
      'Calendrier éditorial (script + texte)',
      '3 campagnes publicitaires payantes',
      'Analyse publicitaire gratuite',
      '2 affiches / mois sur commande',
    ],
  },
  {
    id: 'offre-3',
    name: 'Offre 3',
    price: '400.000',
    duration: '6 mois',
    highlight: false,
    features: [
      'Facebook + TikTok : 3 publications / jour',
      'Animation de page & réponses aux commentaires',
      'Calendrier éditorial (script + texte)',
      '4 campagnes publicitaires payantes',
      'Analyse publicitaire gratuite',
      '2 affiches / mois sur commande',
    ],
  },
  {
    id: 'offre-4',
    name: 'Offre 4',
    price: '400.000',
    duration: '3 mois',
    highlight: true,
    features: [
      'Facebook + TikTok : 3 publications / jour',
      'Calendrier éditorial complet',
      '10 campagnes publicitaires payantes',
      'Analyse publicitaire gratuite',
      'Création de votre site web',
      '2 affiches / mois sur commande',
    ],
  },
  {
    id: 'offre-5',
    name: 'Offre 5',
    price: '700.000',
    duration: '6 mois',
    highlight: false,
    features: [
      'Facebook + TikTok : 3 publications / jour',
      'Calendrier éditorial complet',
      '10 campagnes publicitaires payantes',
      'Analyse publicitaire gratuite',
      'Création de votre site web',
      '2 affiches / mois sur commande',
    ],
  },
  {
    id: 'offre-6',
    name: 'Offre 6',
    price: '550.000',
    duration: '3 mois',
    highlight: false,
    features: [
      'Facebook + TikTok : 3 publications / jour',
      '10 campagnes publicitaires payantes',
      'Analyse publicitaire gratuite',
      'Création de votre site web',
      'Un tunnel de vente',
      '2 affiches / mois sur commande',
    ],
  },
  {
    id: 'offre-7',
    name: 'Offre 7',
    price: '900.000',
    duration: '6 mois',
    highlight: true,
    features: [
      'Facebook + TikTok : 3 publications / jour',
      '10 campagnes publicitaires payantes',
      'Analyse publicitaire gratuite',
      'Création de votre site web',
      'Un tunnel de vente',
      '2 affiches / mois sur commande',
    ],
  },
]

export const graphismeSpecial = {
  title: 'Offre spéciale — Graphisme Design',
  subtitle: "Recrutez l'agence comme votre graphiste personnel. Affiches illimitées.",
  tiers: [
    { duration: '1 mois', price: '40.000' },
    { duration: '3 mois', price: '110.000' },
    { duration: '6 mois', price: '200.000' },
  ],
  funnels: [
    { label: '1 tunnel de vente', price: '50.000' },
    { label: '3 tunnels de vente', price: '120.000' },
    { label: 'Plus de 3 tunnels de vente', price: '-15%' },
  ],
}

export const mediaBuyingSpecial = {
  title: 'Offre spéciale — Media Buying',
  cases: [
    {
      label: 'Budget publicitaire inférieur à 50.000 F',
      detail: '5.000 F par semaine + analyse publicitaire gratuite',
      example: "Ex. budget de 40k sur 1 semaine → 5k. Sur 2 semaines → 10k.",
    },
    {
      label: 'Budget publicitaire supérieur à 50.000 F',
      detail: '20% du budget publicitaire, quelle que soit la durée + analyse gratuite',
    },
  ],
}

export const paymentTerms = [
  'Moitié du coût du service à régler avant le début de la prestation',
  'Le reste du paiement à la moitié de la durée du service',
  'Signature de contrat obligatoire pour tout service',
  'Paiement possible par Mobile Money (Moov, MTN) ou par virement bancaire',
]
