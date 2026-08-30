import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="bg-white p-3 rounded-2xl mb-6 inline-block">
              <img src="/assets/Logo.avif" alt="Mão Amiga Farroupilha Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-center md:text-left text-sm leading-relaxed">
              O projeto Mão Amiga Farroupilha atua no contraturno escolar garantindo desenvolvimento, segurança e educação para crianças e adolescentes em situação de vulnerabilidade.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <nav className="flex flex-col space-y-3 items-center md:items-start text-gray-400">
              <Link href="/sobre" className="hover:text-white transition-colors">Sobre o Projeto</Link>
              <Link href="/parceiros" className="hover:text-white transition-colors">Empresas Parceiras</Link>
              <Link href="/eventos" className="hover:text-white transition-colors">Nossos Eventos</Link>
              <Link href="/doacoes" className="hover:text-white transition-colors">Faça uma Doação</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-6">Acompanhe nas Redes</h4>
            <p className="text-gray-400 text-sm mb-4 text-center md:text-left max-w-xs">
              Siga nossas redes sociais para acompanhar nosso dia a dia e novidades.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/maoamigafarroupilha/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://www.facebook.com/maoamigafarroupilha/?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p className="mb-2">
            Mão Amiga Farroupilha é uma entidade independente. Não possui vínculo legal ou de repasse com projetos de nomes semelhantes em outras cidades.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mão Amiga Farroupilha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
