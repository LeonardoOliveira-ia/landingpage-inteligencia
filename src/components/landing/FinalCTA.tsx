import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="relative py-16 px-4">
      {/* Imagem de fundo da seção */}
      <img
        src="/fundodapagina.png"
        alt="Fundo da página"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="max-w-md mx-auto">
        <div className="relative max-w-md mx-auto z-10">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-xl shadow-lg space-y-6 relative">
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 py-1 rounded-lg transform rotate-12 font-bold text-sm shadow-md">
              Vagas Limitadas
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
              Garanta agora sua Inteligência Artificial no WhatsApp
            </h2>
            <div className="bg-yellow-400 text-black font-semibold text-center px-4 py-2 rounded-md">
              INVESTIMENTO MÍNIMO R$ 5.000
            </div>
            <p className="text-green-200 text-3xl font-bold text-center">
              R$ 5.000 À VISTA ou em até 12x no cartão
            </p>
            <div className="text-center">
              <a
                href="https://wa.me/5511967533460?text=Quero%20saber%20mais%20sobre%20Intelig%C3%AAncia%20Artificial%20no%20atendimento%20do%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="bg-green-600 text-white font-bold py-3 px-4 md:px-6 rounded-lg border-2 border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8),0_0_16px_rgba(34,197,94,0.6),0_0_24px_rgba(34,197,94,0.4)] w-full text-xs sm:text-sm md:text-base">
                  SIM! QUERO AUTOMATIZAR MEU ATENDIMENTO
                </Button>
              </a>
              <p className="mt-3 text-white text-sm">Implantação completa em até 7 dias úteis.</p>
            </div>
            <div className="flex justify-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4h20v16H2V4zm18 14V8H4v10h16zM4 6h16V4H4v2z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 21l1-7h5l-6-12-1 7H6l6 12z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
