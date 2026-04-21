import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { products } from './data/products'
import logo96 from './assets/brand/optimized/logo-96.webp'
import logo160 from './assets/brand/optimized/logo-160.webp'
import menuPamphlet480 from './assets/brand/optimized/poster-2-480.webp'
import menuPamphlet768 from './assets/brand/optimized/poster-2-768.webp'
import menuPamphlet1200 from './assets/brand/optimized/poster-2-1200.webp'

const features = [
  {
    title: 'Bahan Selalu Fresh',
    description: 'Diproses harian untuk menjaga rasa dan tekstur terbaik.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22c5-2 8-6 8-11V5l-8-3-8 3v6c0 5 3 9 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tanpa Pengawet',
    description: 'Komitmen rasa autentik dengan kualitas bahan yang aman.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18" />
        <path d="M7 8h10" />
        <path d="M7 16h10" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Harga Bersahabat',
    description: 'Cocok untuk jajan harian, ramean, atau event kantor.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H7" />
      </svg>
    ),
  },
  {
    title: 'Rasa Bikin Nagih',
    description: 'Perpaduan gurih, juicy, dan topping kekinian yang unik.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M4 9h16" />
        <path d="M5 9v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'Nadia P.',
    text: 'Topping-nya melimpah banget. Tekstur tahu dan baksonya pas, repeat order terus!',
  },
  {
    name: 'Rizky A.',
    text: 'Paket rameannya worth it. Datang hangat dan rasanya konsisten enak.',
  },
  {
    name: 'Citra W.',
    text: 'Cheese Lava favoritku. Cocok buat cemilan sore, bikin mood langsung naik.',
  },
]

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function App() {
  return (
    <div className="min-h-screen bg-[#FFF4D6] text-[#3B1F1F]">
      <Navbar />
      <main>
        <Hero />

        <section id="menu" className="px-5 py-16 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">Menu Favorit Tahoolic</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#6f4a3b] sm:text-base">
              Disusun berdasarkan pamflet resmi Tahoolic: topping pilihan dan varian sauce favorit pelanggan.
            </p>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-5 pb-8 sm:px-8">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-7 rounded-3xl bg-white/80 p-5 shadow-lg ring-1 ring-[#e8c98e] md:grid-cols-2 md:p-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c5b2f]">Referensi Produk</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#3B1F1F] sm:text-3xl">Menu dan topping sesuai pamflet Tahoolic</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6f4a3b] sm:text-base">
                Detail topping, sauce, dan visual produk pada landing page ini mengacu ke desain pamflet brand agar konsisten
                dengan promosi offline.
              </p>
            </motion.div>
            <motion.picture
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <source
                srcSet={`${menuPamphlet480} 480w, ${menuPamphlet768} 768w, ${menuPamphlet1200} 1200w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                type="image/webp"
              />
              <img
                src={menuPamphlet768}
                alt="Pamflet menu Tahoolic"
                className="h-[360px] w-full rounded-2xl border border-[#f0d89d] object-cover shadow-md md:h-[520px]"
                loading="lazy"
                decoding="async"
              />
            </motion.picture>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-[#f2d79a]"
              >
                <div className="inline-flex rounded-xl bg-[#F6C65B] p-3 text-[#3B1F1F] shadow-sm">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6f4a3b]">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="testimoni" className="px-5 py-16 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">Apa Kata Mereka</h2>
            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid gap-5 md:grid-cols-3"
            >
              {testimonials.map((item) => (
                <motion.article
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-[#f2d79a]"
                >
                  <p className="text-sm leading-relaxed text-[#6f4a3b]">"{item.text}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#3B1F1F]">{item.name}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="order" className="px-5 pt-6 pb-16 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-full max-w-6xl flex-col items-center rounded-3xl bg-[#3B1F1F] px-6 py-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">Siap Bikin Harimu Lebih Gurih?</h2>
            <p className="mt-3 max-w-xl text-sm text-[#f7e3d2] sm:text-base">
              Pesan sekarang dan nikmati tahu bakso topping kekinian favoritmu dalam hitungan menit.
            </p>
            <motion.a
              href="https://wa.me/6285119483916"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2 }}
              className="mt-7 inline-flex rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-[#0f2e18] shadow-lg"
            >
              Order via WhatsApp
            </motion.a>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[#e8c98e] px-5 py-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#6f4a3b] sm:flex-row">
          <div className="flex items-center gap-2">
            <picture>
              <source srcSet={`${logo96} 96w, ${logo160} 160w`} sizes="36px" type="image/webp" />
              <img src={logo96} alt="Logo Tahoolic" className="h-9 w-9 rounded-full object-cover" loading="lazy" decoding="async" />
            </picture>
            <p className="font-semibold text-[#3B1F1F]">Tahoolic</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/tahoolic.co" target="_blank" rel="noreferrer" className="hover:text-[#E6A93D]">
              Instagram
            </a>
            <a href="https://wa.me/6285119483916" target="_blank" rel="noreferrer" className="hover:text-[#E6A93D]">
              WhatsApp
            </a>
          </div>
          <p>© {new Date().getFullYear()} Tahoolic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
