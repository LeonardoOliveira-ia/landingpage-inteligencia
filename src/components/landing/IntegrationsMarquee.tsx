import React, { useState } from 'react';

const integrations = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Google Sheets",
    description: "Tenha controle de dados automaticamente"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Google Docs",
    description: "Adicione conhecimento da sua empresa na AI"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Google Drive",
    description: "Consulte arquivos de maneira automática"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Gmail",
    description: "Envie emails de forma automática"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Google Calendar",
    description: "Agende reuniões com clientes de forma automática"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "CRM Integração",
    description: "Sincronize dados de clientes automaticamente"
  }
];

const IntegrationsSection = () => {
  // Dividir os cards em dois grupos: esquerda e direita
  const leftCards = integrations.slice(0, 3);
  const rightCards = integrations.slice(3, 6);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isLeftSide, setIsLeftSide] = useState(false);

  const handleMouseMove = (e, index, isLeft) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setActiveCardIndex(index);
    setIsLeftSide(isLeft);
  };

  const handleMouseLeave = () => {
    setActiveCardIndex(null);
  };
  
  return (
    <section className="py-10 bg-gradient-to-r from-[#f9f9f9] to-[#f5f9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#252525] mb-6">
          Integrações poderosas com sua IA do WhatsApp
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Nossa solução permite conectar o WhatsApp com todas as ferramentas que você já utiliza, criando um ecossistema completo e automatizado para sua empresa.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Cards do lado esquerdo */}
          <div className="w-full lg:w-1/3 space-y-4">
            {leftCards.map((item, index) => (
              <div 
                key={`left-${index}`}
                className="relative bg-[#161616] text-white rounded-xl p-5 shadow-md transition-all duration-300 hover:bg-[#25d366]/90 hover:shadow-lg hover:-translate-y-1 transform cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, index, true)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#25d366] mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  </div>
                </div>
                {activeCardIndex === index && isLeftSide && (
                  <div 
                    className="absolute z-10 bg-black/90 text-white p-3 rounded-lg shadow-lg w-48 text-sm"
                    style={{
                      left: Math.min(mousePos.x, 180), 
                      top: Math.min(mousePos.y, 60),
                      transform: 'translate(-50%, -100%)',
                      pointerEvents: 'none'
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Imagem centralizada */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative max-w-full">
              <img 
                src="/ferramentas-integradas-no-whatsApp.png" 
                alt="Ferramentas integradas no WhatsApp" 
                className="w-full h-auto mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#f5f9f7] opacity-20 pointer-events-none rounded-3xl"></div>
            </div>
          </div>
          
          {/* Cards do lado direito */}
          <div className="w-full lg:w-1/3 space-y-4">
            {rightCards.map((item, index) => (
              <div 
                key={`right-${index}`}
                className="relative bg-[#161616] text-white rounded-xl p-5 shadow-md transition-all duration-300 hover:bg-[#25d366]/90 hover:shadow-lg hover:-translate-y-1 transform cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, index, false)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#25d366] mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  </div>
                </div>
                {activeCardIndex === index && !isLeftSide && (
                  <div 
                    className="absolute z-10 bg-black/90 text-white p-3 rounded-lg shadow-lg w-48 text-sm"
                    style={{
                      left: Math.min(mousePos.x, 180), 
                      top: Math.min(mousePos.y, 60),
                      transform: 'translate(-50%, -100%)',
                      pointerEvents: 'none'
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection; 