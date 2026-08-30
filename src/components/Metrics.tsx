import React from 'react';
import { Users, Building2 } from 'lucide-react';

export const Metrics: React.FC = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <Users size={48} className="mb-4" />
            <h3 className="text-4xl font-extrabold mb-2">+ de 170</h3>
            <p className="text-xl font-medium">Crianças e Famílias Atendidas</p>
            <span className="text-sm opacity-80 mt-2">ao longo de 9 anos</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <Building2 size={48} className="mb-4" />
            <h3 className="text-4xl font-extrabold mb-2">+ de 2 mil</h3>
            <p className="text-xl font-medium">Mensalidades Pagas</p>
            <span className="text-sm opacity-80 mt-2">garantindo o contraturno</span>
          </div>
        </div>
      </div>
    </section>
  );
};
