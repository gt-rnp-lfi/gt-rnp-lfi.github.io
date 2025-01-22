'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, GraduationCap } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Rodrigo Sanches Miani',
    role: 'Coordenador',
    description: 'Doutor em Engenharia Elétrica e pesquisador em Cibersegurança. Professor na Universidade Federal de Uberlândia.',
    tags: ['Coordenador'],
    imageUrl: 'avatars/avatar-miani.jpg'
  },
  {
    name: 'Dr. Silvio Ereno Quincozes',
    role: 'Pesquisador',
    description: 'Doutor em Ciência da Computação com foco em Cibersegurança. Professor na Universidade Federal do Pampa.',
    tags: ['Professor'],
    imageUrl: 'avatars/avatar-ereno.jpg',
  },
  {
    name: 'Dr. Diego Luis Kreutz',
    role: 'Pesquisador',
    description: 'Pesquisador em Cibersegurança e professor na Universidade Federal do Pampa.',
    tags: ['Professor'],
    imageUrl: 'avatars/avatar-kreutz.webp'
  },
  {
    name: 'Dr. Leandro Bertholdo',
    role: 'Pesquisador',
    description: 'Doutor em redes com foco em segurança. Professor na Universidade Federal do Rio Grande do Sul.',
    tags: ['Professor'],
    imageUrl: 'avatars/avatar-bertholdo.png', 
    linkedin: 'https://www.linkedin.com/in/leandro-bertholdo-3379411/'
  },
  {
    name: 'Dr. Rafael Dias Araújo',
    role: 'Pesquisador',
    description: 'Doutor em Ciência da Computação e pesquisador em Informática na Educação e Interação Humano-Computador. Professor na Universidade Federal de Uberlândia.',
    tags: ['Professor'],
    imageUrl: 'avatars/avatar-araujo.jpg'
  },
  {
    name: 'Felipe Homrich Scherer',
    role: 'Pesquisador',
    description: 'Graduando de Engenharia de Software pela Universidade Federal do Pampa, com foco em pesquisas nas áreas de cibersegurança.',
    tags: ['Bolsista'],
    imageUrl: 'avatars/avatar-felipe-scherer.png',
    linkedin: 'https://www.linkedin.com/in/felipehscherer/',
    lattes: 'http://lattes.cnpq.br/0515811498958707' 
  },
  {
    name: 'Felipe Nestor Dresch',
    role: 'Pesquisador',
    description: 'Graduando em Engenharia de Software pela Universidade Federal do Pampa e Técnico em Informática pelo IFRS.',
    tags: ['Bolsista'],
    imageUrl: 'avatars/avatar-dresch.png',
    linkedin: 'https://www.linkedin.com/in/felipe-dresch-066046237/'
  },
  {
    name: 'Me. Sebastião A. de Jesus F.',
    role: 'Pesquisador',
    description: 'Doutorando em Ciência da Computação e Técnico de Laboratório de Informática na Universidade Federal de Uberlândia.',
    tags: ['Bolsista'],
    imageUrl: 'avatars/avatar-filho.jpg'
  },
  {
    name: 'Alvaro Santana',
    role: 'Pesquisador',
    description: 'Mestrando em Ciência da Computação pela Universidade Federal de Uberlândia e Consultor de Soluções na empresa Accenture.',
    tags: ['Bolsista'],
    imageUrl: 'avatars/avatar-santana.jpg',
    linkedin: 'https://www.linkedin.com/in/alvaro-s-santos/'
  },
  {
    name: 'Carolina Bandel',
    role: 'Pesquisador',
    description: 'Graduanda em Gestão de Tecnologia da Informação pelo Senac SP.',
    tags: ['Bolsista'],
    imageUrl: 'avatars/avatar-bandel.jpeg'
  },
  {
    name: 'João Pedro Ramires Esteves',
    role: 'Pesquisador',
    description: 'Graduando em Ciências da Computação pela Universidade Federal de Uberlândia.',
    tags: ['Bolsista'],
    imageUrl: 'avatars/avatar-esteves.jpg'
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Social Links - Repositioned */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-surface-1 text-brand-primary hover:bg-brand-surface-2 transition-colors"
                    title="LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {member.lattes && (
                  <a
                    href={member.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-surface-1 text-brand-primary hover:bg-brand-surface-2 transition-colors"
                    title="Lattes"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </a>
                )}
              </div>

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
                              : 'bg-emerald-100 text-emerald-700'
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
 