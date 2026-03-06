import { useState } from 'react'

const faqs = [
  {
    pergunta: 'Preciso ter um diagnóstico para fazer terapia com o Renato?',
    resposta: 'Não. A maioria das pessoas que busca esse processo não tem diagnóstico, tem dores, conflitos ou repetições que quer compreender. Diagnóstico não é pré-requisito para processo terapêutico.',
  },
  {
    pergunta: 'Quanto tempo leva para ver resultados?',
    resposta: 'Não há prazo fixo, e não prometo um. O processo respeita o tempo de cada história. O que posso dizer é que mudanças reais, as que ficam, são construídas, não aceleradas.',
  },
  {
    pergunta: 'As sessões são presenciais ou online?',
    resposta: 'Online, por vídeo. Em ambiente sigiloso, seguro e com toda a privacidade necessária para o processo.',
  },
  {
    pergunta: 'O processo é sigiloso?',
    resposta: 'Completamente. O que acontece nas sessões é protegido pelo sigilo profissional, respeitando todos os princípios éticos do Conselho Federal de Psicologia.',
  },
  {
    pergunta: 'Já fiz terapia antes e não funcionou. Vale tentar de novo?',
    resposta: 'Vale entender por que não funcionou. Em muitos casos, processos anteriores trataram o sintoma sem chegar à raiz. A sessão inicial existe justamente para você entender se minha abordagem é diferente do que você já experimentou.',
  },
]

function FAQItem({ pergunta, resposta, isOpen, onToggle }) {
  return (
    <div className="border-b border-primary/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base font-medium text-heading pr-8">
          {pergunta}
        </span>
        <span
          className="flex-shrink-0 text-primary font-sans text-xl font-light transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0' }}
      >
        <p className="font-sans text-sm font-light text-text-main/80 leading-[1.75] pb-5">
          {resposta}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-light">
      <div className="max-w-2xl mx-auto px-6 md:px-12">

        {/* Título */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div data-aos="fade-up" data-aos-delay="50">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              pergunta={faq.pergunta}
              resposta={faq.resposta}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
