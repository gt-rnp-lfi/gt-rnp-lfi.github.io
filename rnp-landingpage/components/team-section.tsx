'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Dr. Rodrigo Sanches Miani',
    role: 'Coordenador',
    description: 'Doutor em Engenharia Elétrica e pesquisador em Cibersegurança. Professor na Universidade Federal de Uberlândia.',
    tags: ['Coordenador'],
    imageUrl: 'avatares/avatar-miani.jpg'
  },
  {
    name: 'Dr. Silvio Ereno Quincozes',
    role: 'Pesquisador',
    description: 'Doutor em Ciência da Computação com foco em Cibersegurança. Professor na Universidade Federal do Pampa.',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-ereno.jpg'
  },
  {
    name: 'Dr. Diego Luis Kreutz',
    role: 'Pesquisador',
    description: 'Pesquisador em Cibersegurança e professor na Universidade Federal do Pampa.',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-kreutz.webp'
  },
  {
    name: 'Dr. Leandro Bertholdo',
    role: 'Pesquisador',
    description: 'Doutor em redes com foco em segurança. Professor na Universidade Federal do Rio Grande do Sul.',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-bertholdo.png'
  },
  {
    name: 'Dr. Rafael Dias Araújo',
    role: 'Pesquisador',
    description: 'Doutor em Ciência da Computação e pesquisador em Informática na Educação e Interação Humano-Computador. Professor na Universidade Federal de Uberlândia (UFU).',
    tags: ['Professor'],
    imageUrl: 'avatares/avatar-araujo.jpg'
  },
  {
    name: 'Felipe Homrich Scherer',
    role: 'Pesquisador',
    description: 'Graduando de Engenharia de Software pela Universidade Federal do Pampa.',
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
    name: 'Me. Sebastião Alves de Jesus Filho',
    role: 'Pesquisador',
    description: 'Doutorando em Ciência da Computação e Técnico de Laboratório de Informática na Universidade Federal de Uberlândia (UFU).',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-filho.jpg'
  },
  {
    name: 'Alvaro Santana',
    role: 'Pesquisador',
    description: 'Mestrando em Ciência da Computação pela UFU e Consultor de Soluções na empresa Accenture.',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-santana.jpg'
  },
  {
    name: 'Carolina Bandel',
    role: 'Pesquisador',
    description: 'Graduanda em Gestão de Tecnologia da Informação pelo Senac SP.',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-bandel.jpeg'
  },
  {
    name: 'João Pedro Ramires Esteves',
    role: 'Pesquisador',
    description: 'Graduando em Ciências da Computação pela Universidade Federal de Uberlândia (UFU).',
    tags: ['Bolsista'],
    imageUrl: 'avatares/avatar-esteves.jpg'
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-[5rem]">
      <div className="w-[95%] lg:w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-[3rem]"
        >
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-[1rem] text-text-primary">
            Nossa Equipe
          </h2>
          <p className="text-[1.25rem] text-text-secondary max-w-[48rem] mx-auto">
            Conheça os pesquisadores e desenvolvedores por trás do projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="md:p-[1rem] p-[0.75rem]">
                <div className="flex md:flex-col items-center md:text-center">
                  <div className="relative w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] md:mb-[0.75rem] flex-shrink-0">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-[0.125rem] border-brand-surface-1"
                    />
                  </div>
                  <div className="ml-[1rem] md:ml-0 flex-grow">
                    <h3 className="text-[1.125rem] md:text-[1.25rem] font-semibold text-text-primary mb-[0.25rem]">
                      {member.name}
                    </h3>
                    <div className="flex gap-[0.5rem] mb-[0.75rem] flex-wrap md:justify-center">
                      {member.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-[0.5rem] py-[0.25rem] rounded-full text-[0.75rem] font-medium ${
                            tag === 'Coordenador'
                              ? 'bg-purple-100 text-purple-700'
                              : tag === 'Professor'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-emerald-100 text-emerald-700' // alternativa: 'bg-cyan-100 text-cyan-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[0.875rem] md:text-[1rem] text-text-secondary md:block hidden">
                      {member.description}
                    </p>
                  </div>
                </div>
                <p className="text-[0.875rem] md:text-[1rem] text-text-secondary md:hidden mt-[0.5rem] border-t pt-[0.5rem]">
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
 