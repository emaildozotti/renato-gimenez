export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-warm">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="flex justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -bottom-5 -left-5 w-full h-full bg-bg-light rounded-[16px_4px_16px_4px] -z-10" style={{ transform: 'rotate(3deg)' }} />
              <div className="w-64 h-80 md:w-72 md:h-96 bg-heading/10 rounded-[16px_4px_16px_4px] overflow-hidden flex items-center justify-center" style={{ boxShadow: '0 32px 80px rgba(26,46,59,0.18)', filter: 'sepia(8%) contrast(1.05)' }}>
                <img src="/foto-renato-bio.jpg" alt="Renato Gimenez — Psicólogo" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                <div className="flex flex-col items-center gap-3 text-heading/30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium mb-3">A psicologia como resposta a uma pergunta que ele carregava</h2>
            <p className="font-serif text-lg italic text-primary mb-8">"Por que você não faz psicologia?"</p>
            <div className="space-y-4">
              <p className="font-sans text-sm font-light text-text-main/80 leading-[1.85]">Desde jovem, Renato carregava um movimento interno que não tinha nome ainda. Cresceu lidando com ausências que, em vez de o esvaziar, o levaram a construir um mundo interno intenso — cheio de reflexões sobre a própria existência, sobre as relações e sobre o que torna a vida de uma pessoa difícil de viver.</p>
              <p className="font-sans text-sm font-light text-text-main/80 leading-[1.85]">Esses questionamentos o aproximaram de pessoas mais velhas, líderes e figuras que sabiam fazer perguntas transformadoras. Foi numa dessas conversas que alguém o olhou e disse: <em>"Por que você não faz psicologia?"</em> Naquele momento, o que sempre fez sentido para ele ganhou uma direção.</p>
              <p className="font-sans text-sm font-light text-text-main/80 leading-[1.85]">Hoje, o que sustenta o trabalho de Renato são as histórias que ele escuta e as pequenas mudanças que observa: uma pessoa que age diferente diante da própria vida. Não porque decidiu ser mais forte — mas porque, pela primeira vez, compreendeu de onde seu padrão vinha.</p>
              <p className="font-sans text-sm font-light text-text-main/80 leading-[1.85]">Renato não se posiciona como quem tem respostas prontas. Ele entra na realidade de cada paciente e caminha junto — respeitando o ritmo, a história e a identidade de cada pessoa que escolhe esse processo.</p>
            </div>
            <p className="font-serif text-lg italic text-primary mt-8 text-right">E foi exatamente por isso que estruturei cada etapa com cuidado.</p>
            <div className="mt-8">
              <button onClick={() => scrollTo('how-it-works')} className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide">Entende como funciona</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
