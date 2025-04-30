import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useCountdown } from '@/hooks/use-countdown';

const Hero = () => {
  const timeLeft = useCountdown(300);
  
  const scrollToOferta = () => {
    const ofertaSection = document.getElementById('cta');
    if (ofertaSection) {
      window.scrollTo({
        top: ofertaSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="py-8 md:py-16 px-4 bg-[#103927] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4">
          {/* Lado esquerdo - Texto e CTA */}
          <div className="w-full lg:w-1/2 text-left lg:pr-4 mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in text-[#4bbe6a]">
              Transforme suas conversas no WhatsApp com Inteligência Artificial
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in text-[#ddf5ff]">
            Atenda seus clientes 24h por dia, reduza custos e venda no automático com tecnologia exclusiva no WhatsApp.
            </p>
            <Button
              className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg border-2 border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8),0_0_16px_rgba(34,197,94,0.6),0_0_24px_rgba(34,197,94,0.4)]"
              onClick={scrollToOferta}
            >
              Agendar demonstração
            </Button>
          </div>
          
          {/* Lado direito - Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Balão de fundo atrás da imagem */}
            <div className="absolute z-0 -top-8 -center-8 w-[75%] h-[115%] bg-[#d8f4cc] rounded-3xl"></div>
            <div className="relative z-10 max-w-md">
              <img 
                src="/personagem.png" 
                alt="Atendente com WhatsApp e IA" 
                className="w-full h-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;