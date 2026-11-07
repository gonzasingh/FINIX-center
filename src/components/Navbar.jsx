import { useState } from 'react';
import { WA_MESSAGES, whatsappLink } from '../config/site';

const DESKTOP_LINKS = [
  { href: '#simulador', label: 'Simulador' },
  { href: '#app-mobile', label: 'App FINIX' },
  { href: '#quienes-somos', label: 'Nosotros' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#cotizacion', label: 'Cotización USD' },
];

const MOBILE_LINKS = [
  { href: '#simulador', label: 'Simulador de Crédito' },
  { href: '#app-mobile', label: 'App FINIX Android' },
  { href: '#quienes-somos', label: 'Quiénes Somos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#cotizacion', label: 'Cotización Dólar' },
];

export default function Navbar({ isDark, onToggleTheme, onOpenLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeIcon = isDark ? 'fa-moon' : 'fa-sun';

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO IZQUIERDA */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0 mr-auto lg:mr-0">
            <div className="h-10 flex items-center">
              <img
                src="/finixlogo-horizontal.svg"
                alt="FINIX Center"
                className="h-7 sm:h-9 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              />
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider">
            {DESKTOP_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold-400 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls: Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark/Light Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Cambiar entre tema claro y oscuro"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-gold-400 hover:text-white transition-all"
            >
              <i className={`fas ${themeIcon} text-sm`}></i>
            </button>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink(WA_MESSAGES.nav)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-black font-semibold text-xs transition-all duration-300 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp text-sm"></i>
              <span>WhatsApp</span>
            </a>

            {/* LOGIN / REGISTER PORTAL BUTTON ("INGRESAR") */}
            <button
              type="button"
              onClick={onOpenLogin}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <i className="fas fa-user-circle text-sm"></i>
              <span>Ingresar</span>
            </button>
          </div>

          {/* Mobile menu button & controls */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={onOpenLogin}
              className="px-3 py-1.5 rounded-full bg-gold-500 text-black font-bold text-[11px] uppercase tracking-wider"
            >
              Ingresar
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Cambiar entre tema claro y oscuro"
              className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-gold-400"
            >
              <i className={`fas ${themeIcon} text-xs`}></i>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Abrir o cerrar el menú"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="theme-text-heading hover:text-gold-400 focus:outline-none p-1.5"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? '' : 'hidden '}lg:hidden glass-panel border-t border-gold-500/20 px-4 pt-2 pb-6 space-y-2 text-sm`}
      >
        {MOBILE_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gold-400 py-2 font-medium"
          >
            {link.label}
          </a>
        ))}
        <a
          href={whatsappLink(WA_MESSAGES.mobileMenu)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-gold-500 bg-gold-500/20 text-gold-400 font-bold text-center block"
        >
          <i className="fab fa-whatsapp text-base me-2"></i> Contactar por WhatsApp
        </a>
      </div>
    </header>
  );
}
