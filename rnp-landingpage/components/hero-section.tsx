'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, PanInfo } from 'framer-motion'
import { Shield, Award, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  { icon: Shield, title: 'Aprendizado Gamificado', description: 'Rankings e desafios práticos' },
  { icon: Target, title: 'IA Avançada', description: 'Análise inteligente de incidentes' },
  { icon: Award, title: 'Casos Reais', description: 'Aprenda com CSIRTs parceiros' },
]

export default function HeroSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const constraintsRef = useRef(null)
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold && currentFeature > 0) {
      setCurrentFeature(currentFeature - 1)
    } else if (info.offset.x < -threshold && currentFeature < features.length - 1) {
      setCurrentFeature(currentFeature + 1)
    }
    controls.start({ x: 0 })
  }

  const FeatureCircle = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const { icon: Icon, title, description } = feature
    return (
      <motion.div
        className={`absolute ${
          isMobile
            ? index === currentFeature
              ? 'left-1/2 -translate-x-1/2 bottom-20'
              : index === currentFeature - 1
              ? '-left-20 bottom-20'
              : index === currentFeature + 1
              ? 'left-full -translate-x-20 bottom-20'
              : 'hidden'
            : index === 0
            ? 'left-1/4 -translate-x-1/2 bottom-32'
            : index === 1
            ? 'left-1/2 -translate-x-1/2 bottom-16'
            : 'right-1/4 translate-x-1/2 bottom-32'
        } transition-all duration-300`}
        animate={isMobile ? { scale: index === currentFeature ? 1 : 0.8, opacity: index === currentFeature ? 1 : 0.6 } : {}}
      >
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg border border-purple-100 w-48 h-48 flex flex-col items-center justify-center text-center">
          <Icon className="h-10 w-10 text-purple-600 mb-2" />
          <h3 className="text-sm font-semibold mb-1">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white pt-16 overflow-hidden">
      {/* Floating Feature Circles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div ref={constraintsRef} className="relative w-full h-full">
          {features.map((feature, index) => (
            <FeatureCircle key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-medium text-sm mb-6"
          >
            Programa Hackers do Bem
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 leading-tight">
            Aprenda Cibersegurança de Forma Inovadora
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          >
            Uma plataforma gamificada que utiliza IA para transformar o aprendizado de resposta a incidentes de segurança em uma experiência envolvente e prática.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full"
            >
              Começar Agora
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg rounded-full border-2"
            >
              Saiba Mais
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Carousel Drag Area */}
      {isMobile && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-80 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraintsRef}
          onDragEnd={handleDragEnd}
          animate={controls}
        />
      )}

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse" />
      </div>
    </div>
  )
}

