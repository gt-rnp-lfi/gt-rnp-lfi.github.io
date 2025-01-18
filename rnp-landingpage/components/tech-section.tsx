'use client'

import { motion } from 'framer-motion'
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const technologies = [
  {
    icon: SiTypescript,
    name: 'TypeScript',
    description: 'Linguagem fortemente tipada que adiciona tipos estáticos ao JavaScript.'
  },
  {
    icon: SiReact,
    name: 'React',
    description: 'Biblioteca JavaScript para construção de interfaces de usuário interativas.'
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    description: 'Framework React que oferece renderização híbrida e otimizações de performance.'
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
    description: 'Framework CSS utilitário para design rápido e responsivo.'
  }
]

export default function TechSection() {
  return (
    <section id="tech" className="relative w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Tecnologias Utilizadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma é construída com as mais modernas tecnologias web para garantir performance e experiência do usuário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <tech.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
                  <p className="text-gray-600 mt-1">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
