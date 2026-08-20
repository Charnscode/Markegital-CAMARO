import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiTarget, FiUsers, FiTrendingUp, FiCode, FiStar } from 'react-icons/fi'
import RevealOnScroll from '../components/RevealOnScroll'
import AnimatedCounter from '../components/AnimatedCounter'
import CreationsShowcase from '../components/CreationsShowcase'
import ArrowCarousel from '../components/ArrowCarousel'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import heroImg from '../assets/hero-team.jpg'

const heroCards = [
  { icon: FiTarget, label: 'Stratégie digitale' },
  { icon: FiUsers, label: 'Community Management' },
  { icon: FiTrendingUp, label: 'Publicité Facebook & Google' },
  { icon: FiCode, label: 'Développement Web & Mobile' },
]

const stats = [
  { value: 20, suffix: '+', label: 'Projets réalisés' },
  { value: 20, suffix: '+', label: 'Clients satisfaits' },
  { value: 3, suffix: '+', label: "Années d'expérience" },
  { value: 100, suffix: '%', label: 'Engagement qualité' },
]

const process = [
  { n: '01', title: 'Analyse', text: "Audit de votre présence actuelle et de votre marché." },
  { n: '02', title: 'Stratégie', text: 'Construction du plan digital adapté à vos objectifs.' },
  { n: '03', title: 'Production', text: 'Création des contenus, visuels et supports nécessaires.' },
  { n: '04', title: 'Lancement', text: 'Mise en ligne des campagnes et activation des canaux.' },
  { n: '05', title: 'Optimisation', text: 'Analyse des performances et ajustements continus.' },
]

const whyUs = [
  { title: 'Expertise', text: "Une équipe formée aux dernières pratiques du marketing digital." },
  { title: 'Créativité', text: 'Des contenus visuels et des idées qui sortent du lot.' },
  { title: 'Résultats', text: 'Des actions mesurées et orientées vers votre croissance.' },
  { title: 'Accompagnement', text: 'Un partenaire présent à chaque étape de votre projet.' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden pt-28">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={heroImg} alt="Équipe Markegital CAMARO en réunion stratégique" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 from-0% via-navy-950/45 via-[38%] to-transparent to-[62%]" />
        </motion.div>

        <div className="container-max relative grid grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5"
            >
              Agence de digital marketing — Abomey-Calavi, Bénin
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[3.4rem]"
            >
              Boostez votre <span className="text-gold">visibilité</span> et votre{' '}
              <span className="italic text-gold">croissance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-xl text-white/70 md:text-lg"
            >
              Des stratégies digitales innovantes pour aider les entreprises à attirer plus de
              clients, développer leur notoriété et augmenter leur chiffre d'affaires.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link to="/services" className="btn-gold">
                Découvrir nos services <FiArrowUpRight />
              </Link>
              <Link to="/realisations" className="btn-outline">
                Voir nos réalisations
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2"
            >
              {heroCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="glass-card-hero flex items-center gap-3 px-4 py-3.5"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                >
                  <c.icon className="shrink-0 text-gold" size={18} />
                  <span className="text-xs font-medium text-white/90 sm:text-sm">{c.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-9 w-5 rounded-full border border-white/30 p-1"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-gold" />
          </motion.div>
        </div>
      </section>

      {/* CREATIONS SHOWCASE */}
      <CreationsShowcase />

      {/* STATS */}
      <section className="border-y border-white/10 bg-navy-950/60">
        <div className="container-max grid grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:px-12 lg:px-20">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <p className="font-display text-4xl font-medium text-gold md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-pad">
        <div className="container-max grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <RevealOnScroll type="left">
            <div className="relative">
              <img
                src={heroImg}
                alt="Équipe Markegital CAMARO au travail"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              />
              <div className="absolute -bottom-6 -right-6 hidden glass-card px-6 py-5 sm:block">
                <p className="font-display text-3xl text-gold">3+</p>
                <p className="text-xs text-white/60">années au service des PME</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll type="right">
            <p className="eyebrow mb-4">Qui sommes-nous</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Un partenaire de confiance pour votre présence digitale
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              Notre mission est de fournir des solutions de marketing digital innovantes et
              efficaces pour aider les entreprises à atteindre leurs objectifs et développer leur
              présence en ligne, avec des services personnalisés et adaptés à chaque client.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              Nous sommes passionnés par l'innovation et la créativité, et nous nous efforçons de
              rester à la pointe des dernières tendances pour offrir les meilleures solutions à
              nos clients.
            </p>
            <Link to="/a-propos" className="btn-outline mt-8">
              En savoir plus <FiArrowUpRight />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad bg-navy-950/40">
        <div className="container-max">
          <RevealOnScroll className="mb-14 max-w-xl">
            <p className="eyebrow mb-4">Nos expertises</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Des services pensés pour chaque étape de votre croissance
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <RevealOnScroll key={s.slug} delay={(i % 3) * 0.1} className="h-full">
                <div className="glass-card glass-card-hover group flex h-full flex-col p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-900 icon-pop">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{s.short}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
                  >
                    Découvrir <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-gold">
              Voir tous nos services <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="container-max">
          <RevealOnScroll className="mb-16 max-w-xl">
            <p className="eyebrow mb-4">Notre méthode</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Un processus clair, du diagnostic à l'optimisation
            </h2>
          </RevealOnScroll>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-end">
              {process.map((step, i) => (
                <RevealOnScroll
                  key={step.n}
                  delay={i * 0.12}
                  className="relative"
                  type="up"
                >
                  <div
                    className="glass-card glass-card-hover flex flex-col p-6"
                    style={{ marginBottom: `${(process.length - i) * 8}px` }}
                  >
                    <span className="font-mono text-xs text-gold/70">{step.n}</span>
                    <h3 className="mt-3 font-display text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{step.text}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-navy-950/40">
        <div className="container-max">
          <RevealOnScroll className="mb-14 max-w-xl">
            <p className="eyebrow mb-4">Pourquoi nous choisir</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Une agence engagée dans votre réussite
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 0.1} type="zoom">
                <div className="glass-card glass-card-hover p-7 text-center">
                  <h3 className="font-display text-xl text-gold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{w.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad overflow-hidden">
        <div className="container-max">
          <RevealOnScroll className="mb-14 max-w-xl">
            <p className="eyebrow mb-4">Témoignages</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Ce que nos clients disent de nous
            </h2>
          </RevealOnScroll>

          <ArrowCarousel
            items={testimonials}
            ariaLabel="Carrousel de témoignages"
            keyExtractor={(t) => t.id}
            renderItem={(t) => (
              <div className="glass-card w-[320px] shrink-0 p-7 sm:w-[380px]">
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FiStar key={idx} className={idx < t.rating ? 'fill-gold' : 'opacity-25'} size={14} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/75">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-display text-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-max">
          <RevealOnScroll type="zoom">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-radial px-8 py-16 text-center shadow-soft md:px-20">
              <div className="blob-decor -top-20 left-10 h-64 w-64 bg-gold/10" />
              <div className="blob-decor -bottom-24 right-10 h-64 w-64 bg-gold/10" style={{ animationDelay: '3s' }} />
              <p className="eyebrow mb-5">Passons à l'action</p>
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium md:text-4xl">
                Prêt à développer votre entreprise ?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/65">
                Parlons de vos objectifs et construisons ensemble la stratégie digitale qui vous
                fera avancer.
              </p>
              <Link to="/contact" className="btn-gold mt-8">
                Parlons de votre projet <FiArrowUpRight />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
