'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SponsorSection() {
  return (
    <section id="sponsor" className="relative w-full py-8 sm:py-12 md:py-16 lg:py-[5rem] bg-white">
      <div className="w-[95%] lg:w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-[3rem]"
        >
          <h2 className="text-xl sm:text-2xl md:text-[2rem] lg:text-[2.5rem] font-bold mb-4 md:mb-[1rem] text-text-primary">
            Financiadores
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-[2rem] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-6 md:mb-[2rem]">
              <Image
                src="/logo-rnp.png"
                alt="Logo da RNP"
                width={200}
                height={200}
                className="w-full max-w-[200px] h-auto object-contain"
              />
              <Image
                src="/logo-hackers-do-bem.svg"
                alt="Logo Hackers do Bem"
                width={200}
                height={200}
                className="w-full max-w-[200px] h-auto object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-[1.5rem] font-semibold text-text-primary mb-2 md:mb-[0.5rem] text-center">
              Rede Nacional de Ensino e Pesquisa
            </h3>
            <p className="text-sm sm:text-base md:text-[1rem] text-text-secondary text-center max-w-3xl mx-auto">
              Este grupo de trabalho é financiado pela Rede Nacional de Ensino e Pesquisa no âmbito do programa Hackers do Bem, ao qual agradadecemos a confiança e incentivo a nossa proposta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}