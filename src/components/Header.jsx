export default function Header() {
  const waLink = 'https://wa.me/5567912998724?text=Ol%C3%A1%20Renato!%20Vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho.'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-light/90 backdrop-blur-sm border-b border-primary/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span className="font-serif text-heading text-lg font-medium tracking-wide">
          Renato Gimenez
        </span>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-sans font-medium text-primary border border-primary/60 px-5 py-2 rounded-sm hover:bg-primary hover:text-white transition-all duration-250 tracking-wide"
        >
          Sessão inicial
        </a>
      </div>
    </header>
  )
}
