import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[75vh] py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/IMG-20250912-WA0007.jpg" 
          alt="Crianças do projeto Mão Amiga" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-white/95 p-6 md:p-8 rounded-[40px] mb-8 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 inline-block">
          <img src="/assets/Logo.avif" alt="Mão Amiga Farroupilha" className="h-28 md:h-36 w-auto object-contain" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
          Transformando o Futuro Através da Educação
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow mb-10">
          Apoiando o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade em Farroupilha.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <a 
            href="/doacoes" 
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Quero Doar
          </a>
          <a 
            href="/sobre" 
            className="w-full sm:w-auto px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Nossa História
          </a>
        </div>
      </div>
    </section>
  );
};
