import { WA_MESSAGES, whatsappLink } from '../config/site';
import { formatMoneyDecimals } from '../utils/format';
import Reveal from './Reveal';

// COTIZACIÓN DEL DÓLAR. `rates` viene de useExchangeRates (valores por defecto o Firestore).
export default function ExchangeRates({ rates }) {
  return (
    <section id="cotizacion" className="py-14 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="zoom" className="glass-panel rounded-3xl p-6 sm:p-8 border border-gold-500/30">
          <div className="text-center mb-6">
            <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">Mercado Cambiario</span>
            <h3 className="font-heading text-2xl font-bold theme-text-heading mt-0.5">Compramos tus Dólares</h3>
            <p className="text-xs theme-text-muted">Cotización del día con la mejor tasa regional</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Compramos</p>
                <p className="text-2xl font-extrabold text-white font-heading mt-0.5">
                  {formatMoneyDecimals(rates.buy)}
                </p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-gold-500/30 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Vendemos</p>
                <p className="text-2xl font-extrabold text-white font-heading mt-0.5">
                  {formatMoneyDecimals(rates.sell)}
                </p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
                <i className="fas fa-arrow-up"></i>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <a
              href={whatsappLink(WA_MESSAGES.exchange)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <i className="fab fa-whatsapp text-sm"></i>
              <span>Consultar por operaciones en privado</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
