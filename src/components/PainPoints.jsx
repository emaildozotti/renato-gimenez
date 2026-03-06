const dores = [
  {
    titulo: 'Padrões relacionais',
    descricao: 'Você repete os mesmos tipos de relacionamento e não consegue sair, mesmo querendo.',
  },
  {
    titulo: 'Falta de direção',
    descricao: 'Sente que está perdido, sem clareza de onde está indo ou o que realmente quer.',
  },
  {
    titulo: 'Dependência emocional',
    descricao: 'Suas relações te prendem mais do que te nutrem, e você não sabe como mudar isso.',
  },
  {
    titulo: 'Ciclos que voltam',
    descricao: 'Há algo que parece resolvido mas sempre recomeça. O mesmo peso, em situações diferentes.',
  },
]

export default function PainPoints() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pain-points" className="py-24 md:py-32 bg-bg-light">
      <div className="max-w-3xl mx-auto px-6 md:px-12">

        {/* Pré-validador — isolado, peso visual próprio */}
        <div
          className="mb-16 text-center"
          style={{ padding: '40px 32px', background: 'rgba(43,95,126,0.04)', borderRadius: '4px' }}
          data-aos="fade-up"
        >
          <p className="font-serif text-xl md:text-2xl text-primary italic leading-relaxed">
            O que você vai ler aqui não é diagnóstico. É reconhecimento.
          </p>
        </div>

        {/* Título da seção */}
        <div data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium leading-snug mb-4">
            Você sente que algo se repete, mas não consegue entender de onde vem?
          </h2>
          <p className="font-sans text-base font-light text-text-main/75 mb-12 leading-relaxed">
            Se alguma dessas situações soa familiar, talvez o seu processo comece aqui.
          </p>
        </div>

        {/* 4 Dores */}
        <div className="mb-12">
          {dores.map((dor, i) => (
            <div
              key={i}
              className="py-5 border-b border-primary/10 flex gap-5 items-start"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <div className="flex-shrink-0 mt-2">
                <div className="w-5 h-px bg-primary/40" />
              </div>
              <div>
                <p className="font-sans text-sm font-medium uppercase tracking-[0.08em] text-heading mb-1">
                  {dor.titulo}
                </p>
                <p className="font-sans text-sm font-light text-text-main/80 leading-relaxed">
                  {dor.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque */}
        <div
          className="mb-14 p-5 rounded-sm font-serif text-lg italic text-heading leading-relaxed"
          style={{
            background: 'rgba(43,95,126,0.07)',
            borderLeft: '3px solid #2B5F7E',
          }}
          data-aos="fade-up"
        >
          "Isso não é fraqueza. É a ausência de recursos para compreender o que está na raiz."
        </div>

        {/* Pull Transition */}
        <div className="text-center" data-aos="fade-up">
          <div className="w-10 h-px bg-secondary mx-auto mb-5" />
          <p className="font-serif text-2xl text-primary italic mb-8">
            Deixa eu te mostrar algo.
          </p>
          <button
            onClick={() => scrollTo('video')}
            className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide"
          >
            Ver vídeo
          </button>
        </div>

      </div>
    </section>
  )
}
