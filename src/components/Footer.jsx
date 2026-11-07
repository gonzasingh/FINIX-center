import { WHATSAPP_DISPLAY, whatsappLink } from '../config/site';

const SECTION_LINKS = [
  { href: '#simulador', label: 'Simulador de Créditos' },
  { href: '#app-mobile', label: 'App FINIX Android' },
  { href: '#quienes-somos', label: 'Quiénes Somos' },
  { href: '#cotizacion', label: 'Cotización USD' },
];

// FOOTER WITH WHATSAPP
export default function Footer() {
  return (
    <footer className="relative pt-12 pb-10 border-t border-gold-500/20 bg-black/90 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5 space-y-3">
            <div className="h-8 flex items-center">
              <img
                src="/finixlogo-horizontal.svg"
                alt="FINIX Center"
                className="h-9 w-auto object-contain brightness-0 invert sepia hue-rotate-[10deg] saturate-[500%]"
              />
            </div>
            <p className="text-xs text-gray-400 max-w-sm">
              Servicios financieros y créditos a medida en cuotas fijas. Casa Central en Tucumán con cobertura en
              todo el Norte Argentino.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-bold text-xs font-heading uppercase tracking-wider">Secciones</h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {SECTION_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-xs font-heading uppercase tracking-wider">Atención Directa</h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <p className="flex items-center gap-2">
                <i className="fas fa-building text-gold-400"></i> Casa Central: Tucumán, Argentina
              </p>
              <p className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-gold-400 text-sm"></i>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300 font-medium"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-clock text-gold-400"></i> Lunes a Viernes 09:00 - 18:00 hs
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500">
          <p>&copy; 2026 FINIX Center. Todos los derechos reservados.</p>
          <p className="mt-1 sm:mt-0">FINIX Center — Soluciones Financieras</p>
        </div>
      </div>
    </footer>
  );
}
