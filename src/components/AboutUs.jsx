import Reveal from './Reveal';

// QUIÉNES SOMOS
export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="glass-panel rounded-3xl p-6 sm:p-10 border border-gold-500/30">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              Quiénes Somos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold theme-text-heading">
              Tu aliado financiero para <span className="text-gold-gradient">impulsarte</span> en cada etapa
            </h2>
            <p className="theme-text-muted text-sm sm:text-base leading-relaxed">
              En <strong className="theme-text-heading font-semibold">FINIX Center</strong> nacimos en el Norte
              Argentino con un propósito claro: ser el motor que transforma proyectos en realidades. Hoy
              acompañamos a cientos de socios activos desde nuestra Casa Central en Tucumán y presencia en toda la
              región.
            </p>
          </div>

          {/* Dual Cards for Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="glass-card rounded-2xl p-6 space-y-3 border-gold-500/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-3 text-lg">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="font-heading text-xl font-bold theme-text-heading">Nuestra Misión</h3>
                <p className="theme-text-muted text-xs sm:text-sm leading-relaxed mt-2">
                  Ser tu aliado financiero, brindándote soluciones simples, rápidas y a medida para que alcances
                  tus metas comerciales y personales con tranquilidad.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3 border-gold-500/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-3 text-lg">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="font-heading text-xl font-bold theme-text-heading">Nuestra Visión &amp; Valores</h3>
                <p className="theme-text-muted text-xs sm:text-sm leading-relaxed mt-2">
                  Liderar el sector financiero regional manteniendo siempre nuestra esencia: una atención humana,
                  personalizada y guiada por la integridad, la honestidad y la transparencia.
                </p>
              </div>
            </div>
          </div>

          {/* BRAND SVG INTEGRATION */}
          <div className="mt-10 pt-8 border-t border-gold-500/20 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-32 sm:w-36 flex-shrink-0 flex items-center justify-center">
              <img
                src="/finixlogo-horizontal.svg"
                alt="FINIX Center"
                className="w-full h-auto object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              />
            </div>
            <div className="text-xs theme-text-muted space-y-1">
              <p className="font-bold theme-text-heading text-sm font-heading">FINIX Center — Marca Registrada</p>
              <p>Atención personalizada al socio • Créditos en cuotas fijas • Casa Central Tucumán</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
