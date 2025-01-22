'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const newsItems = [
  {
    title: 'Novidades em breve',
    description: 'Que incidentes vem acontecendo todo mundo sabe, né?! Agora fica ligado que em breve teremos novidades aqui que podem te ajudar nesse assunto.',
    link: 'https://novidadesembreve.com '
  }
]

export default function NewsSection() {
  return (
    <section id="news" className="relative w-full py-[5rem]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-[3rem]"
        >
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-[1rem] text-text-primary">
            Notícias do GT-LFI
          </h2>
          <p className="text-[1.25rem] text-text-secondary max-w-[48rem] mx-auto">
            Veja as ultimas noticias referentes ao GT-LFI.
          </p>
        </motion.div>

        <div className="space-y-[1.5rem]">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-[1.5rem] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-[1rem]">
                <div className="flex-1">
                  <h3 className="text-[1.25rem] font-semibold mb-[0.5rem] text-text-primary">{item.title}</h3>
                  <p className="text-[1rem] text-text-secondary">{item.description}</p>
                </div>
                <Link 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[0.5rem] text-brand-primary hover:text-brand-primary/90 transition-colors whitespace-nowrap"
                >
                  Ler mais
                  <ExternalLink className="w-[1rem] h-[1rem]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
