import { creations } from '../data/creations'
import RevealOnScroll from './RevealOnScroll'
import ArrowCarousel from './ArrowCarousel'

// Real preview of the agency's output, guided by arrows with a gentle
// auto-advance — placed right after the hero to hook visitors immediately.
export default function CreationsShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-950/60 py-16">
      <div className="container-max px-6 md:px-12 lg:px-20">
        <RevealOnScroll className="mb-10 max-w-xl">
          <p className="eyebrow mb-4">Nos créations</p>
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Un aperçu de ce que nous produisons pour nos clients
          </h2>
        </RevealOnScroll>

        <ArrowCarousel
          items={creations}
          ariaLabel="Carrousel de nos créations"
          keyExtractor={(c) => c.alt}
          renderItem={(c) => (
            <div className="w-52 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-soft transition-transform duration-500 hover:-translate-y-1.5 hover:border-gold/40 sm:w-64">
              <img
                src={c.src}
                alt={c.alt}
                className="aspect-[4/4] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        />
      </div>
    </section>
  )
}
