import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCompass, FiEye, FiHeart } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import heroImg from '../assets/hero-team.jpg'

const values = [
  {
    icon: FiCompass,
    title: 'Mission',
    text:
      "Fournir des solutions de marketing digital innovantes et efficaces pour aider les entreprises à atteindre leurs objectifs et développer leur présence en ligne.",
  },
  {
    icon: FiEye,
    title: 'Vision',
    text:
      "Devenir un partenaire de confiance pour nos clients, en leur fournissant des solutions créatives pour atteindre leur public cible et augmenter leur visibilité.",
  },
  {
    icon: FiHeart,
    title: 'Valeurs',
    text:
      "Innovation, créativité et exigence : nous restons à la pointe des tendances pour offrir des services personnalisés et adaptés à chaque client.",
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="À propos de Markegital CAMARO"
        title="Une agence pensée pour la réalité du marché local"
        description="Dans un contexte où la concurrence est rude et le numérique en pleine explosion, nous aidons les PME à allier stratégies digitales avancées et actions terrain ciblées."
      />

      <section className="section-pad pt-0">
        <div className="container-max grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <RevealOnScroll type="left">
            <img
              src={heroImg}
              alt="Équipe Markegital CAMARO"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
          </RevealOnScroll>
          <RevealOnScroll type="right">
            <p className="eyebrow mb-4">Qui sommes-nous</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Un accompagnement pragmatique, adapté à votre réalité
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Pour capter et fidéliser efficacement vos clients, il faut allier stratégies
              digitales avancées et actions terrain ciblées. Notre agence conçoit une offre
              stratégique complète — digitale et street marketing — spécialement pensée pour les
              PME ambitieuses qui veulent accroître leur chiffre d'affaires, renforcer leur
              notoriété et s'imposer comme des leaders locaux.
            </p>
            <p className="mt-4 leading-relaxed text-white/65">
              Avec l'expertise et l'appui de notre équipe, bénéficiez d'un accompagnement adapté
              pour transformer durablement votre présence commerciale.
            </p>
            <Link to="/contact" className="btn-gold mt-8">
              Prenons rendez-vous <FiArrowUpRight />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad bg-navy-950/40 pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.12} type="zoom">
                <div className="glass-card glass-card-hover h-full p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/60">{v.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <RevealOnScroll type="zoom">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-radial px-8 py-16 text-center shadow-soft md:px-20">
              <p className="eyebrow mb-5">Franchissez le cap</p>
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium md:text-4xl">
                Êtes-vous prêts à franchir le cap vers la croissance ?
              </h2>
              <Link to="/contact" className="btn-gold mt-8">
                Nous contacter <FiArrowUpRight />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
