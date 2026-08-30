import React from 'react';
import { BookOpen, ShieldCheck, HeartHandshake, History } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
      {/* Banner Superior Colorido - PDF Style */}
      <div className="bg-tertiary py-16 mb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Por que o projeto existe?</h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            O acesso à Educação Infantil e ao contraturno escolar é um <strong>direito</strong>, mas as políticas sociais muitas vezes não contemplam essa necessidade em sua totalidade, deixando crianças em situação de vulnerabilidade.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Dynamic Grid: Reasons / Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 -mt-32 relative z-10">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary-dark">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Desenvolvimento Integral</h3>
            <p className="text-gray-600 leading-relaxed">
              Ampliamos as oportunidades de aprendizagem, convivência social, prática esportiva e apoio pedagógico para as crianças.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Segurança e Acolhimento</h3>
            <p className="text-gray-600 leading-relaxed">
              Oferecemos um local seguro e afetivo no contraturno escolar para que os pais e responsáveis possam trabalhar com mais tranquilidade.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-tertiary">
            <div className="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary">
              <HeartHandshake size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Transformação Social</h3>
            <p className="text-gray-600 leading-relaxed">
              Atendemos de forma preventiva, visando ressignificar as condições de vida das famílias e fortalecer seus vínculos comunitários.
            </p>
          </div>
        </div>

        {/* Feature Section with Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img 
              src="/assets/IMG-20250912-WA0001.jpg" 
              alt="Atividades Mão Amiga" 
              className="rounded-3xl shadow-md w-full h-56 md:h-72 object-cover mt-8 md:mt-12"
            />
            <img 
              src="/assets/IMG-20250912-WA0008.jpg" 
              alt="Crianças sorrindo" 
              className="rounded-3xl shadow-md w-full h-56 md:h-72 object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary-dark font-semibold rounded-full text-sm uppercase tracking-wider">
              <History size={18} />
              Nossa História
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Uma extensão de amor com atuação independente.
            </h3>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Idealizado pelo <strong>Frei Jaime Bettega</strong> em Caxias do Sul (iniciado em 2009), o projeto rapidamente se tornou um símbolo de solidariedade.
              </p>
              <p>
                <strong>Em Farroupilha atuamos desde 2016.</strong> Somos uma extensão desse lindo trabalho, porém operamos de forma totalmente independente e sem divisão de verbas com a sede caxiense.
              </p>
              <p>
                Nossa unidade nasceu do engajamento de alunos do curso de Processos Gerenciais do IFRS, tendo <strong>Fabiano Feltrin</strong> como nosso primeiro presidente, plantando a semente que hoje transforma dezenas de vidas.
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-8 md:gap-12">
              <div>
                <span className="block text-4xl font-extrabold text-primary mb-1">2016</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ano de Fundação</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-secondary-dark mb-1">100%</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Independente</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
