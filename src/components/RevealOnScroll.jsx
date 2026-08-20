import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -70 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 70 }, visible: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.82 }, visible: { opacity: 1, scale: 1 } },
}

export default function RevealOnScroll({
  children,
  type = 'up',
  delay = 0,
  duration = 0.75,
  className = '',
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[type]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
