import RevealOnScroll from './RevealOnScroll'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-navy-radial pt-40 pb-20 px-6 md:px-12 lg:px-20">
      <div
        className="blob-decor -top-24 right-0 h-72 w-72 bg-gold/10"
        aria-hidden="true"
      />
      <div className="container-max relative">
        <RevealOnScroll>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-white/65 md:text-lg">{description}</p>
          )}
          <div className="divider-gold mt-8" />
        </RevealOnScroll>
      </div>
    </section>
  )
}
