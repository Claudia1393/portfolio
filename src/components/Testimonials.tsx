import { useState } from 'react'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    testimonials.map(() => false),
  )

  const toggleOpen = (index: number) => {
    setOpenIndexes((current) =>
      current.map((open, idx) => (idx === index ? !open : open)),
    )
  }

  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Referencias</p>
      <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Cartas de Recomendación</h2>

      <div className="mt-12 space-y-6">
        {testimonials.map((testimonial, index) => {
          const fullText = testimonial.content.replace(/\n\n/g, ' ').trim()
          const preview =
            fullText.length > 140 ? `${fullText.slice(0, 140).trim()}…` : fullText
          const isOpen = openIndexes[index]

          return (
            <article
              key={index}
              className="border-l-4 border-pulse bg-panel rounded-r-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {!isOpen && (
                    <>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-pulse">
                        Referencia breve
                      </p>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-inkSoft">
                        {preview}
                      </p>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => toggleOpen(index)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-pulse hover:text-pulse"
                  aria-expanded={isOpen}
                >
                  <svg
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <>
                  <div className="mt-5 space-y-3 leading-relaxed text-inkSoft">
                    {testimonial.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 space-y-1 border-t border-line pt-5 text-inkSoft">
                    <p className="font-display text-lg text-ink">{testimonial.author}</p>
                    <p className="font-mono text-xs text-inkSoft">{testimonial.role}</p>
                    <p className="font-mono text-xs text-inkSoft">{testimonial.date}</p>
                  </div>
                </>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
