const pilares = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 12h4m4 0h10M7 12a5 5 0 0 1 5-5M7 12a5 5 0 0 0 5 5" />
      </svg>
    ),
    titulo: 'Escuta Profunda',
    texto: 'Entro na realidade de cada paciente antes de qualquer interpretação. Sua história é ouvida com atenção e respeito, no seu ritmo, na sua linguagem, com a singularidade que cada trajetória merece.',
    destaque: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    titulo: 'Reflexão Orientada',
    texto: 'Perguntas que ampliam a percepção, não sobre o que você deve fazer, mas sobre o que criou o que você está vivendo. A reflexão aqui não é sozinha: é conduzida, aprofundada e orientada para a raiz.',
    destaque: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    titulo: 'Ampliação de Consciência',
    texto: 'O objetivo não é resolver o problema de fora para dentro. É fazer você compreender a origem dele, para que a mudança seja real, construída, e não precária.',
    destaque: false,
  },
]

export default function Method() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="method" className="py-24 md:py-32 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Título da seção */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium mb-3">
            Uma psicoterapia construída sobre três pilares
          </h2>
          <p className="font-sans text-sm font-light text-text-main/70">
            Sem atalhos. Sem promessas rápidas. Com profundidade real.
          </p>
        </div>

        {/* 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pilares.map((pilar, i) => (
            <div
              key={i}
              className="p-8 rounded-sm relative"
              style={{ background: 'rgba(245,239,230,0.6)' }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Acento no primeiro pilar */}
              {i === 0 && (
                <div className="w-8 h-0.5 bg-primary mb-4" />
              )}
              <div className="text-primary mb-4">{pilar.icon}</div>
              <h3 className="font-serif text-xl text-heading font-medium mb-3">
                {pilar.titulo}
              </h3>
              <p className="font-sans text-sm font-light text-text-main/80 leading-relaxed">
                {pilar.texto}
              </p>
            </div>
          ))}
        </div>

        {/* O que não promete */}
        <div
          className="p-7 rounded-sm mb-14 border"
          style={{ background: '#FAFAF8', borderColor: 'rgba(43,95,126,0.12)' }}
          data-aos="fade-up"
        >
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-secondary mb-3">
            O que este processo não é
          </p>
          <p className="font-sans text-sm font-light text-text-main/80 leading-relaxed">
            Não prometo cura rápida, felicidade imediata, transformação em X sessões ou controle total das emoções. O trabalho é de processo, e processo leva o tempo que cada história precisa.
          </p>
        </div>

        {/* Pull Transition */}
        <div className="text-center" data-aos="fade-up">
          <p className="font-serif text-xl md:text-2xl text-primary italic mb-8">
            Mas antes de te contar o que faço, deixa eu te contar de onde vim.
          </p>
          <button
            onClick={() => scrollTo('about')}
            className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide"
          >
            Conhece o Renato
          </button>
        </div>

      </div>
    </section>
  )
}
