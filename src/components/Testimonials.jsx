const depoimentos = [
  { texto: 'Fiz terapia por anos e nunca entendia realmente o que estava na origem dos meus ciclos relacionais. Com o Renato, pela primeira vez, as coisas começaram a fazer sentido de uma forma diferente — não só intelectualmente.', autor: 'L.F.' },
  { texto: 'O que mais me surpreendeu foi a ausência de pressa. Não tem protocolo, não tem fórmula. Tem escuta real. Esse ritmo foi o que me permitiu chegar onde nunca tinha chegado em outros processos.', autor: 'M.C.', elevado: true },
  { texto: 'Comecei a sessão inicial sem ter certeza se ia funcionar — já tinha desistido de terapia antes. O Renato me fez entender, naquela primeira conversa, que havia uma diferença no que ele propunha. Faz meses que estou no processo e algo genuinamente mudou.', autor: 'R.A.' },
]

export default function Testimonials() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-bg-warm">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium">O que muda quando a raiz é trabalhada</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end mb-12">
          {depoimentos.map((dep, i) => (
            <div key={i} className="relative p-7 rounded-xl bg-bg-light border border-primary/10" style={{ boxShadow: '0 4px 20px rgba(26,46,59,0.06)', transform: dep.elevado ? 'translateY(-12px)' : 'none' }} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="absolute top-3 left-5 font-serif font-semibold select-none pointer-events-none" style={{ fontSize: '72px', lineHeight: '1', color: 'rgba(43,95,126,0.1)' }} aria-hidden="true">&ldquo;</span>
              <p className="font-serif text-base italic text-text-main/85 leading-[1.75] mb-6 relative z-10 pt-6">{dep.texto}</p>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-secondary">— {dep.autor}</p>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up">
          <button onClick={() => scrollTo('faq')} className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide">Perguntas frequentes</button>
        </div>
      </div>
    </section>
  )
}
