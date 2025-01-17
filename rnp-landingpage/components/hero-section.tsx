'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Target } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'

const features = [
  { icon: Shield, title: 'Aprendizado Gamificado', description: 'Rankings e desafios práticos' },
  { icon: Target, title: 'IA Avançada', description: 'Análise inteligente de incidentes' },
  { icon: Award, title: 'Casos Reais', description: 'Aprenda com CSIRTs parceiros' },
]

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const FeatureCircle = ({ 
    feature, 
    isCenter, 
    isStatic = false 
  }: { 
    feature: typeof features[0], 
    isCenter: boolean,
    isStatic?: boolean 
  }) => {
    const { icon: Icon, title, description } = feature
    
    const content = (
      <div className="flex flex-col items-center max-h-full">
        <Icon className={`${isCenter ? 'h-12 w-12' : 'h-6 w-6'} text-purple-600 mb-2 flex-shrink-0`} />
        <h3 className={`${isCenter ? 'text-base' : 'text-xs'} font-semibold mb-1 line-clamp-2`}>{title}</h3>
        <p className={`${isCenter ? 'text-sm' : 'text-[10px]'} text-gray-600 line-clamp-2`}>{description}</p>
      </div>
    )

    if (isStatic) {
      return (
        <div className="flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm p-8 rounded-full shadow-md border border-purple-100 aspect-square">
          {content}
        </div>
      )
    }

    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-md border border-purple-100 aspect-square"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-[600px] sm:min-h-[800px] w-full flex flex-col bg-gradient-to-b from-purple-50 to-white overflow-hidden">
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
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center 
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

      {/* Feature Circles - Layout reajustado */}
      <div className="w-full px-4">
        {/* Versão Mobile com Carrossel */}
        <div className="sm:hidden">
          <div className="overflow-visible relative w-full" ref={emblaRef}>
            <div className="flex">
              {features.map((feature, index) => (
                <div 
                  key={`mobile-${index}`}
                  className="flex-[0_0_100%] relative flex justify-center"
                  style={{
                    transform: selectedIndex === index 
                      ? 'translateX(0)' 
                      : selectedIndex === (index + 1) % features.length
                      ? 'translateX(70%)'
                      : 'translateX(-70%)',
                    zIndex: selectedIndex === index ? 20 : 10
                  }}
                >
                  <div 
                    className={`transition-all duration-500 ease-in-out transform
                      ${selectedIndex === index 
                        ? 'w-56' 
                        : 'w-32 opacity-50'}`}
                  >
                    <FeatureCircle 
                      feature={feature} 
                      isCenter={selectedIndex === index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Versão Desktop Estática */}
        <div className="hidden sm:flex justify-center items-center gap-8 md:gap-12 max-w-6x1 mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={`desktop-${index}`}
              className="w-56"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCircle 
                feature={feature} 
                isCenter={true}
                isStatic={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
