'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Target } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

const features = [
  { icon: Shield, title: 'Aprendizado Gamificado', description: 'Rankings, desafios e pontuações' },
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
        <Icon className={`${isCenter ? 'h-[3.5rem] w-[3.5rem] lg:h-[4rem] lg:w-[4rem]' : 'h-[2.5rem] w-[2.5rem]'} 
          text-brand-primary mb-[0.75rem] flex-shrink-0`} />
        <h3 className={`${isCenter ? 'text-[1.125rem] lg:text-[1.25rem]' : 'text-[0.875rem]'} 
          font-semibold mb-[0.5rem] line-clamp-2 text-center text-text-primary`}>
          {title}
        </h3>
        {isCenter && (
          <p className="text-[1rem] lg:text-[1.125rem] text-text-secondary line-clamp-2">
            {description}
          </p>
        )}
      </div>
    )

    const containerClasses = "flex flex-col items-center justify-center text-center bg-white/90 backdrop-blur-sm p-5 sm:p-6 rounded-full shadow-md border border-brand-surface-1 aspect-square"

    if (isStatic) {
      return (
        <div className={containerClasses}>
          {content}
        </div>
      )
    }

    return (
      <motion.div
        className={containerClasses}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-[31.25rem] sm:min-h-[37.5rem] lg:min-h-[43.75rem] w-full flex flex-col">
      {/* Background Decoration */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] 2xl:w-[1200px] 2xl:h-[1200px]
          top-[-10%] left-[-10%] bg-brand-surface-1 rounded-full opacity-20 blur-3xl"
        />
        <div 
          className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] 2xl:w-[1200px] 2xl:h-[1200px]
          bottom-[-10%] right-[-10%] bg-brand-surface-2 rounded-full opacity-20 blur-3xl"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="w-[95%] lg:w-[90%] mx-auto relative z-10 flex flex-col items-center 
        pt-[4rem] sm:pt-[5rem] lg:pt-[6rem] xl:pt-[7rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-[64rem] 2xl:max-w-[80rem] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-surface-1 rounded-full 
              text-brand-primary font-medium text-[0.875rem] sm:text-[1rem] mb-4 sm:mb-6"
          >
            Programa Hackers do Bem
          </motion.div>
          
          <h1 className="text-gradient-brand text-[2.5rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem]
            font-bold mb-6 sm:mb-8 leading-tight">
            Aprenda Cibersegurança de Forma Inovadora
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] 2xl:text-[1.75rem]
              mb-8 sm:mb-10 max-w-[48rem] 2xl:max-w-[64rem] mx-auto px-4"
          >
            Uma plataforma gamificada que utiliza IA para transformar o aprendizado de resposta a 
            incidentes de segurança em uma experiência envolvente e prática.
          </motion.p>
        </motion.div>
      </div>

      {/* Feature Circles */}
      <div className="w-[95%] lg:w-[90%] 2xl:w-[85%] mx-auto mt-[2rem] sm:mt-[3rem]">
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

        {/* Versão Desktop */}
        <div className="hidden sm:flex justify-center items-center gap-[2rem] lg:gap-[3rem] 2xl:gap-[4rem]">
          {features.map((feature, index) => (
            <motion.div 
              key={`desktop-${index}`}
              className="w-[12rem] sm:w-[14rem] lg:w-[15rem] xl:w-[16rem] 2xl:w-[20rem]"
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