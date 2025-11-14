import { motion } from 'framer-motion'

const skills = [
  'React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Express', 'Golang', 'PHP', 'Laravel', 'CodeIgniter', 'GraphQL', 'Apollo', 'Firebase', 'gRPC', 'Microservices', 'SQL', 'NoSQL', 'Docker', 'Kubernetes', 'Git'
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Highlighted Skills</h2>
        <p className="mt-3 text-gray-600">A snapshot of tools and technologies I use to build production systems.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} whileHover={{ scale: 1.02 }} className="p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-sm">
              <div className="font-semibold text-gray-800">{s}</div>
              <div className="mt-2 h-2 w-full rounded bg-gray-200 overflow-hidden">
                <motion.div className="h-2 bg-blue-600" initial={{ width: 0 }} whileInView={{ width: `${80 + (i % 5) * 4}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
