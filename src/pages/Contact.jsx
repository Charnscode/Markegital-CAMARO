import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import PageHeader from '../components/PageHeader'
import RevealOnScroll from '../components/RevealOnScroll'

const infoCards = [
  { icon: FiPhone, label: 'Téléphone', value: '+229 93 37 92 73', href: 'tel:+22993379273' },
  { icon: FiMail, label: 'Email', value: 'markegitalcamaro@gmail.com', href: 'mailto:markegitalcamaro@gmail.com' },
  { icon: FiMapPin, label: 'Adresse', value: 'Abomey-Calavi, Bénin', href: null },
]

const services = [
  'Graphisme Design',
  'Montage Vidéo',
  'Community Management',
  'Social Selling',
  'Closing',
  'Développement Web',
  'Applications Mobiles',
  'Media Buying',
  'Copywriting',
  'Funnels de Vente',
  'Autre / je ne sais pas encore',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', service: services[0], message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const buildMessage = () =>
    `Bonjour Markegital CAMARO,%0A%0AJe m'appelle ${form.name || '—'}` +
    `${form.company ? ` (${form.company})` : ''}.%0A` +
    `Je suis intéressé(e) par : ${form.service}.%0A%0A${form.message || ''}`

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const whatsappHref = `https://wa.me/22993379273?text=${buildMessage()}`
  const mailHref = `mailto:markegitalcamaro@gmail.com?subject=${encodeURIComponent(
    'Demande de devis — ' + form.service,
  )}&body=${buildMessage()}`

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez-nous votre besoin, nous revenons vers vous rapidement avec une proposition adaptée à votre budget."
      />

      <section className="section-pad pt-0">
        <div className="container-max grid grid-cols-1 gap-12 lg:grid-cols-5">
          <RevealOnScroll type="left" className="lg:col-span-2">
            <div className="glass-card h-full p-8 md:p-10">
              <h3 className="font-display text-2xl">Nos coordonnées</h3>
              <div className="mt-7 space-y-5">
                {infoCards.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                      <c.icon size={19} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white/85 hover:text-gold">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-white/85">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/22993379273"
                target="_blank"
                rel="noreferrer"
                className="mt-9 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <SiWhatsapp size={18} /> Discuter sur WhatsApp
              </a>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-widest text-white/40">Disponibilité</p>
                <p className="mt-2 text-sm text-white/70">
                  Du lundi au samedi — réponse sous 24h ouvrées.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll type="right" className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <FiCheckCircle className="mb-5 text-gold" size={48} />
                  <h3 className="font-display text-2xl">Message prêt à être envoyé</h3>
                  <p className="mt-3 max-w-sm text-white/60">
                    Choisissez votre canal préféré ci-dessous pour nous transmettre votre demande.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-4">
                    <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-gold">
                      <SiWhatsapp /> Envoyer sur WhatsApp
                    </a>
                    <a href={mailHref} className="btn-outline">
                      <FiMail /> Envoyer par email
                    </a>
                  </div>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-white/50 underline hover:text-gold"
                  >
                    Modifier le message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                        Nom complet
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                        Entreprise (optionnel)
                      </label>
                      <input
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Nom de votre entreprise"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                      Service qui vous intéresse
                    </label>
                    <select
                      value={form.service}
                      onChange={update('service')}
                      className="w-full rounded-xl border border-white/15 bg-navy-900 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                      Votre message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Décrivez votre projet, votre budget approximatif, vos délais..."
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    Préparer ma demande <FiArrowUpRight />
                  </button>
                  <p className="text-xs text-white/40">
                    En soumettant ce formulaire, vous choisirez ensuite d'envoyer votre message par
                    WhatsApp ou par email — aucune donnée n'est stockée sur ce site.
                  </p>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
