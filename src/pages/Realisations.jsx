import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import PageHeader from '../components/PageHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import { services } from '../data/services'
import { realisations } from '../data/realisations'

const tabs = [{ slug: 'all', title: 'Tous' }, ...services.map((s) => ({ slug: s.slug, title: s.title }))]

export default function Realisations() {
  const [activeTab, setActiveTab] = useState('all')
  const [active, setActive] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  const filtered = useMemo(
    () => (activeTab === 'all' ? realisations : realisations.filter((r) => r.service === activeTab)),
    [activeTab],
  )

  const openCase = (item) => {
    setActive(item)
    setActiveImg(0)
  }

  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Nos créations, classées par service"
        description="Chaque réalisation est rattachée au service qui l'a produite. Filtrez pour explorer nos travaux par expertise."
      />

      <section className="section-pad pt-0">
        <div className="container-max">
          {/* FILTER TABS + CATALOG CTA */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2.5">
              {tabs.map((t) => (
                <button
                  key={t.slug}
                  onClick={() => setActiveTab(t.slug)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === t.slug
                      ? 'border-gold bg-gold text-navy-900'
                      : 'border-white/15 text-white/65 hover:border-gold/40 hover:text-white'
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/c/22993379273"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              <SiWhatsapp size={16} /> Voir plus sur le catalogue <FiArrowUpRight size={14} />
            </a>
          </div>

          {filtered.length === 0 ? (
            <RevealOnScroll>
              <div className="glass-card flex flex-col items-center gap-4 px-8 py-20 text-center">
                <FiImage className="text-gold" size={36} />
                <h3 className="font-display text-2xl">De nouvelles réalisations arrivent bientôt</h3>
                <p className="max-w-md text-white/60">
                  Nous n'avons pas encore de réalisation publiée pour ce service. Contactez-nous pour
                  être notre prochain cas d'usage.
                </p>
                <Link to="/contact" className="btn-gold mt-2">
                  Démarrer un projet <FiArrowUpRight />
                </Link>
              </div>
            </RevealOnScroll>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <RevealOnScroll key={item.id} delay={(i % 3) * 0.1} type="zoom">
                  <button onClick={() => openCase(item)} className="group block w-full text-left">
                    <div className="glass-card glass-card-hover overflow-hidden">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.brand}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {item.images.length > 1 && (
                          <span className="absolute right-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
                            +{item.images.length - 1}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <h3 className="font-display text-xl">{item.brand}</h3>
                          <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-gold">
                            Voir la fiche <FiArrowUpRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CASE MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/85 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative grid w-full max-w-3xl grid-cols-1 overflow-hidden md:grid-cols-2"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Fermer"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/70 text-white/70 hover:text-gold"
              >
                <FiX size={18} />
              </button>

              <div className="relative aspect-square bg-navy-950/40 md:aspect-auto">
                <img
                  src={active.images[activeImg]}
                  alt={active.brand}
                  className="h-full w-full object-cover"
                />
                {active.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImg((i) => (i - 1 + active.images.length) % active.images.length)
                      }
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/70 text-white hover:text-gold"
                      aria-label="Image précédente"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      onClick={() => setActiveImg((i) => (i + 1) % active.images.length)}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/70 text-white hover:text-gold"
                      aria-label="Image suivante"
                    >
                      <FiChevronRight />
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {active.images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-1.5 w-1.5 rounded-full ${
                            idx === activeImg ? 'bg-gold' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col p-8">
                <span className="eyebrow">
                  {services.find((s) => s.slug === active.service)?.title}
                </span>
                <h3 className="mt-2 font-display text-2xl">{active.brand}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-white/65">{active.description}</p>
                <Link to="/contact" className="btn-gold mt-6" onClick={() => setActive(null)}>
                  Démarrer un projet similaire <FiArrowUpRight />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <RevealOnScroll type="zoom">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-radial px-8 py-14 text-center shadow-soft md:px-20">
              <p className="eyebrow mb-4">Votre marque, notre prochaine réalisation</p>
              <h2 className="mx-auto max-w-xl font-display text-2xl font-medium md:text-3xl">
                Racontons ensemble l'histoire visuelle de votre entreprise.
              </h2>
              <Link to="/contact" className="btn-gold mt-7">
                Discutons de votre projet <FiArrowUpRight />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
