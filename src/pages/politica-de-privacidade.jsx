import { useEffect } from "react";

export default function PoliticaDePrivacidade() {
  useEffect(() => {
    document.title = "Política de Privacidade | leonardodeoliveira.pro";
  }, []);
  return (
    <main style={{
      fontFamily: 'Segoe UI, Arial, sans-serif',
      margin: '0 auto',
      maxWidth: 700,
      padding: '2rem 1.5rem 3rem 1.5rem',
      color: '#23272f',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
      borderRadius: 18,
      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
      minHeight: '100vh',
    }}>
      <style>{`
        .privacidade-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }
        .privacidade-date {
          color: #64748b;
          font-size: 1rem;
          margin-bottom: 2.2rem;
        }
        .privacidade-section {
          margin-bottom: 2.2rem;
        }
        .privacidade-section h2 {
          font-size: 1.25rem;
          color: #0e7490;
          margin-bottom: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
        .privacidade-section ul, .privacidade-section ol {
          padding-left: 1.3em;
          margin: 0.3em 0 0.6em 0;
        }
        .privacidade-section ul li, .privacidade-section ol li {
          margin-bottom: 0.3em;
          line-height: 1.7;
          font-size: 1.08rem;
          position: relative;
        }
        .privacidade-section ul li::marker, .privacidade-section ol li::marker {
          color: #0e7490;
          font-size: 1.1em;
        }
        .privacidade-section {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 6px 0 rgba(14,116,144,0.04);
          padding: 1.2rem 1.3rem 1.1rem 1.3rem;
        }
        .privacidade-footer {
          color: #64748b;
          font-size: 0.98rem;
          text-align: center;
          margin-top: 2.5rem;
        }
        @media (max-width: 600px) {
          main {
            padding: 1.2rem 0.2rem 2rem 0.2rem !important;
          }
          .privacidade-title {
            font-size: 1.4rem;
          }
          .privacidade-section {
            padding: 0.9rem 0.7rem 0.8rem 0.7rem;
          }
        }
      `}</style>
      <h1 className="privacidade-title">🔒 Política de Privacidade — leonardodeoliveira.pro</h1>
      <p className="privacidade-date"><strong>Data de vigência:</strong> 24/05/2025</p>

      <section className="privacidade-section">
        <h2>🔹 Objetivo do Site</h2>
        <p>
          O presente site foi desenvolvido e publicado com o propósito principal de servir como referência institucional e de contato para o público interessado nos serviços de inteligência artificial e automações digitais oferecidos por Leonardo de Oliveira.<br /><br />
          Adicionalmente, este site será utilizado para fins de verificação e validação da conta Business Manager (BM) no Facebook (Meta), atendendo aos requisitos de políticas comerciais e de verificação de domínio da Meta Platforms.
        </p>
      </section>

      <section className="privacidade-section">
        <h2>🔹 Coleta de Dados</h2>
        <p>
          Atualmente, este site não realiza coleta direta de dados pessoais. Nenhum formulário, cadastro ou funcionalidade automatizada de captação de dados é disponibilizada.<br /><br />
          Contudo, ao clicar em botões ou links que direcionam para o aplicativo WhatsApp, o usuário poderá fornecer, de forma voluntária, informações pessoais e dados sensíveis, incluindo:
        </p>
        <ul>
          <li>Nome</li>
          <li>E-mail</li>
          <li>Telefone</li>
          <li>Faturamento médio mensal</li>
          <li>Outras informações que o usuário optar por compartilhar via mensagem</li>
        </ul>
        <p>
          Estes dados são recebidos diretamente no ambiente da plataforma WhatsApp e não são armazenados ou tratados neste site.
        </p>
      </section>

      <section className="privacidade-section">
        <h2>🔹 Uso de Cookies e Tecnologias de Rastreamento</h2>
        <p>
          No momento, este site não utiliza cookies, analytics ou pixels de rastreamento.<br /><br />
          No entanto, poderá futuramente implementar soluções de análise de navegação e remarketing, como Google Analytics, Meta Pixel e tecnologias similares, com o objetivo de aprimorar a experiência do usuário e otimizar campanhas publicitárias. Caso essa implementação ocorra, a política de privacidade será atualizada para refletir as novas práticas.
        </p>
      </section>

      <section className="privacidade-section">
        <h2>🔹 Compartilhamento de Dados</h2>
        <p>
          Nenhuma informação pessoal é coletada ou compartilhada diretamente por este site. Os dados eventualmente enviados pelos usuários via WhatsApp são tratados exclusivamente no ambiente da Meta (WhatsApp Business).
        </p>
      </section>

      <section className="privacidade-section">
        <h2>🔹 Segurança e Integridade das Informações</h2>
        <p>
          Mesmo sem a coleta direta de dados via site, mantemos boas práticas de segurança digital e integridade do domínio, visando garantir a proteção contra acessos indevidos ou atividades maliciosas.
        </p>
      </section>

      <footer className="privacidade-footer">
        <small>&copy; 2025 Leonardo de Oliveira. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}

