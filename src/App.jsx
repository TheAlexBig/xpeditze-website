import { useState } from 'react';
import { Icon } from './components/Icons';
import { siteConfig } from './siteConfig';

const salesLink = (subject) => siteConfig.salesEmail
  ? `mailto:${siteConfig.salesEmail}?subject=${encodeURIComponent(subject)}`
  : siteConfig.purchaseUrl;

const benefits = [
  { icon: 'clock', title: 'Menos trabajo repetitivo', text: 'Reutiliza personas, vehículos y profesionales guardados para preparar el siguiente documento con rapidez.' },
  { icon: 'shield', title: 'Información bajo tu control', text: 'Xpeditze funciona localmente. Tus expedientes y documentos permanecen en tu computadora.' },
  { icon: 'document', title: 'Word y PDF listos', text: 'Revisa los datos una vez y genera el documento en el formato que necesitas para entregar o archivar.' },
];

const workflow = [
  ['01', 'Selecciona el documento', 'Abre un flujo guiado diseñado para el trámite que necesitas realizar.'],
  ['02', 'Completa y reutiliza datos', 'Ingresa las partes, el vehículo y el notario; recupera información guardada cuando corresponda.'],
  ['03', 'Revisa y descarga', 'Confirma el resumen y genera Word o PDF con una copia disponible en el historial.'],
];

const features = [
  'Compraventa de vehículos con auténtica notarial',
  'Contratos de mutuo con flujo guiado',
  'Expedientes matrimoniales con control registral',
  'Historial de documentos y recuperación de borradores',
  'Directorio local de personas, notarios y abogados',
  'Textos legales editables por bloques',
  'Respaldo y restauración de información',
  'Aplicación de escritorio para Windows',
];

const documentTypes = [
  {
    status: 'Disponible',
    title: 'Compraventa de vehículos',
    text: 'Organiza comprador, vendedor, vehículo, precio, firma y notario responsable en un solo flujo.',
    details: ['Automóviles, motocicletas y transporte pesado', 'Documento privado y auténtica notarial', 'Descarga en Word y PDF'],
  },
  {
    status: 'Disponible',
    title: 'Contrato de mutuo',
    text: 'Registra acreedor, deudor, monto, forma de pago, jurisdicción y condiciones del préstamo con una revisión final clara.',
    details: ['Reutilización de personas guardadas', 'Lugar de firma por departamento, municipio y distrito', 'Historial y recuperación del documento'],
  },
  {
    status: 'Disponible',
    title: 'Documentación de matrimonio',
    text: 'Prepara el acta prematrimonial, la escritura matriz y la hoja interna de control registral en un solo expediente.',
    details: ['Casos nacionales y documentación extranjera', 'Testigos, regímenes patrimoniales y condiciones especiales', 'Descarga en Word y PDF'],
  },
];

