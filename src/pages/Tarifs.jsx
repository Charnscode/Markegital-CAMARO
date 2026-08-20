import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCheck, FiPhone } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import { packages, graphismeSpecial, mediaBuyingSpecial, paymentTerms } from '../data/pricing'

export default function Tarifs() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title="Des formules claires, pour chaque étape de croissance"
        description="Sept formules d'accompagnement, ainsi que des offres spéciales graphisme et media buying pensées pour s'adapter à votre budget."
      />

      <section className="section-pad pt-0">
        <div className="container-max grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <RevealOnScroll key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <div
                className={`glass-card glass-card-hover relative flex h-full flex-col p-8 ${
                  p.highlight ? 'border-gold/50' : ''
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-900">
                    Populaire
                  </span>
                )}
                <span className="eyebrow">{p.duration}</span>
                <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                <p className="mt-4">
                  <span className="font-display text-3xl text-gold">{p.price}</span>
                  <span className="text-sm text-white/50"> F CFA / {p.duration}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <FiCheck className="mt-0.5 shrink-0 text-gold" size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline mt-7">
                  Choisir cette offre <FiArrowUpRight />
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="section-pad bg-navy-950/40 pt-0">
        <div className="container-max grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RevealOnScroll type="left">
            <div className="glass-card h-full p-8">
              <span className="eyebrow">Offre spéciale</span>
              <h3 className="mt-2 font-display text-2xl">{graphismeSpecial.title.replace('Offre spéciale — ', '')}</h3>
              <p className="mt-3 text-sm text-white/60">{graphismeSpecial.subtitle}</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {graphismeSpecial.tiers.map((t) => (
                  <div key={t.duration} className="rounded-2xl border border-white/10 p-4 text-center">
                    <p className="font-display text-xl text-gold">{t.price}</p>
                    <p className="mt-1 text-xs text-white/50">F CFA</p>
                    <p className="mt-2 text-xs text-white/60">{t.duration}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs uppercase tracking-widest text-white/40">Funnels de vente</p>
              <ul className="mt-3 space-y-2">
                {graphismeSpecial.funnels.map((f) => (
                  <li key={f.label} className="flex items-center justify-between text-sm text-white/70">
                    <span>{f.label}</span>
                    <span className="font-semibold text-gold">{f.price}{f.price !== '-15%' ? ' F' : ''}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll type="right">
            <div className="glass-card h-full p-8">
              <span className="eyebrow">Offre spéciale</span>
              <h3 className="mt-2 font-display text-2xl">{mediaBuyingSpecial.title.replace('Offre spéciale — ', '')}</h3>
              <div className="mt-6 space-y-5">
                {mediaBuyingSpecial.cases.map((c) => (
                  <div key={c.label} className="rounded-2xl border border-white/10 p-5">
                    <p className="text-sm font-semibold text-white/85">{c.label}</p>
                    <p className="mt-2 text-sm text-gold">{c.detail}</p>
                    {c.example && <p className="mt-2 text-xs text-white/50">{c.example}</p>}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PAYMENT TERMS */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <RevealOnScroll>
            <div className="glass-card p-8 md:p-10">
              <span className="eyebrow">Conditions de paiement</span>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {paymentTerms.map((t) => (
                  <div key={t} className="flex items-start gap-3 text-sm text-white/70">
                    <FiCheck className="mt-0.5 shrink-0 text-gold" size={15} />
                    {t}
                  </div>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-white/50">
                <FiPhone className="text-gold" />
                Les coordonnées de paiement complètes sont communiquées à la signature du contrat.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-max">
          <RevealOnScroll type="zoom">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-radial px-8 py-14 text-center shadow-soft md:px-20">
              <p className="eyebrow mb-4">Une question sur nos formules ?</p>
              <h2 className="mx-auto max-w-xl font-display text-2xl font-medium md:text-3xl">
                Discutons de l'offre la plus adaptée à votre budget.
              </h2>
              <Link to="/contact" className="btn-gold mt-7">
                Parlons-en <FiArrowUpRight />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
