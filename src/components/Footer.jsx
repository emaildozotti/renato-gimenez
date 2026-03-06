import { useEffect, useState } from 'react'

const WA_LINK = 'https://wa.me/5567912998724?text=Ol%C3%A1%20Renato!%20Vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho.'

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  const [showFloating, setShowFloating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setShowFloating(scrolled > 0.5)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Seção CTA Final */}
      <section className="py-24 md:py-32 bg-bg-warm">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">

          <div data-aos="zoom-in">
            <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium leading-snug mb-4 max-w-xl mx-auto">
              Se você chegou até aqui, provavelmente já sabe que algo precisa ser compreendido.
            </h2>
            <p className="font-sans text-sm font-light text-text-main/70 mb-10">
              Minha agenda é limitada. Se houver disponibilidade, você saberá na conversa inicial.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans text-sm font-medium text-white bg-primary px-10 py-4 rounded-sm hover:bg-primary-dark transition-all duration-200 tracking-wide"
              style={{ boxShadow: '0 8px 24px rgba(43,95,126,0.35)' }}
            >
              Quero entender se esse processo é para mim
            </a>
          </div>

        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-heading py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <p className="font-sans text-xs font-light text-white/40 tracking-wide">
            © 2026 Renato Gimenez — Psicólogo CRP — Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* Botão WhatsApp flutuante mobile */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
        style={{
          opacity: showFloating ? 1 : 0,
          transform: showFloating ? 'translateY(0)' : 'translateY(16px)',
          pointerEvents: showFloating ? 'auto' : 'none',
          boxShadow: '0 8px 24px rgba(26,46,59,0.2)',
        }}
        aria-label="Falar com Renato no WhatsApp"
      >
        <WhatsAppIcon />
        <span className="font-sans text-xs font-medium tracking-wide">Sessão inicial</span>
      </a>
    </>
  )
}
