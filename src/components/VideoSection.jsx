export default function VideoSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="video" className="py-24 md:py-32 bg-bg-warm relative overflow-hidden">
      {/* Blur ornamental */}
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(43,95,126,0.04)' }}
      />

      <div className="max-w-lg mx-auto px-6 md:px-12 text-center relative z-10">
        <div data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl text-heading font-medium mb-3">
            Um espaço para compreender sua história
          </h2>
          <p className="font-sans text-sm font-light text-text-main/70 mb-10">
            Explico como esse processo funciona, em menos de 2 minutos.
          </p>
        </div>

        {/* Container vídeo 9:16 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mb-10"
          style={{
            width: '280px',
            aspectRatio: '9/16',
            transform: 'rotate(-1deg)',
          }}
        >
          <div
            id="video-placeholder"
            className="w-full h-full bg-heading rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group"
            style={{ boxShadow: '0 24px 60px rgba(26,46,59,0.15)' }}
          >
            {/* Play button */}
            <div className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-sans text-white/60 text-xs tracking-wide">Vídeo</span>
          </div>
        </div>

        <div data-aos="fade-up">
          <button
            onClick={() => scrollTo('method')}
            className="font-sans text-sm font-medium text-primary border border-primary/70 px-8 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide"
          >
            Entende o método
          </button>
        </div>
      </div>
    </section>
  )
}
