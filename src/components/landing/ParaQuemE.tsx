import React from 'react';
import { Button } from "@/components/ui/button";

const ParaQuemE = () => {
  // Função para redirecionar à seção FinalCTA com efeito de elevador
  const handleRedirect = () => {
    const section = document.getElementById('final-cta');
    if (section) {
      section.classList.add('elevator-effect');
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => section.classList.remove('elevator-effect'), 1200);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#d8f4cc] rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#103927]">
            Para Quem É Esse Sistema de Atendimento com Inteligência Artificial
          </h2>
          
          <p className="text-lg mb-8">
            Se você é empresário ou gestor e quer transformar o atendimento da sua empresa, <strong>essa solução foi feita para você</strong>. Ideal para quem:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Cansa de perder vendas fora do horário comercial</strong> e quer atender seus clientes 24 horas por dia, 7 dias por semana, sem depender de equipe extra.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Deseja reduzir custos operacionais</strong>, eliminando a necessidade de contratar, treinar e manter uma grande equipe para responder perguntas repetitivas.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Busca mais eficiência e produtividade</strong>, automatizando processos simples como status de pedidos, agendamentos e dúvidas frequentes — e liberando sua equipe para o que realmente importa.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Quer oferecer um atendimento rápido, personalizado e consistente</strong>, sem falhas, sem variação de humor e com respostas na hora.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Precisa aumentar as vendas e recuperar carrinhos abandonados</strong>, usando um chatbot inteligente que aborda seus clientes no momento certo, com ofertas certas.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Valoriza dados e quer tomar decisões com base em informações reais</strong>, acompanhando relatórios e análises em tempo real sobre o comportamento dos seus clientes.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Está pronto para escalar o atendimento</strong>, atendendo dezenas, centenas ou milhares de pessoas ao mesmo tempo, sem perder qualidade.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-[#25d366] font-bold mr-3 text-xl flex-shrink-0">✅</span>
              <p className="text-[#252525]">
                <strong>Quer integrar o atendimento em todos os canais</strong> — WhatsApp, site, Instagram, Facebook e mais — e centralizar tudo em um único sistema automatizado.
              </p>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md flex items-start">
              <span className="text-yellow-600 font-bold mr-3 text-xl flex-shrink-0">⚠️</span>
              <div className="text-[#252525]">
                <strong>IMPORTANTE:</strong>
                <br />
                <strong>Essa solução é recomendada para empresas que já possuem um faturamento médio mensal de R$ 10 mil ou mais, e que estejam prontas para acelerar seus resultados e escalar suas operações com inteligência.</strong>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white p-5 rounded-xl">
            <p className="text-[#103927] font-bold text-xl flex items-center">
              <span className="text-[#25d366] mr-3">👉</span>
              Se você se identificou com dois ou mais desses pontos, já está mais do que na hora de modernizar o atendimento da sua empresa.
            </p>
            <div className="mt-6 text-center">
              <Button
                onClick={handleRedirect}
                className="bg-[#25d366] hover:bg-[#20bd5a] text-white w-full md:w-auto text-sm md:text-base px-4 py-3 md:px-8 md:py-4 rounded-lg font-bold border-2 border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8),0_0_16px_rgba(34,197,94,0.6),0_0_24px_rgba(34,197,94,0.4)]"
              >
                QUERO IMPULSIONAR MEU WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemE; 