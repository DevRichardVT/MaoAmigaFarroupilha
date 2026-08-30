import React from 'react';
import Link from 'next/link';
import { Heart, Calendar, Building2, ArrowRight } from 'lucide-react';

export const HomeHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Como você pode se envolver?</h2>
          <p className="text-lg text-gray-600">
            Existem diversas formas de apoiar o Projeto Mão Amiga e nos ajudar a garantir um futuro melhor para dezenas de crianças em Farroupilha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Faça uma Doação</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Sua contribuição financeira é fundamental para pagarmos as mensalidades do contraturno e mantermos o projeto vivo.
            </p>
            <Link 
              href="/doacoes" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors"
            >
              Quero Doar <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary-dark mb-6">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Seja uma Empresa Parceira</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Empresas podem apadrinhar vagas, engajar a equipe e fazer parte da nossa rede de solidariedade local.
            </p>
            <Link 
              href="/parceiros" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-secondary-dark hover:bg-opacity-90 text-white font-semibold rounded-full transition-colors"
            >
              Ver Parceiros <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary mb-6">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Participe dos Eventos</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Nossos almoços, brechós e vendas de calendário são abertos a todos. Participe e ajude a divulgar!
            </p>
            <Link 
              href="/eventos" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-tertiary hover:bg-tertiary-dark text-white font-semibold rounded-full transition-colors"
            >
              Agenda de Eventos <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-24 bg-tertiary rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transformando realidades desde 2016</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Conheça de perto a nossa história, nossos ideais e os critérios que utilizamos para selecionar e auxiliar as famílias que mais precisam em nosso município.
              </p>
              <Link 
                href="/sobre" 
                className="inline-flex items-center gap-2 bg-white text-tertiary hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-colors"
              >
                Conhecer a História <ArrowRight size={18} />
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-full min-h-[350px]">
              <img 
                src="/assets/IMG-20250912-WA0005.jpg" 
                alt="Conheça o projeto" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
