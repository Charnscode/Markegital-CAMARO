import { useCallback, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Generic arrow-guided carousel: snap-scroll track + prev/next buttons,
// with a gentle auto-advance every `interval` ms that resets whenever the
// person interacts manually.
export default function ArrowCarousel({
  items,
  renderItem,
  interval = 8000,
  gap = 20,
  ariaLabel = 'carousel',
  keyExtractor,
}) {
  const trackRef = useRef(null)
  const timerRef = useRef(null)

  const step = useCallback(
    (dir) => {
      const el = trackRef.current
      if (!el) return
      const card = el.querySelector('[data-card]')
      const cardWidth = card ? card.offsetWidth + gap : el.clientWidth
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      const atStart = el.scrollLeft <= 4

      if (dir === 1 && atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else if (dir === -1 && atStart) {
        el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
      }
    },
    [gap],
  )

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => step(1), interval)
  }, [interval, step])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const handleArrow = (dir) => {
    step(dir)
    resetTimer()
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={keyExtractor ? keyExtractor(item, i) : i} data-card className="snap-start shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() => handleArrow(-1)}
          aria-label="Précédent"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold hover:text-gold"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleArrow(1)}
          aria-label="Suivant"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold hover:text-gold"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
