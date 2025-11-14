import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-lg">
          <span className="text-gray-900">REZA</span>
          <span className="text-blue-600">.J</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="h-5 w-px bg-gray-300" />
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/rezajulian/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-blue-50 text-blue-600">
              <Linkedin size={18} />
            </a>
            <a href="mailto:rhezajulian@gmail.com" aria-label="Email" className="p-2 rounded-full hover:bg-blue-50 text-rose-600">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.linkedin.com/in/rezajulian/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-700">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:rhezajulian@gmail.com" className="inline-flex items-center gap-2 text-rose-600">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
