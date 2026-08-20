import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiChevronDown, FiCheck } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import { services } from '../data/services'

export default function Services() {
  const [openSlug, setOpenSlug] = useState(services[0].slug)

  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title="Des expertises complémentaires, réunies sous un même toit"
        description="Du graphisme au développement web, chaque service est pensé pour s'articuler avec les autres et servir un seul objectif : votre croissance."
      />

      <section className="section-pad pt-0">
        <div className="container-max grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((s, i) => {
            const open = openSlug === s.slug
            return (
              <RevealOnScroll key={s.slug} delay={(i % 2) * 0.08} className="h-fit">
                <div
                  className={`glass-card overflow-hidden transition-colors duration-300 ${
                    open ? 'border-gold/40' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenSlug(open ? null : s.slug)}
                    className="flex w-full items-center gap-5 p-7 text-left"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        open ? 'bg-gold text-navy-900' : 'bg-gold/10 text-gold'
                      }`}
                    >
                      <s.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl">{s.title}</h3>
                      <p className="mt-1 text-sm text-white/55">{s.short}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-gold"
                    >
                      <FiChevronDown size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-7 pb-7 pt-5">
                          <p className="leading-relaxed text-white/65">{s.description}</p>
                          <ul className="mt-5 space-y-2.5">
                            {s.points.map((p) => (
                              <li key={p} className="flex items-start gap-2.5 text-sm text-white/70">
                                <FiCheck className="mt-0.5 shrink-0 text-gold" size={15} />
                                {p}
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
                          >
                            Demander ce service <FiArrowUpRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll type="zoom" className="mt-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-radial px-8 py-14 text-center shadow-soft md:px-20">
            <p className="eyebrow mb-4">Un besoin sur mesure ?</p>
            <h2 className="mx-auto max-w-xl font-display text-2xl font-medium md:text-3xl">
              Chaque entreprise est différente — construisons votre offre ensemble.
            </h2>
            <Link to="/contact" className="btn-gold mt-7">
              Demander un devis <FiArrowUpRight />
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
