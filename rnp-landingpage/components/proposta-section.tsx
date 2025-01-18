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
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold mb-6 text-text-primary">
            Nossa Proposta
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Uma plataforma inovadora que combina gamificação, inteligência artificial
            e aprendizado colaborativo para formar a próxima geração de especialistas
            em cibersegurança.
          </p>
        </motion.div>

        {/* Módulos do Sistema */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                relative bg-white rounded-[2.5rem] p-8
                transition-all duration-500 h-full flex flex-col
                ${module.position === 'left' ? 'rounded-tr-none' : 
                  module.position === 'right' ? 'rounded-tl-none' : 'rounded-t-none'}
                border border-brand-surface-1
                hover:shadow-2xl hover:-translate-y-1
              `}>
                {/* Ícones Flutuantes com posição corrigida */}
                <div className={`
                  absolute -top-6 
                  ${module.position === 'center' ? 
                    'left-8 lg:left-auto lg:right-8' : 
                    'right-8'
                  }
                  flex items-center gap-3
                `}>
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <module.secondaryIcon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="mt-8 relative flex-1 flex flex-col">
                  {/* Título com ícone permanece igual */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${module.iconBg}`}>
                      <module.icon className={`w-6 h-6 ${module.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-text-primary tracking-tight font-display">
                      {module.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-secondary mb-8">
                    {module.description}
                  </p>
                  
                  {/* Features com bullets coloridos */}
                  <div className="space-y-4 mt-auto">
                    {module.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-2 hover:bg-brand-surface-1/10 rounded-lg transition-colors duration-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.accent}`} />
                        <p className="text-text-primary">{feature}</p>
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