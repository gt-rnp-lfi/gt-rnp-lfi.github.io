'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Dr. Rodrigo Sanches Miani',
    role: 'Coordenador',
    description: 'Professor do Departamento de Computação com experiência em Segurança da Informação.',
    tags: ['Coordenador'],
    imageUrl: 'avatares/placeholder-avatar.png'
  },
  {
    name: 'Dr. Silvio Ereno Quincozes',
    role: 'Pesquisador',
    description: 'Doutor em Ciência da Computação com foco em Cibersegurança. Professor na Universidade Federal do Pampa (UNIPAMPA).',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-ereno.jpg'
  },
  {
    name: 'Dr. Diego Luis Kreutz',
    role: 'Pesquisador',
    description: 'Pesquisador em Cibersegurança e professor na Universidade Federal do Pampa (UNIPAMPA).',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-kreutz.webp'
  },
  {
    name: 'Dr. Leandro Bertholdo',
    role: 'Pesquisador',
    description: 'Doutor em redes com foco em segurança. Professor na Universidade Federal do Rio Grande do Sul (UFRGS).',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-bertholdo.png'
  },
  {
    name: 'Felipe Homrich Scherer',
    role: 'Pesquisador',
    description: 'Estudante de Engenharia de Software pela Universidade Federal do Pampa.',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-felipe-scherer.png'
  },
  {
    name: 'Felipe Nestor Dresch',
    role: 'Pesquisador',
    description: 'Graduando em Engenharia de Software pela Universidade Federal do Pampa e Técnico em Informática pelo IFRS.',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-dresch.png'
  },
  {
    name: 'Sebastião Alves de Jesus Filho',
    role: 'Pesquisador',
    description: 'Doutorando em Ciência da Computação e Técnico de Laboratório de Informática na Universidade Federal de Uberlândia (UFU).',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-filho.jpg'
  },
  {
    name: 'Álvaro Santana',
    role: 'Pesquisador',
    description: 'Mestrando em Ciência da Computação pela UFU e Consultor de Soluções na empresa Accenture.',
    tags: ['bolsista'],
    imageUrl: 'avatares/avatar-santana.jpg'
  },
  {
    name: 'João Pedro Ramires Esteves',
    role: 'Pesquisador',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['bolsista'],
    imageUrl: 'avatares/avatar-esteves.png'
  },
  {
    name: 'Carolina Bandel',
    role: 'Pesquisador',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    tags: ['bolsista'],
    imageUrl: 'avatares/avatar-bandel.png'
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os pesquisadores e desenvolvedores por trás do projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-2 border-purple-100"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <div className="flex gap-2 mb-3">
                  {member.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tag === 'Coordenador'
                          ? 'bg-purple-100 text-purple-700'
                          : tag === 'Professor'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
 