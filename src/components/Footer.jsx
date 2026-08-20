import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { SiTiktok, SiWhatsapp } from 'react-icons/si'
import logo from '../assets/logo/logo-full.png'

const quickLinks = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'Community Management',
  'Media Buying',
  'Développement Web',
  'Graphisme Design',
  'Funnels de Vente',
]

const socials = [
  { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: SiTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: SiWhatsapp, href: 'https://wa.me/22993379273', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="container-max px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <span className="flex items-center rounded-2xl bg-white px-3 py-1.5">
                <img src={logo} alt="Markegital CAMARO" className="h-8 w-auto" />
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Agence de marketing digital basée à Abomey-Calavi. Nous aidons les PME à transformer
              durablement leur présence commerciale.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/65 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s} className="text-sm text-white/65">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Coordonnées</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 shrink-0 text-gold" />
                <a href="tel:+22993379273" className="hover:text-gold">+229 93 37 92 73</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0 text-gold" />
                <a href="mailto:markegitalcamaro@gmail.com" className="hover:text-gold break-all">
                  markegitalcamaro@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-gold" />
                <span>Abomey-Calavi, Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Markegital CAMARO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
