const pilares = [
  { titulo: 'Escuta Profunda', texto: 'Renato entra na realidade do paciente antes de qualquer interpretação. Sua história é ouvida com atenção e respeito — no seu ritmo, na sua linguagem, com a singularidade que cada trajetória merece.', destaque: true },
  { titulo: 'Reflexão Orientada', texto: 'Perguntas que ampliam a percepção — não sobre o que você deve fazer, mas sobre o que criou o que você está vivendo. A reflexão aqui não é sozinha: é conduzida, aprofundada e orientada para a raiz.', destaque: false },
  { titulo: 'Ampliação de Consciência', texto: 'O objetivo não é resolver o problema de fora para dentro. É fazer você compreender a origem dele — para que a mudança seja real, construída, e não precária.', destaque: false },
]

export default function Method() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="method" className="py-24 md:py-32 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium mb-3">Uma psicoterapia construída sobre três pilares</h2>
          <p className="font-sans text-sm font-light text-text-main/70">Sem atalhos. Sem promessas rápidas. Com profundidade real.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pilares.map((pilar, i) => (
            <div key={i} className="p-8 rounded-sm relative" style={{ background: 'rgba(245,239,230,0.6)' }} data-aos="fade-up" data-aos-delay={i * 100}>
              {i === 0 && <div className="w-8 h-0.5 bg-primary mb-4" />}
              <h3 className="font-serif text-xl text-heading font-medium mb-3">{pilar.titulo}</h3>
              <p className="font-sans text-sm font-light text-text-main/80 leading-relaxed">{pilar.texto}</p>
            </div>
          ))}
        </div>
        <div className="p-7 rounded-sm mb-14 border" style={{ background: '#FAFAF8', borderColor: 'rgba(43,95,126,0.12)' }} data-aos="fade-up">
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-secondary mb-3">O que este processo não é</p>
          <p className="font-sans text-sm font-light text-text-main/80 leading-relaxed">Renato não promete cura rápida, felicidade imediata, transformação em X sessões ou controle total das emoções. O trabalho é de processo — e processo leva o tempo que cada história precisa.</p>
        </div>
        <div className="text-center" data-aos="fade-up">
          <p className="font-serif text-xl md:text-2xl text-primary italic mb-8">Mas antes de te contar o que faço — deixa eu te contar de onde vim.</p>
          <button onClick={() => scrollTo('about')} className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide">Conhece o Renato</button>
        </div>
      </div>
    </section>
  )
}
