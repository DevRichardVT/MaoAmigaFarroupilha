"use client";

import React, { useEffect } from 'react';
import { Calendar, Gift, ShoppingBag, Utensils } from 'lucide-react';

export const Events: React.FC = () => {
  useEffect(() => {
    // Load Elfsight script safely on the client side only
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const annualEvents = [
    {
      title: "Calendário Solidário",
      description: "Nosso tradicional calendário anual com a participação de nossos parceiros.",
      icon: <Calendar className="w-8 h-8 text-primary" />
    },
    {
      title: "Cesta de Dia das Mães",
      description: "Uma cesta especial recheada de carinho para celebrar essa data tão importante.",
      icon: <Gift className="w-8 h-8 text-secondary" />
    },
    {
      title: "Brechó Solidário",
      description: "Peças de qualidade com preços acessíveis. Toda a renda é revertida para o projeto.",
      icon: <ShoppingBag className="w-8 h-8 text-primary" />
    },
    {
      title: "Almoço de Aniversário",
      description: "Nosso encontro anual para celebrar as conquistas e engajar a comunidade.",
      icon: <Utensils className="w-8 h-8 text-secondary" />
    }
  ];

  return (
    <section className="py-12 bg-white" id="eventos">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Eventos Anuais Fixos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eventos Anuais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Participe das nossas ações fixas ao longo do ano e nos ajude a manter e expandir os atendimentos do projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {annualEvents.map((event, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Espelhamento do Instagram / Últimas Ações */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <svg className="text-primary w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Últimas Ações e Novidades
              </h2>
              <p className="text-gray-600">
                Acompanhe em tempo real o que está rolando no projeto diretamente do nosso Instagram.
              </p>
            </div>
            <a 
              href="https://www.instagram.com/maoamigafarroupilha/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors flex-shrink-0"
            >
              Seguir no Instagram
            </a>
          </div>

          {/* Container do Feed (Widget) */}
          <div className="w-full min-h-[400px] bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center p-8 text-center shadow-inner">
            <div 
              className="elfsight-app-17ed3790-a6b2-4d4e-af7e-b8b18f154636 w-full" 
              data-elfsight-app-lazy="true"
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};
