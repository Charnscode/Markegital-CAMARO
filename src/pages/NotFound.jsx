import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import RevealOnScroll from '../components/RevealOnScroll'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <RevealOnScroll type="zoom">
        <p className="font-display text-8xl text-gold">404</p>
        <h1 className="mt-4 font-display text-2xl">Cette page n'existe pas</h1>
        <p className="mt-3 max-w-sm text-white/60">
          La page que vous cherchez a peut-être été déplacée ou n'existe plus.
        </p>
        <Link to="/" className="btn-gold mt-8">
          Retour à l'accueil <FiArrowUpRight />
        </Link>
      </RevealOnScroll>
    </section>
  )
}
