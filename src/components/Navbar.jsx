import { useState } from 'react'
import { Menu, X, Shield, Globe } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center text-white shadow-sm">
              <Shield size={18} />
            </div>
            <span className="font-semibold text-slate-800 tracking-tight">Qpital.co</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white text-sm px-4 py-2 shadow-sm hover:bg-slate-800 transition-colors">
              <Globe size={16} /> Get Started
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/60 border border-white/40 shadow-sm">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block text-white bg-slate-900 px-4 py-2 rounded-lg text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
