import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quem pode se beneficiar desta solução?",
    answer: "Empresas com faturamento médio mensal de R$ 10 mil ou mais, prontas para escalar suas operações e acelerar resultados."
  },
  {
    question: "Como posso escalar o atendimento ao cliente?",
    answer: "Nosso chatbot inteligente atende dezenas, centenas ou milhares de clientes simultaneamente, mantendo qualidade e consistência."
  },
  {
    question: "Quais canais são suportados?",
    answer: "Integração completa com WhatsApp, site, Instagram, Facebook e outros, tudo centralizado em uma única plataforma."
  },
  {
    question: "Quanto tempo leva para implementação?",
    answer: "Em média até 5 dias úteis, sem necessidade de equipe técnica interna."
  },
  {
    question: "Posso personalizar a linguagem e mensagens?",
    answer: "Sim, treinamos o sistema com seu conteúdo e tom de voz para respostas personalizadas e consistentes."
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
        FAQ - Perguntas Frequentes:
        </h2>
        <Accordion type="single" collapsible className="animate-fade-in">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-black last:border-b-0">
              <AccordionTrigger className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-black">➤</span>
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
