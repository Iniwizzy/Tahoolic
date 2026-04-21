import { motion } from 'framer-motion'
import logo96 from '../assets/brand/optimized/logo-96.webp'
import logo160 from '../assets/brand/optimized/logo-160.webp'
import poster480 from '../assets/brand/optimized/poster-1-480.webp'
import poster768 from '../assets/brand/optimized/poster-1-768.webp'
import poster1200 from '../assets/brand/optimized/poster-1-1200.webp'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-30 pb-18 sm:px-8 sm:pt-34">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,#ffe7a4_0%,transparent_36%),radial-gradient(circle_at_80%_35%,#ffd168_0%,transparent_32%),linear-gradient(160deg,#fff4d6_0%,#f6c65b_100%)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7a4b00] shadow-sm backdrop-blur">
            Tahu Bakso Premium
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-semibold text-[#3B1F1F] sm:text-5xl">
            Tahu Bakso Topping Kekinian yang Bikin Nagih!
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5B3C2D] sm:text-lg">
            Camilan gurih dengan isian bakso juicy, topping melimpah, dan rasa yang konsisten enak di setiap gigitan.
          </p>
          <motion.a
            href="#order"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-20 mt-8 inline-flex items-center gap-2 rounded-full bg-[#F6C65B] px-8 py-3.5 text-base font-bold text-[#3B1F1F] shadow-[0_12px_30px_rgba(59,31,31,0.25)] ring-2 ring-[#3B1F1F]/20 transition hover:bg-[#E6A93D]"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#3B1F1F]" />
            <span className="text-[#3B1F1F] [text-shadow:0_1px_0_rgba(255,255,255,0.2)]">Pesan Sekarang</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-white/35 blur-2xl" />
          <div className="absolute top-4 left-4 z-10 rounded-full bg-white/85 p-2 shadow-lg backdrop-blur">
            <picture>
              <source srcSet={`${logo96} 96w, ${logo160} 160w`} sizes="44px" type="image/webp" />
              <img src={logo96} alt="Logo Tahoolic" className="h-11 w-11 rounded-full object-cover" />
            </picture>
          </div>
          <picture>
            <source
              srcSet={`${poster480} 480w, ${poster768} 768w, ${poster1200} 1200w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
              type="image/webp"
            />
            <img
              src={poster768}
              alt="Pamflet promo Tahoolic"
              className="relative h-[320px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[420px]"
              loading="eager"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
