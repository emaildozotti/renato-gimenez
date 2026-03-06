const passos = [
  {
    numero: '01',
    titulo: 'Sessão Inicial',
    texto: 'Uma conversa para entender se esse processo é o que você precisa. Sem compromisso. Escuto sua história e você entende como o trabalho funciona, antes de qualquer decisão.',
  },
  {
    numero: '02',
    titulo: 'Processo Regular',
    texto: 'Sessões individuais semanais onde sua história é escutada, aprofundada e compreendida. O ritmo respeita você, não uma fórmula.',
  },
  {
    numero: '03',
    titulo: 'Mudança Duradoura',
    texto: 'Não de uma vez. Em processo, com os recursos construídos ao longo do caminho, que ficam com você para além das sessões.',
  },
]

export default function HowItWorks() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-bg-light">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Título */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium">
            Três passos para começar
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-14">
          {/* Linha vertical da timeline */}
          <div
            className="absolute left-8 top-10 bottom-10 w-px bg-primary/15 hidden md:block"
            style={{ marginLeft: '-16px' }}
          />

          <div className="space-y-12">
            {passos.map((passo, i) => (
              <div
                key={i}
                className="flex gap-8 items-start"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                {/* Número grande */}
                <div className="flex-shrink-0 relative" style={{ marginLeft: '-16px' }}>
                  <span
                    className="font-serif font-light select-none"
                    style={{
                      fontSize: '72px',
                      lineHeight: '1',
                      color: 'rgba(43,95,126,0.12)',
                    }}
                  >
                    {passo.numero}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="pt-3">
                  <h3 className="font-sans text-base font-medium text-heading mb-2">
                    {passo.titulo}
                  </h3>
                  <p className="font-sans text-sm font-light text-text-main/80 leading-relaxed max-w-lg">
                    {passo.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Box urgência */}
        <div
          className="p-8 rounded-sm mb-12 flex items-start gap-5"
          style={{ background: '#1A2E3B' }}
          data-aos="fade-up"
        >
          {/* Ícone vagas */}
          <div className="flex-shrink-0 flex flex-col gap-1 mt-1">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-6 h-1 rounded-full"
                style={{ background: n < 3 ? '#7B9B8A' : 'rgba(123,155,138,0.25)' }}
              />
            ))}
          </div>
          <p className="font-sans text-sm font-light text-white/80 leading-relaxed">
            Trabalho com{' '}
            <span className="font-medium text-white">número limitado de pacientes</span>
            {', '}por escolha, para manter a profundidade de cada processo.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up">
          <button
            onClick={() => scrollTo('testimonials')}
            className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide"
          >
            Ver depoimentos
          </button>
        </div>

      </div>
    </section>
  )
}
