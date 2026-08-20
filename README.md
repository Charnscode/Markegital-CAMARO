# Markegital CAMARO — Site vitrine

Site vitrine multi-pages pour l'agence de marketing digital **Markegital CAMARO**
(Abomey-Calavi, Bénin), construit avec React 19, Vite, Tailwind CSS, Framer Motion,
GSAP et React Router.

## Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

## Structure du projet

```
src/
  assets/          → images (photo d'équipe utilisée en hero / à propos)
  components/      → Navbar, Footer, Loader, CustomCursor, WhatsAppButton,
                     ScrollToTopButton, AnimatedCounter, NetworkBackground,
                     RevealOnScroll, PageHeader
  data/            → contenus (services, tarifs, témoignages, réalisations)
  pages/           → Home, About, Services, Realisations, Tarifs, Contact, NotFound
  App.jsx          → routing + transitions de page
  main.jsx         → point d'entrée
  index.css        → styles globaux Tailwind + utilitaires (glass, boutons, curseur)
```

## Pages

- **Accueil** — hero, statistiques animées, aperçu à propos, aperçu services,
  processus, pourquoi nous choisir, témoignages, CTA
- **À propos** — mission, vision, valeurs
- **Services** — 10 services avec fiches détaillées expansibles
- **Réalisations** — secteurs d'intervention (Restaurants, Salons de beauté, BTP,
  ONG, PME) avec fiche détaillée au clic
- **Tarifs** — 7 formules réelles (100.000 F à 900.000 F), offres spéciales
  graphisme et media buying, conditions de paiement
- **Contact** — coordonnées + formulaire (envoi via WhatsApp ou email, sans backend)

## À savoir

- Les **témoignages** sont des exemples réalistes à remplacer dès que possible par
  de vrais avis clients (voir `src/data/testimonials.js`).
- Les **réalisations** sont présentées par secteur d'activité, sans photos de
  projets fictives, conformément aux éléments réellement fournis par l'agence.
- Les tarifs et offres proviennent directement du document commercial de
  l'agence (`OFFRE_COMMERCIALE`).
- Le mode sombre est appliqué par défaut (pas de bascule clair/sombre, le design
  est pensé nativement en thème sombre premium).
- Le curseur personnalisé et certaines animations sont désactivés automatiquement
  sur mobile/tactile et si `prefers-reduced-motion` est activé.

## Personnalisation rapide

- Couleurs et polices : `tailwind.config.js`
- Réseaux sociaux : `src/components/Footer.jsx` (liens à mettre à jour)
- Numéro WhatsApp : `src/components/WhatsAppButton.jsx` et `src/pages/Contact.jsx`
