import Reveal from './Reveal';

const BENEFITS = [
  {
    icon: 'fa-hand-holding-usd',
    title: 'Créditos Flexibles',
    text: 'Planes acordes a tus posibilidades con cuotas fijas en pesos y plazos desde 6 hasta 24 meses.',
    extraClasses: '',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Gestión Digital en la App',
    text: 'Mirá tus saldos y cuotas desde tu celular de manera totalmente digital en nuestra App para Android.',
    extraClasses: 'border-gold-500/40',
  },
  {
    icon: 'fa-coins',
    title: 'Mercado Cambiario',
    text: 'Cotización del día transparente en compra y venta de divisas con atención en privado.',
    extraClasses: '',
  },
];

// BENEFICIOS FINIX CENTER
export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            Beneficios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold theme-text-heading">
            Por qué elegir a <span className="text-gold-gradient">FINIX Center</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <Reveal
              key={benefit.title}
              className={`glass-card rounded-2xl p-6 relative flex flex-col justify-between group ${benefit.extraClasses}`.trim()}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl group-hover:bg-gold-500 group-hover:text-black transition-all">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3 className="font-heading text-xl font-bold theme-text-heading">{benefit.title}</h3>
                <p className="theme-text-muted text-xs sm:text-sm leading-relaxed">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
