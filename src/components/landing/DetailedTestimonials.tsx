import { Card } from "@/components/ui/card";
import { useElevatorScroll } from "@/hooks/use-elevator-scroll";
import { useState } from "react";

// Componente para renderizar as estrelas de avaliação
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center mt-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg 
          key={star}
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill={star <= rating ? "#FFD700" : "none"}
          stroke="#FFD700"
          strokeWidth="1.5"
          className="mr-1"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ))}
      <span className="text-sm text-gray-500 ml-2">({rating}/5)</span>
    </div>
  );
};

const detailedTestimonials = [
  {
    name: "Ricardo Mendes",
    segment: "e-commerce",
    challenge: "gerenciar o alto volume de mensagens de clientes e perder vendas por demora nas respostas",
    solution: "a solução de IA para WhatsApp com atendimento automatizado",
    results: "um aumento de 45% nas vendas e redução de 70% no tempo de resposta aos clientes",
    tone: "Profissional",
    rating: 5
  },
  {
    name: "Ana Ferreira",
    segment: "clínica estética",
    challenge: "organizar agendamentos e atender dúvidas básicas de clientes fora do horário comercial",
    solution: "o assistente virtual no WhatsApp com integração ao sistema de agendamentos",
    results: "uma redução de 80% nas faltas às consultas e um aumento de 35% nos agendamentos mensais",
    tone: "Inspirador",
    rating: 4.8
  },
  {
    name: "Paulo Souza",
    segment: "contabilidade",
    challenge: "responder perguntas frequentes de clientes que tomavam muito tempo da equipe",
    solution: "o sistema de IA no WhatsApp com respostas automáticas para dúvidas comuns",
    results: "uma economia de 25 horas semanais da equipe e maior satisfação dos clientes com respostas imediatas",
    tone: "Casual",
    rating: 4.5
  }
];

const DetailedTestimonials = () => {
  const scrollToElevator = useElevatorScroll({ duration: 1200 });
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Efeito de elevador no clique
    setTimeout(() => {
      scrollToElevator('cta');
      
      // Resetar a animação após completar
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    }, 200);
  };
  
  return (
    <section className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Histórias de Sucesso
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto text-gray-600">
          Veja como nossa solução transformou a rotina de diversos segmentos
        </p>
        
        <div className="bg-[#d8f4cc] p-8 rounded-2xl shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailedTestimonials.map((item, index) => (
              <Card key={index} className="p-6 shadow-lg border-t-4 border-t-[#25d366] h-full flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <div className="h-12 w-12 rounded-full bg-[#103927] text-white flex items-center justify-center mr-3 text-lg font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <p className="text-sm text-gray-500 capitalize">Segmento de {item.segment}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow text-gray-700">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#103927] mb-1">Desafio:</h4>
                    <p>{item.name} enfrentava o desafio de {item.challenge}.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#103927] mb-1">Solução:</h4>
                    <p>Após adotar {item.solution}, o cenário mudou completamente.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#103927] mb-1">Resultados:</h4>
                    <p>Com a implementação, percebeu {item.results}.</p>
                    <StarRating rating={item.rating} />
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-[#25d366] mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-gray-600">Transformação comprovada</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {item.tone}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={handleClick}
            className={`inline-flex items-center text-[#25d366] hover:text-[#103927] font-semibold transition-all cursor-pointer ${
              isAnimating ? 'transform translate-y-1 scale-95' : ''
            }`}
          >
            Quero resultados como esses
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailedTestimonials; 