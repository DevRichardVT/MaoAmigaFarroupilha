"use client";

import React, { useState } from 'react';
import { QrCode, Heart, Copy, CheckCircle2 } from 'lucide-react';

export const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Aqui vai a chave PIX real futuramente
    navigator.clipboard.writeText('XX.XXX.XXX/0001-XX');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="doacoes">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Coluna Esquerda: Textos e Outras Formas */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wider">
              <Heart size={18} />
              Faça a Diferença
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sua ajuda transforma <span className="text-primary">futuros.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sua doação espontânea nos ajuda a manter a estrutura e garantir que mais crianças tenham acesso ao contraturno escolar. Toda contribuição é um passo rumo a uma sociedade melhor.
            </p>
            
            <div className="pt-8 mt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Outras formas de doar</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 text-secondary-dark font-bold text-xl">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">COMDICA</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Solicite ao seu contador para na Declaração do Imposto de Renda citar o COMDICA para destinar fundos ao nosso projeto.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center flex-shrink-0 text-tertiary font-bold text-xl">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Nota Fiscal Gaúcha</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Cadastre-se no programa e indique o <strong>Projeto Mão Amiga Farroupilha</strong> na área de Assistência Social.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Cartão PIX */}
          <div className="w-full lg:w-[450px]">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col items-center relative overflow-hidden">
              {/* Efeito decorativo sutil de fundo */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center relative z-10">Doação via PIX</h3>
              <p className="text-gray-500 mb-8 text-center text-sm relative z-10">Rápido, seguro e sem taxas.</p>
              
              <div className="w-56 h-56 bg-white rounded-2xl flex items-center justify-center mb-8 border border-gray-200 shadow-sm relative z-10 p-2">
                {/* Placeholder para o QR Code real (aqui vai a imagem .png do QR Code futuramente) */}
                <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50">
                   <QrCode className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              
              <div className="w-full relative z-10">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ml-1">Chave CNPJ</label>
                <div className="w-full bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-center justify-between group hover:border-primary/50 transition-colors">
                  <span className="font-mono text-gray-800 truncate font-medium pl-2">XX.XXX.XXX/0001-XX</span>
                  <button 
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      copied ? 'bg-green-100 text-green-700' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                    }`}
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <><CheckCircle2 size={16} /> Copiado</>
                    ) : (
                      <><Copy size={16} /> Copiar</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
