'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, TrendingUp, Users } from 'lucide-react'

const contextItems = [
  {
    icon: Shield,
    title: 'Segurança Cibernética em Foco',
    description: 'Com o aumento dos ataques cibernéticos, a demanda por profissionais qualificados nunca foi tão alta.'
  },
  {
    icon: AlertTriangle,
    title: 'Resposta a Incidentes',
    description: 'Aprenda a identificar, analisar e responder eficazmente a uma variedade de ameaças de segurança.'
  },
  {
    icon: TrendingUp,
    title: 'Classificação de Incidentes',
    description: 'Desenvolva habilidades para categorizar e priorizar incidentes, otimizando o processo de resposta.'
  },
  {
    icon: Users,
    title: 'Formação de Profissionais',
    description: 'Contribua para a formação de uma nova geração de especialistas em cibersegurança.'
  }
]

export default function ContextSection() {
  return (
    <section className="relative w-full bg-gradient-page overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* Elementos decorativos similares se necessário */}
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Contexto da Cibersegurança
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Entenda a importância da segurança cibernética e como nossa plataforma se insere neste cenário crítico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contextItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-brand-surface-1 rounded-full mb-4 mx-auto">
                <item.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-primary">{item.title}</h3>
              <p className="text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">
            Nossa plataforma foi desenvolvida para atender às crescentes demandas do campo da cibersegurança, 
            oferecendo uma abordagem inovadora e prática para o aprendizado de resposta a incidentes e 
            classificação de ameaças. Através de casos reais e tecnologias avançadas, preparamos os 
            profissionais do futuro para enfrentar os desafios da segurança digital.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

