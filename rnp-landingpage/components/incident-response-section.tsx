'use client'

import { motion } from 'framer-motion'
import { Search, ShieldCheck, Siren, Shield } from 'lucide-react'

const responseSteps = [
  {
    icon: Search,
    title: 'Identificação',
    description: 'Reconhecer rapidamente ameaças e anomalias nos sistemas'
  },
  {
    icon: ShieldCheck,
    title: 'Contenção',
    description: 'Impedir o avanço do incidente e isolar sistemas afetados'
  },
  {
    icon: Siren,
    title: 'Mitigação',
    description: 'Implementar ações para reduzir impactos e danos'
  },
  {
    icon: Shield,
    title: 'Prevenção',
    description: 'Estabelecer medidas para evitar incidentes futuros'
  }
]

export default function IncidentResponseSection() {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Lado Esquerdo - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Linha vertical da timeline */}
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-brand-surface-1" />
              
              {/* Steps */}
              <div className="space-y-8">
                {responseSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex flex-row-reverse items-start gap-6"
                  >
                    {/* Ícone */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-2 border-brand-surface-1">
                      <step.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    {/* Conteúdo */}
                    <div className="flex-1 pt-3 text-right">
                      <h3 className="text-xl font-semibold mb-2 text-text-primary">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lado Direito - Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center"
          >
            <div className="flex flex-col items-center gap-4 mb-6">
              <ShieldCheck className="w-12 h-12 text-brand-primary" />
              <h2 className="text-4xl font-bold text-text-primary">
                O que é Resposta a Incidentes?
              </h2>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              A resposta a incidentes é o conjunto de ações tomadas para identificar,
              conter, mitigar e prevenir ameaças à segurança cibernética. Inclui desde
              a análise de dados até a aplicação de soluções eficazes, garantindo que
              sistemas e informações permaneçam protegidos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 