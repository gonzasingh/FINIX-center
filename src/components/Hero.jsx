import CreditSimulator from './CreditSimulator';
import Reveal from './Reveal';

const FEATURES = [
  { icon: 'fa-calendar-check', label: 'Hasta 24 Cuotas' },
  { icon: 'fa-bolt', label: 'Aprobación Rápida' },
  { icon: 'fa-shield-alt', label: 'Transparencia Total' },
];

// SECCIÓN HERO: texto de presentación + simulador de crédito
export default function Hero() {
  return (
    <section id="simulador" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left: Text & Pitch */}
          <Reveal
            variant="left"
            className="md:col-span-6 lg:col-span-7 space-y-5 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border-gold-500/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              Soluciones Financieras &amp; Créditos a Medida
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold theme-text-heading leading-tight">
              Transformá tus proyectos con <span className="text-gold-gradient">FINIX Center</span>
            </h1>

            <p className="theme-text-muted text-sm sm:text-base max-w-xl font-light leading-relaxed">
              En <strong className="theme-text-heading font-semibold">FINIX Center</strong> brindamos atención
              personalizada y créditos ágiles con cuotas fijas pensados para potenciar cada etapa de nuestros
              socios.
            </p>

            {/* Features Pills */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gold-500/20">
              {FEATURES.map((feature) => (
                <div key={feature.label} className="flex flex-col items-center md:items-start">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-1.5 text-xs">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider theme-text-muted">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hero Right: SIMULADOR COMPACTO */}
          <Reveal variant="right" className="md:col-span-6 lg:col-span-5">
            <CreditSimulator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
