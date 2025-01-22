'use client'

import { motion } from 'framer-motion'
import { Bot, Workflow, Shield, Sparkles, Target, Zap } from 'lucide-react'

const systemModules = [
  {
    icon: Bot,
    secondaryIcon: Sparkles,
    title: 'Módulo de Inteligência',
    description: 'Sistema de IA para análise e resposta automática a incidentes',
    features: ['Análise preditiva', 'Respostas automatizadas', 'Aprendizado contínuo'],
    position: 'left',
    accent: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600'
  },
  {
    icon: Workflow,
    secondaryIcon: Target,
    title: 'Módulo PoP',
    description: 'Procedimentos operacionais padrão e workflows de resposta',
    features: ['Workflows personalizados', 'Documentação integrada', 'Métricas de eficiência'],
    position: 'center',
    accent: 'from-blue-500 to-cyan-600',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600'
  },
  {
    icon: Shield,
    secondaryIcon: Zap,
    title: 'Módulo Hackers do Bem',
    description: 'Treinamento e certificação em segurança cibernética',
    features: ['Simulações realistas', 'Certificações', 'Mentoria especializada'],
    position: 'right',
    accent: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600'
  }
]

export default function PropostaSection() {
  return (
    <section id="proposal" className="relative w-full py-[5rem] overflow-hidden">
      <div className="w-[95%] lg:w-[90%] mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-[6rem]"
        >
          <h2 className="text-[2.5rem] font-bold mb-[1.5rem] text-text-primary">
            Nossa Proposta
          </h2>
          <p className="text-[1.25rem] text-text-secondary leading-relaxed max-w-[48rem] mx-auto">
            Uma plataforma inovadora que combina gamificação, inteligência artificial
            e aprendizado colaborativo para formar a próxima geração de especialistas
            em cibersegurança.
          </p>
        </motion.div>

        {/* Módulos do Sistema */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
          {systemModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className={`
                relative bg-white rounded-[2.5rem] p-[2rem] 2xl:p-[2.5rem]
                transition-all duration-500 h-full flex flex-col
                ${module.position === 'left' ? 'rounded-tr-none' : 
                  module.position === 'right' ? 'rounded-tl-none' : 'rounded-t-none'}
                border border-brand-surface-1
                hover:shadow-2xl hover:-translate-y-1
              `}>
                {/* Ícones Flutuantes */}
                <div className={`
                  absolute -top-[1.5rem] 
                  ${module.position === 'center' ? 
                    'left-[2rem] lg:left-auto lg:right-[2rem]' : 
                    'right-[2rem]'
                  }
                  flex items-center gap-[0.75rem]
                `}>
                  <div className="w-[3rem] h-[3rem] 2xl:w-[3.5rem] 2xl:h-[3.5rem] bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <module.secondaryIcon className="w-[1.5rem] h-[1.5rem] 2xl:w-[1.75rem] 2xl:h-[1.75rem] text-brand-primary" />
                  </div>
                  <div className="w-[3rem] h-[3rem] 2xl:w-[3.5rem] 2xl:h-[3.5rem] bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <module.icon className="w-[1.5rem] h-[1.5rem] 2xl:w-[1.75rem] 2xl:h-[1.75rem] text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="mt-[2rem] relative flex-1 flex flex-col">
                  <div className="flex items-center gap-[1rem] mb-[1rem]">
                    <div className={`p-[0.75rem] 2xl:p-[1rem] rounded-xl ${module.iconBg}`}>
                      <module.icon className={`w-[1.5rem] h-[1.5rem] 2xl:w-[1.75rem] 2xl:h-[1.75rem] ${module.iconColor}`} />
                    </div>
                    <h3 className="text-[1.5rem] 2xl:text-[1.75rem] font-extrabold text-text-primary tracking-tight font-display">
                      {module.title}
                    </h3>
                  </div>
                  
                  <p className="text-[1rem] 2xl:text-[1.25rem] text-text-secondary mb-[2rem]">
                    {module.description}
                  </p>
                  
                  <div className="space-y-[1rem] mt-auto">
                    {module.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-[0.75rem] p-[0.5rem] hover:bg-brand-surface-1/10 rounded-lg transition-colors duration-300"
                      >
                        <div className={`w-[0.375rem] h-[0.375rem] 2xl:w-[0.5rem] 2xl:h-[0.5rem] rounded-full bg-gradient-to-r ${module.accent}`} />
                        <p className="text-[1rem] 2xl:text-[1.25rem] text-text-primary">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 