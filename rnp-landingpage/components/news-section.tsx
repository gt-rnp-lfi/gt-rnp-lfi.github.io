'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const newsItems = [
  {
    title: 'Artigo Publicado - SBSeg 2025',
    description: 'Que incidentes vem acontecendo todo mundo sabe, né?! Agora se liga nesse artigo que o GT-LFI publicou no SBSeg 2025 onde abordamos a importância de se ter um plano de contingência.',
    link: 'https://exemplo.com/noticia-1'
  }
]

export default function NewsSection() {
  return (
    <section id="news" className="relative w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Notícias do GT-LFI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja as ultimas noticias referentes ao GT-LFI.
          </p>
        </motion.div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <Link 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors whitespace-nowrap"
                >
                  Ler mais
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
