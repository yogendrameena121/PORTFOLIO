export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            Built by Yogendra Meena · {currentYear}
          </p>
          <div className="flex gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/yogendra121y' },

              { label: 'LinkedIn', href: 'https://linkedin.com/in/yogendra-meena' },
              { label: 'Email', href: 'mailto:meenayogendra398@gmail.com' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
