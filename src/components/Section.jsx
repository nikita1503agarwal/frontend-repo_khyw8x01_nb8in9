import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Boxes, Rocket, Sparkles } from 'lucide-react'

export default function Section() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50/40 overflow-hidden">
      <motion.div style={{ rotate }} className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Summary</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              During my time as a Full Stack Engineer, I built features end‑to‑end, debugged complex issues, and mentored junior engineers through deployments. I enjoy leading teams and shipping impactful products.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Code className="text-blue-600" />, title: 'Full Stack', desc: 'React, Vue, Angular, Node, Go, PHP' },
                { icon: <Boxes className="text-blue-600" />, title: 'Cloud‑native', desc: 'Docker, Kubernetes, Microservices' },
                { icon: <Rocket className="text-blue-600" />, title: 'Lead', desc: '4+ years tech leadership' },
                { icon: <Sparkles className="text-blue-600" />, title: 'Scale', desc: 'GraphQL, gRPC, Firebase' },
              ].map((f, idx) => (
                <motion.div key={idx} whileHover={{ y: -4 }} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-blue-50">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{f.title}</div>
                    <div className="text-sm text-gray-600">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-100 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Technical Skills</h3>
              <p className="mt-3 text-gray-700">
                SQL, NoSQL, PHP, Javascript, Golang, ReactJS, VueJS, Angular 5, NextJS, React Native, Flutter, NodeJS (Express), JQuery, Git, CodeIgniter, Laravel, Docker/Kubernetes, GraphQL/Apollo, Firebase, gRPC, Microservices
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[ 'React', 'Vue', 'Angular', 'Node', 'Go', 'PHP', 'GraphQL', 'Docker', 'Kubernetes', 'gRPC', 'Firebase' ].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm border border-blue-100">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
