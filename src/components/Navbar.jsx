import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logo96 from '../assets/brand/optimized/logo-96.webp'
import logo160 from '../assets/brand/optimized/logo-160.webp'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Order', href: '#order' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E6A93D]/35 bg-[#FFF4D6]/75 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          <picture>
            <source srcSet={`${logo96} 96w, ${logo160} 160w`} sizes="44px" type="image/webp" />
            <img src={logo96} alt="Logo Tahoolic" className="h-11 w-11 rounded-full object-cover shadow-md" />
          </picture>
          <div>
            <p className="text-xl font-bold tracking-tight text-[#3B1F1F]">Tahoolic</p>
            <p className="-mt-1 text-xs text-[#6f4a3b]">Tahu Bakso Topping</p>
          </div>
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-[#3B1F1F] sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-[#E6A93D]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
