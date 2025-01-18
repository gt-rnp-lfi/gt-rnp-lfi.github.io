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
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-brand-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-text-primary">
            O que é um Incidente?
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Um incidente de segurança ocorre quando há uma ameaça ou violação que compromete
            a confidencialidade, integridade ou disponibilidade de dados. Isso pode incluir
            ataques cibernéticos, exploração de vulnerabilidades, malware e muito mais.
            Reconhecer e responder a esses eventos é crucial para proteger organizações e sistemas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {incidentTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-brand-surface-1 rounded-lg mb-4 mx-auto">
                <type.icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">{type.title}</h3>
              <p className="text-text-secondary">{type.description}</p>
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
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A identificação rápida e precisa de incidentes é o primeiro passo para uma
            resposta efetiva e proteção adequada dos ativos digitais.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 