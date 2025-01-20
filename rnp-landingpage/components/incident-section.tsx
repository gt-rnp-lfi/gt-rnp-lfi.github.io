'use client'

import { motion } from 'framer-motion'
import { Shield, Bug, Globe, Database, Lock } from 'lucide-react'

const incidentTypes = [
  {
    icon: Bug,
    title: 'Malware',
    description: 'Softwares maliciosos que comprometem sistemas'
  },
  {
    icon: Globe,
    title: 'DDoS',
    description: 'Ataques que sobrecarregam serviços e servidores'
  },
  {
    icon: Database,
    title: 'Vazamento de Dados',
    description: 'Exposição não autorizada de informações sensíveis'
  },
  {
    icon: Lock,
    title: 'Acesso Indevido',
    description: 'Invasões e tentativas de comprometimento de sistemas'
  }
]

export default function IncidentSection() {
  return (
    <section className="relative w-full py-[5rem]">
      {/* Wrapper externo para controlar largura e centralização */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[85%] mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-[3rem] items-center">
            {/* Lado Esquerdo - Texto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center"
            >
              <div className="flex flex-col items-center gap-[1rem] mb-[1.5rem]">
                <Shield className="w-[3rem] h-[3rem] text-brand-primary" />
                <h2 className="text-[2rem] sm:text-[2.5rem] 2xl:text-[3rem] font-bold text-text-primary">
                  O que é um Incidente?
                </h2>
              </div>
              <p className="text-[1.125rem] sm:text-[1.25rem] 2xl:text-[1.375rem] text-text-secondary leading-relaxed mb-[2rem]">
                Um incidente de segurança ocorre quando há uma ameaça ou violação que compromete
                a confidencialidade, integridade ou disponibilidade de dados. Isso pode incluir
                ataques cibernéticos, exploração de vulnerabilidades, malware e muito mais.
              </p>
            </motion.div>

            {/* Lado Direito - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                {/* Linha vertical da timeline */}
                <div className="absolute left-8 top-0 bottom-0 w-[0.125rem] bg-brand-surface-1" />
                
                {/* Types */}
                <div className="space-y-[2rem]">
                  {incidentTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-[1.5rem]"
                    >
                      {/* Ícone */}
                      <div className="relative z-10 flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full shadow-lg border-[0.125rem] border-brand-surface-1">
                        <type.icon className="w-[2rem] h-[2rem] text-brand-primary" />
                      </div>
                      {/* Conteúdo */}
                      <div className="flex-1 pt-[0.75rem]">
                        <h3 className="text-[1.25rem] sm:text-[1.5rem] 2xl:text-[1.75rem] font-semibold mb-[0.5rem] text-text-primary">
                          {type.title}
                        </h3>
                        <p className="text-[1rem] sm:text-[1.125rem] 2xl:text-[1.25rem] text-text-secondary">
                          {type.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 