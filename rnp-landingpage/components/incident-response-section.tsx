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
    <section className="relative w-full py-[5rem]">
      {/* Wrapper externo para controlar largura e centralização */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[85%] mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-[3rem] items-center">
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
                <div className="absolute right-[2rem] top-0 bottom-0 w-[0.125rem] bg-brand-surface-1" />
                
                {/* Steps */}
                <div className="space-y-[2rem]">
                  {responseSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex flex-row-reverse items-start gap-[1.5rem]"
                    >
                      {/* Ícone */}
                      <div className="relative z-10 flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full shadow-lg border-[0.125rem] border-brand-surface-1">
                        <step.icon className="w-[2rem] h-[2rem] text-brand-primary" />
                      </div>
                      {/* Conteúdo */}
                      <div className="flex-1 pt-[0.75rem] text-right">
                        <h3 className="text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem] font-semibold mb-[0.5rem] text-text-primary">
                          {step.title}
                        </h3>
                        <p className="text-[1rem] sm:text-[1.125rem] 2xl:text-[1.25rem] text-text-secondary">
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
              <div className="flex flex-col items-center gap-[1rem] mb-[1.5rem]">
                <ShieldCheck className="w-[3rem] h-[3rem] text-brand-primary" />
                <h2 className="text-[2rem] sm:text-[2.5rem] 2xl:text-[3rem] font-bold text-text-primary">
                  O que é Resposta a Incidentes?
                </h2>
              </div>
              <p className="text-[1.125rem] sm:text-[1.25rem] 2xl:text-[1.375rem] text-text-secondary leading-relaxed">
                A resposta a incidentes é o conjunto de ações tomadas para identificar,
                conter, mitigar e prevenir ameaças à segurança cibernética. Inclui desde
                a análise de dados até a aplicação de soluções eficazes, garantindo que
                sistemas e informações permaneçam protegidos.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 