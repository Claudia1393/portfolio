import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-pulse">Referencias</p>
      <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Cartas de Recomendación</h2>

      <div className="mt-12 space-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-l-4 border-pulse bg-panel rounded-r-lg p-8 hover:shadow-md transition-shadow"
          >
            {/* Contenido de la carta */}
            <div className="mb-6 space-y-3 leading-relaxed text-inkSoft">
              {testimonial.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-sm">{paragraph}</p>
              ))}
            </div>

            {/* Datos del autor */}
            <div className="space-y-1">
              <p className="font-display text-lg text-ink">{testimonial.author}</p>
              <p className="font-mono text-xs text-inkSoft">{testimonial.role}</p>
              <p className="text-sm text-inkSoft">{testimonial.company}</p>
              <p className="font-mono text-xs text-inkSoft pt-2">{testimonial.date}</p>
            </div>

            {/* Email */}
            {testimonial.email && (
              <a
                href={`mailto:${testimonial.email}`}
                className="inline-block font-mono text-xs text-pulse hover:text-pulse/80 transition-colors mt-4"
              >
                {testimonial.email}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