const faqs = [
  ['¿Xpeditze necesita Internet?', 'No para elaborar documentos. La aplicación funciona de forma local; Internet se utiliza únicamente para comprobar actualizaciones o solicitar soporte.'],
  ['¿Dónde se guarda mi información?', 'Los datos se almacenan en la computadora donde instalas Xpeditze. No enviamos documentos ni expedientes a un servidor externo.'],
  ['¿Qué documentos están disponibles?', 'Actualmente puedes preparar compraventas de vehículos, contratos de mutuo y expedientes matrimoniales.'],
  ['¿Qué formatos genera?', 'Los documentos pueden descargarse en Word o PDF, manteniendo el mismo contenido.'],
  ['¿Puedo usar Xpeditze fuera de El Salvador?', 'Xpeditze nace para el trabajo legal en El Salvador y atendemos consultas de toda Centroamérica. Antes de usar un modelo en otro país, su contenido debe adaptarse y validarse conforme a la normativa local.'],
  ['¿La licencia funciona en varias computadoras?', 'La licencia se emite para un equipo. Si necesitas utilizar Xpeditze en varios puestos, solicita una cotización para tu operación.'],
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label="Xpeditze, inicio">
          <span className="brand-mark">X</span>
          <span>Xpeditze</span>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir navegación">
          <span /><span /><span />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} onClick={() => setOpen(false)}>
          <a href="#producto">Producto</a>
          <a href="#documentos">Documentos</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Privacidad</a>
          <a href="#preguntas">Preguntas</a>
          <a className="button button-small" href={siteConfig.purchaseUrl}>Solicitar licencia</a>
        </nav>
      </div>
    </header>
  );
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Vista ilustrativa de Xpeditze">
      <div className="window-bar"><i /><i /><i /><span>Xpeditze</span></div>
      <div className="app-shell">
        <aside>
          <b>Compra venta</b>
          {['Agente', 'Comprador', 'Vehículo', 'Vendedor', 'Firma y venta'].map((item, index) => (
            <div className={index === 1 ? 'app-step active' : 'app-step'} key={item}>
              <span>{index + 1}</span>{item}
            </div>
          ))}
        </aside>
        <div className="app-content">
          <small>DATOS PERSONALES</small>
          <h3>Datos del comprador</h3>
          <p>Ingrese la información tal como aparece en el documento de identidad.</p>
          <div className="form-grid"><i /><i /><i /><i className="wide" /></div>
          <div className="app-action">Guardar y continuar <Icon name="arrow" size={16} /></div>
        </div>
      </div>
      <div className="preview-badge"><Icon name="lock" size={17} /><span><b>Privado y local</b><small>Tus datos permanecen en el equipo</small></span></div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Software legal creado en El Salvador</div>
              <h1>Documentos legales,<br /><em>sin complicaciones.</em></h1>
              <p className="hero-lead">Prepara compraventas de vehículos, contratos de mutuo y expedientes matrimoniales desde un flujo claro, privado y rápido. Xpeditze convierte tus datos en documentos Word o PDF listos para revisar.</p>
              <div className="hero-actions">
                <a className="button" href={siteConfig.purchaseUrl}>Solicitar una licencia <Icon name="arrow" size={18} /></a>
                <a className="text-link" href="#como-funciona">Conocer cómo funciona <Icon name="arrow" size={17} /></a>
              </div>
              <div className="trust-line"><span><Icon name="check" size={16} /> Funciona sin Internet</span><span><Icon name="check" size={16} /> Instalación en Windows</span><span><Icon name="check" size={16} /> Soporte local</span></div>
            </div>
            <ProductPreview />
          </div>
        </section>

        <section className="documents" id="documentos">
          <div className="container">
            <div className="section-intro"><span>DOCUMENTOS EN XPEDITZE</span><h2>Un flujo especializado para cada documento.</h2><p>Cada opción reúne sus partes, condiciones y revisión final, sin mezclar campos que pertenecen a otros trámites.</p></div>
            <div className="document-grid">
              {documentTypes.map((document) => (
                <article className={document.upcoming ? 'document-card upcoming' : 'document-card'} key={document.title}>
                  <div className="document-status">{document.status}</div>
                  <div className="icon-box"><Icon name="document" /></div>
                  <h3>{document.title}</h3>
                  <p>{document.text}</p>
                  <ul>{document.details.map((detail) => <li key={detail}><Icon name="check" size={17} />{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits" id="producto">
          <div className="container">
            <div className="section-intro"><span>HECHO PARA EL TRABAJO REAL</span><h2>Menos tiempo digitando.<br />Más tiempo para tus clientes.</h2><p>Una herramienta práctica para profesionales que necesitan precisión, orden y velocidad todos los días.</p></div>
            <div className="benefit-grid">{benefits.map((item) => <article key={item.title}><div className="icon-box"><Icon name={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="workflow" id="como-funciona">
          <div className="container workflow-grid">
            <div className="workflow-copy"><span className="section-label">UN FLUJO CLARO</span><h2>Del expediente al documento en tres pasos.</h2><p>Xpeditze te guía sin esconder el contenido legal y te permite revisar todo antes de descargar.</p><a className="text-link light" href={siteConfig.demoUrl}>Solicitar demostración <Icon name="arrow" size={17} /></a></div>
            <div className="workflow-steps">{workflow.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="feature-section">
          <div className="container feature-grid">
            <div className="document-art"><div className="paper back" /><div className="paper"><div className="paper-brand"><span>X</span> XPEDITZE</div><h4>CONTRATO DE COMPRAVENTA<br />DE VEHÍCULO</h4>{Array.from({ length: 9 }).map((_, i) => <i key={i} style={{ width: `${92 - (i % 3) * 9}%` }} />)}<div className="signatures"><span /><span /></div></div><div className="format-chip word">W</div><div className="format-chip pdf">PDF</div></div>
            <div className="feature-copy"><span className="section-label">TODO EN SU LUGAR</span><h2>Las herramientas que necesitas, sin ruido.</h2><p>Xpeditze organiza la elaboración, consulta y mantenimiento de tus documentos desde una sola aplicación.</p><ul>{features.map((feature) => <li key={feature}><Icon name="check" size={18} />{feature}</li>)}</ul></div>
          </div>
        </section>

        <section className="privacy" id="seguridad">
          <div className="container privacy-card"><div className="privacy-icon"><Icon name="lock" size={30} /></div><div><span className="section-label">PRIVACIDAD POR DISEÑO</span><h2>Tus documentos no tienen por qué salir de tu oficina.</h2><p>Xpeditze se instala en tu computadora y conserva localmente personas, vehículos, plantillas e historial. Puedes trabajar incluso cuando no hay conexión.</p></div><div className="privacy-facts"><span><b>100%</b> operación local</span><span><b>0</b> documentos enviados a la nube</span><span><b>ZIP</b> respaldos bajo tu control</span></div></div>
        </section>

        <section className="region" aria-labelledby="region-title">
          <div className="container region-grid">
            <div><span className="section-label">HECHO EN CENTROAMÉRICA</span><h2 id="region-title">Tecnología cercana al trabajo legal de la región.</h2></div>
            <div><p>Xpeditze nace en El Salvador para resolver tareas reales de profesionales, notarías y oficinas que preparan documentos todos los días.</p><p>Estamos construyendo una herramienta capaz de crecer hacia Guatemala, Honduras, Nicaragua, Costa Rica, Panamá y Belice. La disponibilidad y los modelos legales se validan por país antes de ofrecerse.</p><a className="text-link" href={salesLink('Xpeditze para mi país')}>Consultar disponibilidad en mi país <Icon name="arrow" size={17} /></a></div>
          </div>
        </section>

        <section className="purchase" id="contacto">
          <div className="container purchase-grid"><div><span className="section-label">XPEDITZE PARA WINDOWS</span><h2>Empieza a trabajar con más orden.</h2><p>Cuéntanos cuántos equipos necesitas y te ayudaremos con la licencia, instalación y primeros pasos.</p></div><div className="price-card"><small>LICENCIA POR EQUIPO</small><h3>{siteConfig.priceLabel}</h3><ul><li><Icon name="check" size={17} /> Instalador para Windows</li><li><Icon name="check" size={17} /> Activación vinculada al equipo</li><li><Icon name="check" size={17} /> Actualizaciones y soporte</li></ul><a className="button full" href={salesLink('Solicitud de licencia Xpeditze')}>Solicitar información <Icon name="arrow" size={18} /></a>{siteConfig.salesEmail && <p>También puedes escribir a <a href={`mailto:${siteConfig.salesEmail}`}>{siteConfig.salesEmail}</a></p>}</div></div>
        </section>

        <section className="faq" id="preguntas"><div className="container faq-grid"><div><span className="section-label">PREGUNTAS FRECUENTES</span><h2>Antes de comenzar.</h2><p>Lo esencial sobre instalación, privacidad y licenciamiento.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
      </main>
      <footer><div className="container footer-grid"><a className="brand light-brand" href="#inicio"><span className="brand-mark">X</span><span>Xpeditze</span></a><p>Software para documentos legales en Centroamérica.</p><div><a href="#documentos">Documentos</a><a href="#seguridad">Privacidad</a><a href={salesLink('Consulta sobre Xpeditze')}>Contacto</a></div><small>© {new Date().getFullYear()} Xpeditze · El Salvador</small></div></footer>
    </>
  );
}

export default App;
