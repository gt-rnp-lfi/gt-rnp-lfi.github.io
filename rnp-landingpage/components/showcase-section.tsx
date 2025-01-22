'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Trophy, Brain, Target, Zap, Shield, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    title: 'Gamificação Envolvente',
    description: 'Participe de desafios, ganhe pontos e suba no ranking enquanto aprende.'
  },
  {
    icon: Brain,
    title: 'Aprendizado Adaptativo',
    description: 'Conteúdo personalizado baseado no seu progresso e áreas de interesse.'
  },
  {
    icon: Target,
    title: 'Casos Reais',
    description: 'Enfrente cenários baseados em incidentes reais reportados aos CSIRTs parceiros.'
  }
]

const practicalFeatures = [
  {
    icon: Zap,
    title: 'Simulações Realistas',
    description: 'Enfrente cenários de incidentes de segurança baseados em casos reais.'
  },
  {
    icon: Shield,
    title: 'Análise de Ameaças',
    description: 'Aprenda a identificar e classificar diferentes tipos de ameaças cibernéticas.'
  },
  {
    icon: Target,
    title: 'Estratégias de Resposta',
    description: 'Desenvolva habilidades para criar estratégias eficazes de resposta a incidentes.'
  },
  {
    icon: Lightbulb,
    title: 'Feedback em Tempo Real',
    description: 'Receba orientações instantâneas sobre suas decisões e ações.'
  }
]

export default function ShowcaseSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-text-primary">
            Aprenda Cibersegurança de Forma Inovadora
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Nossa plataforma combina gamificação, IA e casos reais para oferecer uma experiência de aprendizado única e eficaz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src="/showcase-images/dashboard.png?height=400&width=600"
              alt="Dashboard da plataforma"
              width={600} 
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient-brand">Plataforma Intuitiva</h3>
            <p className="text-sm md:text-base text-text-secondary mb-6">
              Nossa interface amigável torna o aprendizado de cibersegurança acessível e envolvente. 
              Acompanhe seu progresso, participe de desafios e interaja com outros alunos em um ambiente 
              gamificado projetado para maximizar seu aprendizado.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm md:text-base">{feature.title}</h4>
                    <p className="text-text-secondary text-sm md:text-base">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 w-full"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient-brand">Aprendizado Prático</h3>
            <p className="text-sm md:text-base text-text-secondary mb-6">
              Enfrente desafios baseados em incidentes reais, aplicando seus conhecimentos em cenários 
              práticos. Nossa plataforma utiliza IA para simular ameaças e guiar seu aprendizado, 
              preparando você para situações reais de cibersegurança.
            </p>
            <ul className="space-y-4">
              {practicalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm md:text-base">{feature.title}</h4>
                    <p className="text-text-secondary text-sm md:text-base">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 w-full"
          >
            <Image
              src="/showcase-images/attack-simulation.jpg?height=400&width=600"
              alt="Simulação de incidente de segurança"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

