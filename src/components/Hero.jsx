export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-hero pt-16 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Copy — 3/5 */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <p className="font-sans text-secondary uppercase tracking-[0.15em] text-xs mb-5">
              Psicologia Clínica
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.15] font-medium mb-6">
              Enquanto a{' '}
              <span className="text-primary">raiz</span>{' '}
              não muda, tudo se{' '}
              <span className="text-primary">repete.</span>
            </h1>

            <p className="font-sans text-base md:text-lg font-light text-text-main/80 max-w-xl mb-10 leading-relaxed">
              Psicoterapia para quem quer compreender o que está na origem, não apenas aliviar o que dói.
            </p>

            <button
              onClick={() => scrollTo('pain-points')}
              className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide"
            >
              Entende como trabalho
            </button>
          </div>

          {/* Foto — 2/5 */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="150">
            <div className="relative">
              {/* Elemento decorativo por trás */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full bg-bg-warm rounded-[16px_4px_16px_4px] -z-10"
                style={{ transform: 'rotate(2deg)' }}
              />
              {/* Foto placeholder */}
              <div
                className="w-72 h-96 md:w-80 md:h-[440px] bg-heading/10 rounded-[16px_4px_16px_4px] flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: '0 32px 80px rgba(26,46,59,0.18)',
                  filter: 'sepia(8%) contrast(1.05)',
                }}
              >
                <img
                  id="foto-renato"
                  src="/foto-renato.jpg"
                  alt="Renato Gimenez — Psicólogo"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.classList.add('foto-placeholder')
                  }}
                />
                {/* Fallback visual quando foto não carrega */}
                <div className="foto-placeholder-content flex flex-col items-center gap-3 text-heading/30">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span className="font-sans text-xs tracking-wide">Foto do Expert</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
