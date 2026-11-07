import { WA_MESSAGES, whatsappLink } from '../config/site';
import Reveal from './Reveal';

const SHORTCUTS = [
  { icon: 'fa-wallet', label: 'Mis créditos' },
  { icon: 'fa-file-invoice', label: 'Estado de cuenta' },
  { icon: 'fa-calculator', label: 'Simulá tu crédito' },
  { icon: 'fa-comments', label: 'Mis solicitudes' },
];

const APP_FEATURES = [
  {
    title: 'Estado de Cuenta en Vivo',
    text: 'Consultá saldos vigentes y comprobantes de pago en cualquier lugar.',
  },
  {
    title: 'Simulaciones Express',
    text: 'Calculá nuevos montos y solicitá renovaciones con 1 solo clic.',
  },
];

// SECCIÓN APP MÓVIL ANDROID
export default function AppMobile() {
  return (
    <section id="app-mobile" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Mockup de la App FINIX Android */}
          <Reveal variant="zoom" className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-[310px] sm:w-[330px] animate-float-phone">
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full -z-10"></div>

              {/* Phone Frame Structure */}
              <div className="w-full bg-slate-950 border-[7px] border-slate-800 rounded-[44px] shadow-phone-shadow overflow-hidden text-slate-800">
                {/* Phone Notch Header */}
                <div className="bg-black py-2 px-5 flex justify-between items-center text-white text-[10px]">
                  <span className="font-bold">9:41</span>
                  <div className="w-14 h-3.5 bg-black rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                  </div>
                  <div className="flex gap-1 text-[9px]">
                    <i className="fas fa-signal"></i>
                    <i className="fas fa-wifi"></i>
                    <i className="fas fa-battery-full"></i>
                  </div>
                </div>

                {/* APP CONTENT CONTAINER */}
                <div className="bg-[#F8F6EF] p-3.5 text-slate-900 font-sans space-y-3.5 max-h-[580px] overflow-y-auto">
                  {/* App Top User Card */}
                  <div className="app-header-card rounded-2xl p-3.5 text-white relative overflow-hidden">
                    <div className="flex justify-between items-start mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-2 group">
                          <div className="h-8 flex items-center">
                            <img
                              src="/finixlogo-horizontal.svg"
                              alt="FINIX Center"
                              className="h-7 w-auto object-contain brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                          <i className="fas fa-bell"></i>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                    </div>

                    <div className="mt-1">
                      <p className="text-[10px] text-amber-100 font-medium">Buen día</p>
                      <h4 className="font-heading font-extrabold text-base text-white leading-tight">
                        Emiliano Rodriguez
                      </h4>
                      <p className="text-[9px] text-amber-200">DNI 40000350</p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/20">
                      <p className="text-[9px] uppercase tracking-wider text-amber-100">Saldo pendiente</p>
                      <p className="text-xl font-extrabold text-white font-heading">$2.760.002,00</p>
                    </div>
                  </div>

                  {/* App Shortcuts Grid */}
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-800 mb-1.5 font-heading">Tus atajos</h5>
                    <div className="grid grid-cols-4 gap-1.5">
                      {SHORTCUTS.map((shortcut) => (
                        <div
                          key={shortcut.label}
                          className="p-1.5 bg-amber-100/70 rounded-xl text-center flex flex-col items-center justify-center border border-amber-200"
                        >
                          <i className={`fas ${shortcut.icon} text-amber-700 text-xs mb-1`}></i>
                          <span className="text-[8px] font-bold leading-tight text-slate-800">
                            {shortcut.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* App Avisos Card */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-500 font-medium">Próxima cuota</p>
                        <p className="text-xs font-extrabold text-slate-900 font-heading">$197.143,00</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Martes
                    </span>
                  </div>

                  {/* App Supermiércoles */}
                  <div className="bg-amber-100/80 rounded-xl p-2.5 border border-amber-300/60 flex items-center gap-2">
                    <div className="flex-1">
                      <span className="text-[8px] uppercase font-bold text-amber-900 bg-amber-300/70 px-1.5 py-0.5 rounded">
                        Más beneficios
                      </span>
                      <h6 className="font-extrabold text-[11px] text-slate-900 font-heading mt-0.5">
                        ¡SUPERMIÉRCOLES!
                      </h6>
                      <p className="text-[8px] text-slate-700 mt-0.5 leading-tight">
                        Descuentos exclusivos en comercios adheridos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text Description & Downloads */}
          <Reveal variant="right" className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              Plataforma Móvil Android
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold theme-text-heading leading-tight">
              Gestioná tus créditos desde la <span className="text-gold-gradient">App Móvil</span>
            </h2>

            <p className="theme-text-muted text-sm sm:text-base font-light leading-relaxed">
              Con la App de <strong className="theme-text-heading font-semibold">FINIX Center</strong> para
              Android, tenés acceso directo a tus estados de cuenta, el detalle de tus cuotas, vencimientos y la
              posibilidad de solicitar nuevos créditos al instante.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
              {APP_FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-[10px] mt-0.5 border border-gold-500/40">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4 className="theme-text-heading font-bold">{feature.title}</h4>
                    <p className="text-xs theme-text-muted">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Badges */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={whatsappLink(WA_MESSAGES.app)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-black border border-gold-500/40 text-white hover:border-gold-400 transition-all flex items-center gap-3 shadow-gold-glow"
              >
                <i className="fab fa-google-play text-2xl text-gold-400"></i>
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-wider text-gray-400">Disponible en</p>
                  <p className="text-xs font-bold font-heading text-white">Google Play Store</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
