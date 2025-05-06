'use client'

import { motion } from 'framer-motion'
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase } from 'react-icons/si'
import { TbBrandGoogleFilled, TbDatabase } from 'react-icons/tb'
import { VscSymbolNamespace } from 'react-icons/vsc'

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
  },
  {
    icon: SiExpress,
    name: 'Express.js',
    description: 'Framework web rápido e minimalista para Node.js.'
  },
  {
    icon: TbBrandGoogleFilled,
    name: 'Google Gemini',
    description: 'Modelo de IA avançado do Google para processamento de linguagem natural.'
  },
  {
    icon: VscSymbolNamespace,
    name: 'Vercel AI SDK',
    description: 'SDK para integração simplificada de modelos de IA em aplicações web.'
  },
  {
    icon: TbDatabase,
    name: 'Pinecone',
    description: 'Banco de dados vetorial para busca semântica e similaridade.'
  },
  {
    icon: SiFirebase,
    name: 'Firebase',
    description: 'Plataforma de desenvolvimento que oferece diversos serviços backend como serviço.'
  }
]

export default function TechSection() {
  return (
    <section id="tech" className="relative w-full py-[5rem]">
      <div className="w-[95%] lg:w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-[3rem]"
        >
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-[1rem] text-text-primary">
            Tecnologias Utilizadas
          </h2>
          <p className="text-[1.25rem] text-text-secondary max-w-[48rem] mx-auto">
            Nossa plataforma é construída com as mais modernas tecnologias web para garantir performance e experiência do usuário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[1.5rem]">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-[1.5rem] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-[1rem]">
                <div className="bg-brand-surface-1 p-[0.75rem] rounded-lg">
                  <tech.icon className="w-[2rem] h-[2rem] text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-semibold text-text-primary">{tech.name}</h3>
                  <p className="text-[1rem] text-text-secondary mt-[0.25rem]">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
