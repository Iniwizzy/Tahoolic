import { motion } from 'framer-motion'

function ProductCard({ product }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-[#f2d79a]"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#3B1F1F]">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6f4a3b]">{product.description}</p>
      </div>
    </motion.article>
  )
}

export default ProductCard
