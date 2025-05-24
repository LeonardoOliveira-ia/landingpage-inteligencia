import { useState, useEffect } from 'react';
import Hero from '@/components/landing/Hero';
import IntegrationsMarquee from '@/components/landing/IntegrationsMarquee';
import Benefits from '@/components/landing/Benefits';
import DetailedTestimonials from '@/components/landing/DetailedTestimonials';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import AnimatedSection from '@/components/AnimatedSection';
import ParaQuemE from '@/components/landing/ParaQuemE';

const Index = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Ajuste para considerar a altura do header + nav
        behavior: 'smooth'
      });
    }
  };

  return <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header e barra de navegação removidos */}
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <AnimatedSection id="para-quem-e">
          <ParaQuemE />
        </AnimatedSection>
        
        <AnimatedSection id="integrations">
          <IntegrationsMarquee />
        </AnimatedSection>
        
        <AnimatedSection id="benefits">
          <Benefits />
        </AnimatedSection>
        
        <AnimatedSection id="testimonials">
          <DetailedTestimonials />
        </AnimatedSection>
        
        <AnimatedSection id="cta">
          <FinalCTA />
        </AnimatedSection>
        
        <AnimatedSection id="faq">
          <FAQ />
        </AnimatedSection>
      </main>

      <footer className="text-white py-6 px-4 bg-[#103927]">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          {/* Ícones sociais à esquerda */}
          <div className="flex space-x-4">
            {/* Instagram */}
            <a href="https://www.instagram.com/leonardodeoliveira.pro" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-[#4bbe6a] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z"/>
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
                <circle cx="17.75" cy="6.25" r="1"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/leonardodeoliveirapro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-[#4bbe6a] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.05c.54-1.02 1.87-2.1 3.85-2.1 4.12 0 4.88 2.72 4.88 6.26V24h-4V14.1c0-2.34-.04-5.36-3.26-5.36-3.26 0-3.76 2.55-3.76 5.19V24h-4V8z"/>
              </svg>
            </a>
          </div>
          {/* Texto principal e links */}
          <div className="text-center text-sm leading-tight space-y-1">
            <p>© Leonardo de Oliveira | Todos os direitos reservados.</p>
            <p>CNPJ: 53.961.037/0001-42 | suporte@leonardodeoliveira.pro</p>
            <p>Endereço: João Oxisque, 109 | Barueri - SP - 06440-000</p>
            <p>Telefone comercial: +55 11 96753-3460</p>
            <div className="flex justify-center space-x-4 mt-1">
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">Política de Privacidade</a>
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;