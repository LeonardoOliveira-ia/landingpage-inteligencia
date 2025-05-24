export default function TermosDeUso() {
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
        .termos-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }
        .termos-date {
          color: #64748b;
          font-size: 1rem;
          margin-bottom: 2.2rem;
        }
        .termos-section {
          margin-bottom: 2.2rem;
        }
        .termos-section h2 {
          font-size: 1.25rem;
          color: #16a34a;
          margin-bottom: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
        .termos-section ul {
          padding-left: 1.3em;
          margin: 0.3em 0 0.6em 0;
        }
        .termos-section ul li {
          margin-bottom: 0.3em;
          line-height: 1.7;
          font-size: 1.08rem;
          position: relative;
        }
        .termos-section ul li::marker {
          color: #16a34a;
          font-size: 1.1em;
        }
        .termos-section {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 6px 0 rgba(22,163,74,0.04);
          padding: 1.2rem 1.3rem 1.1rem 1.3rem;
        }
        .termos-footer {
          color: #64748b;
          font-size: 0.98rem;
          text-align: center;
          margin-top: 2.5rem;
        }
        @media (max-width: 600px) {
          main {
            padding: 1.2rem 0.2rem 2rem 0.2rem !important;
          }
          .termos-title {
            font-size: 1.4rem;
          }
          .termos-section {
            padding: 0.9rem 0.7rem 0.8rem 0.7rem;
          }
        }
      `}</style>
      <h1 className="termos-title">📄 Termos de Uso — leonardodeoliveira.pro</h1>
      <p className="termos-date"><strong>Data de vigência:</strong> 24/05/2025</p>

      <section className="termos-section">
        <h2>✅ 1. Apresentação</h2>
        <ul>
          <li>Este site é de titularidade de Leonardo de Oliveira.</li>
          <li>Propósito: divulgar informações institucionais, serviços de inteligência artificial e automações digitais.</li>
          <li>Uso adicional: verificação de Business Manager (Meta) e validação de domínio.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 2. Aceitação dos Termos</h2>
        <ul>
          <li>Ao acessar este site, o usuário aceita integralmente estes Termos de Uso.</li>
          <li>Caso não concorde, deve interromper imediatamente a navegação.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 3. Uso Autorizado</h2>
        <ul>
          <li>Navegação permitida apenas para fins pessoais e não comerciais.</li>
          <li>Proibido copiar, reproduzir ou distribuir conteúdo sem autorização prévia.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 4. Propriedade Intelectual</h2>
        <ul>
          <li>Todo conteúdo pertence a Leonardo de Oliveira.</li>
          <li>É vedado uso comercial ou modificação sem consentimento escrito.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 5. Limitações de Responsabilidade</h2>
        <ul>
          <li>Informações fornecidas "como estão", sem garantias expressas ou implícitas.</li>
          <li>Não há responsabilidade por eventuais danos decorrentes do uso do site.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 6. Links Externos</h2>
        <ul>
          <li>Pode haver links para sites de terceiros.</li>
          <li>Não nos responsabilizamos pelo conteúdo de sites externos.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 7. Alterações dos Termos</h2>
        <ul>
          <li>Leonardo de Oliveira poderá modificar estes Termos a qualquer momento.</li>
          <li>Uso continuado do site implica concordância com as novas versões.</li>
        </ul>
      </section>
      <section className="termos-section">
        <h2>✅ 8. Lei Aplicável e Foro</h2>
        <ul>
          <li>Termos regidos pelas leis brasileiras.</li>
          <li>Foro: Comarca de Florianópolis/SC para resolução de conflitos.</li>
        </ul>
      </section>
      <footer className="termos-footer">
        <small>&copy; 2025 Leonardo de Oliveira. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}


