import { Button } from "@/components/ui/button";

const Benefits = () => {
  // Função para redirecionar até a seção FinalCTA com efeito de elevador
  const handleRedirect = () => {
    const section = document.getElementById('final-cta');
    if (section) {
      // Adiciona a classe de animação e faz scroll suave
      section.classList.add('elevator-effect');
      section.scrollIntoView({ behavior: 'smooth' });
      // Remove a classe após a animação para permitir reuso
      setTimeout(() => section.classList.remove('elevator-effect'), 1200);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#103927] to-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-5 rounded-xl shadow-sm text-left space-y-6">
          <h2 className="text-2xl font-bold">📌 Como Tudo Isso Vai Funcionar?</h2>
          <p>Essa solução é o caminho exato para você automatizar o atendimento da sua empresa, vender mais e atender 24h por dia com a Inteligência Artificial no WhatsApp.</p>
          <p>Com ela nas suas mãos, você vai ter o controle total sobre quem está conversando com sua empresa, organizar sua base de contatos em um banco de dados próprio e atender seus clientes de forma rápida, personalizada e inteligente.</p>
          <p>Se o que você quer é vender mais, economizar tempo, reduzir custos e parar de perder vendas por falta de atendimento ou demora, essa é a hora.</p>
          <p className="font-bold">E o melhor: Eu mesmo vou cuidar de tudo para você:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Criar a estrutura completa em um servidor exclusivo (VPS)</li>
            <li>Instalar e configurar as ferramentas de IA mais atuais</li>
            <li>Organizar um banco de dados privado com todos os seus contatos</li>
            <li>Ensinar a Inteligência Artificial com o conhecimento da sua empresa</li>
            <li>Configurar a personalidade que você quiser para sua IA <span className="italic">(e sim — ela pode ser mais séria, carismática, descontraída ou técnica, do jeitinho que sua marca pede)</span></li>
          </ul>
          <p>No final, sua IA estará conectada ao seu número de WhatsApp, rodando no automático e te ajudando a faturar enquanto você cuida de outras áreas do seu negócio.</p>
          <p>Se você quer resultados reais, com velocidade, segurança e sem dor de cabeça, é só clicar no botão abaixo e garantir sua vaga.</p>
          <div className="flex items-center space-x-2">
            <span>👉</span>
            <span>Cai pra dentro e vamos colocar sua IA para trabalhar por você!</span>
          </div>
          <div className="text-center mt-4">
            <Button onClick={handleRedirect} className="bg-[#25d366] hover:bg-[#20bd5a] text-white w-full md:w-auto text-base md:text-lg px-6 py-4 md:px-10 md:py-6 rounded-lg font-bold border-2 border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8),0_0_16px_rgba(34,197,94,0.6),0_0_24px_rgba(34,197,94,0.4)]">
               Quero Automatizar Meu Atendimento Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;