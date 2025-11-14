import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-gray-100 p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build something</h2>
              <p className="mt-3 text-gray-700">Open to Tech Lead, Full‑Stack, Front‑End, and Back‑End roles.</p>
              <div className="mt-6 text-gray-700 space-y-2">
                <p>Tangerang, Indonesia</p>
                <p>Phone: 085718517795</p>
                <p>Email: <a className="text-blue-600 hover:underline" href="mailto:rhezajulian@gmail.com">rhezajulian@gmail.com</a></p>
                <p>LinkedIn: <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/rezajulian/" target="_blank" rel="noreferrer">rezajulian</a></p>
              </div>
            </div>

            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 gap-4">
              <input className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              <input className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
              <textarea rows={5} className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" />
              <button type="button" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors">Send message</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
