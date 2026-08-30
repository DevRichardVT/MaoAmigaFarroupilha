import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="parceiros">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empresas Parceiras</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Conheça as empresas que acreditam na nossa causa e nos ajudam a transformar a realidade de dezenas de crianças em Farroupilha.
        </p>
        
        {/* Placeholder for partner logos - to be populated later via CMS or static list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">Parceiro 1</div>
          <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">Parceiro 2</div>
          <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">Parceiro 3</div>
          <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">Parceiro 4</div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ainda não faz parte e quer atuar junto ao projeto?</h3>
          <p className="text-gray-600 mb-6">
            Junte-se a nós e faça parte desta rede de apoio. Sua empresa (ou você como voluntário) pode transformar vidas através do patrocínio de vagas, participação no calendário ou doações pontuais. Ficaremos muito felizes em contar com o teu APOIO!
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">Entre em contato com nossa Equipe Técnica:</h4>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Juliana (Psicóloga):</strong> 54 99988-6642</li>
              <li><strong>Jaqueline (Assistente Social):</strong> 54 98405-9265</li>
            </ul>
          </div>
          <a 
            href="https://api.whatsapp.com/send?phone=5554999886642" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
