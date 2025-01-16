'use client'

import { Shield } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gray-50">
      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200" />
      </div>

      {/* Conteúdo do Footer com background e sombra sutil */}
      <div className="pt-12 pb-6 bg-gradient-to-b from-gray-50 to-gray-100 shadow-[0_-4px_10px_-3px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
                <span className="font-bold text-xl">CyberLearn</span>
              </Link>
              <p className="text-gray-600 mb-4">
                Uma plataforma gamificada que utiliza IA para transformar o aprendizado 
                de resposta a incidentes de segurança em uma experiência envolvente e prática.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Novidades
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Equipe
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contato</h3>
              <ul className="space-y-2">
                <li> {/* só adicionar mais elementos na lista se precisar de mais contatos */}
                  <a 
                    href="mailto:contato@cyberlearn.com.br" 
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    contato@gt-lfi.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha Divisória com gradiente */}
          <div className="border-t border-purple-100 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2024 GT-LFI - Learning from Incidents. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacidade" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  href="/termos" 
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 