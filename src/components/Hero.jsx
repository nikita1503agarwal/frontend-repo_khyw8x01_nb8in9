import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {/* Replaced with a 3D human scene that includes built-in idle animation */}
        <Spline scene="https://prod.spline.design/kbIYtWl7zS5uIcfH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Software Engineer • Tech Lead</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black leading-tight text-gray-900">
            Reza Julian
          </h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            7+ years building web and mobile products, 4+ years leading teams. Full‑stack specialist across React, Vue, Angular, Node, Go, PHP, and cloud‑native architectures.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors">Get in touch</a>
            <a href="#about" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50">View profile</a>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            Tangerang, Indonesia • 085718517795 • rhezajulian@gmail.com
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:block" />
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600">
        Scroll
        <div className="mx-auto mt-2 h-8 w-[2px] bg-gradient-to-b from-gray-400 to-transparent rounded-full" />
      </motion.div>
    </section>
  )
}
