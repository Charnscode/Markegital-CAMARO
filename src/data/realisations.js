import tishHair from '../assets/realisations/tish-hair.jpg'
import blekkyCouture from '../assets/realisations/blekky-couture.jpg'
import greatcareEssence from '../assets/realisations/greatcare-essence.jpg'
import isamec1 from '../assets/realisations/isamec-1.jpg'
import isamec2 from '../assets/realisations/isamec-2.jpg'
import isamec3 from '../assets/realisations/isamec-3.jpg'
import soleilMiel1 from '../assets/realisations/soleil-miel-1.jpg'
import soleilMiel2 from '../assets/realisations/soleil-miel-2.jpg'
import soleilMiel3 from '../assets/realisations/soleil-miel-3.jpg'
import multiSecteurs from '../assets/realisations/multi-secteurs.jpg'
import adsResult1 from '../assets/realisations/ads-result-1.jpg'
import adsResult2 from '../assets/realisations/ads-result-2.jpg'
import adsResult3 from '../assets/realisations/ads-result-3.jpg'

// Chaque réalisation est rattachée au slug du service concerné
// (voir src/data/services.js) pour un classement par service proposé.
export const realisations = [
  {
    id: 'tish-hair',
    service: 'graphisme-design',
    brand: 'Tish Hair',
    description: "Affiche produit pour une marque de perruques et extensions premium, mettant en valeur plusieurs styles disponibles.",
    images: [tishHair],
  },
  {
    id: 'blekky-couture',
    service: 'graphisme-design',
    brand: 'Blekky Couture',
    description: "Visuel de présentation pour une maison de couture proposant tenues traditionnelles, tenues de bureau et sacs personnalisés.",
    images: [blekkyCouture],
  },
  {
    id: 'greatcare-essence',
    service: 'graphisme-design',
    brand: 'Greatcare Essence',
    description: "Affiche produit pour une marque de soins de la peau, orientée gamme premium et routine beauté.",
    images: [greatcareEssence],
  },
  {
    id: 'isamec',
    service: 'graphisme-design',
    brand: 'ISAMEC',
    description: "Série d'affiches pour un service de mécanique automobile à domicile : dépannage, réparation de bosses, peinture, remplacement de vitres.",
    images: [isamec1, isamec2, isamec3],
  },
  {
    id: 'soleil-miel',
    service: 'graphisme-design',
    brand: 'Soleil Miel',
    description: "Gamme d'affiches produits pour une marque de miel artisanal (miel d'acacia, miel de fleurs sauvages) et supports d'identité de marque.",
    images: [soleilMiel1, soleilMiel2, soleilMiel3],
  },
  {
    id: 'multi-secteurs',
    service: 'graphisme-design',
    brand: 'Sélection multi-secteurs',
    description: "Aperçu de créations réalisées pour plusieurs PME : restauration, bijouterie, cosmétique, e-commerce et identité visuelle.",
    images: [multiSecteurs],
  },
  {
    id: 'resultats-campagnes',
    service: 'media-buying',
    brand: 'Résultats de campagnes',
    description: "Exemples de suivi de campagnes publicitaires Facebook Ads gérées pour nos clients : conversations générées, achats sur site et coût par résultat.",
    images: [adsResult1, adsResult2, adsResult3],
  },
]
