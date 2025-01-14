'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Target } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Aprendizado Gamificado', description: 'Rankings e desafios práticos' },
  { icon: Target, title: 'IA Avançada', description: 'Análise inteligente de incidentes' },
  { icon: Award, title: 'Casos Reais', description: 'Aprenda com CSIRTs parceiros' },
]

export default function HeroSection() {
  const FeatureCircle = ({ feature }: { feature: typeof features[0] }) => {
    const { icon: Icon, title, description } = feature
    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-full shadow-md border border-purple-100 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-600 mb-2" />
        <h3 className="text-xs sm:text-sm font-semibold mb-1">{title}</h3>
        <p className="text-[10px] sm:text-xs text-gray-600">{description}</p>
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      {/* Background Decoration - Ajustado para melhor responsividade */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] 
          top-[-10%] left-[-10%] bg-purple-100 rounded-full opacity-20 blur-3xl"
        />
        <div 
          className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] 
          bottom-[-10%] right-[-10%] bg-blue-100 rounded-full opacity-20 blur-3xl"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col items-center 
        pt-20 sm:pt-24 md:pt-32"> {/* Ajustado padding-top para compensar navbar fixa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 rounded-full text-purple-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6"
          >
            Programa Hackers do Bem
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 leading-tight">
            Aprenda Cibersegurança de Forma Inovadora
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-2xl mx-auto px-4"
          >
            Uma plataforma gamificada que utiliza IA para transformar o aprendizado de resposta a incidentes de segurança em uma experiência envolvente e prática.
          </motion.p>
        </motion.div>
      </div>

      {/* Feature Circles - Ajustado para melhor responsividade */}
      <div className="w-full px-4 pb-12 sm:pb-16 md:pb-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCircle key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}
