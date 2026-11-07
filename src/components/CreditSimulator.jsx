import { useState } from 'react';
import { CREDIT, SAVE_CREDIT_REQUESTS, whatsappLink } from '../config/site';
import { saveCreditRequest } from '../firebase/firestore';
import { buildCreditMessage, calculateInstallment, getDisplayName } from '../utils/credit';
import { formatMoney } from '../utils/format';

const ACTIVE_MONTH_CLASSES =
  'py-1.5 rounded-lg border border-gold-500 text-[11px] font-bold theme-text-heading bg-gold-500/20 transition-all';
const INACTIVE_MONTH_CLASSES =
  'sim-field-bg py-1.5 rounded-lg border text-[11px] font-bold theme-text-muted hover:border-gold-500 transition-all';

export default function CreditSimulator() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(CREDIT.defaultAmount);
  const [months, setMonths] = useState(CREDIT.defaultMonths);

  const installment = calculateInstallment(amount, months);
  const whatsappHref = whatsappLink(buildCreditMessage({ name, amount, months, installment }));

  const handleRequest = () => {
    if (!SAVE_CREDIT_REQUESTS) return;
    // Registro opcional en Firestore. Nunca debe impedir que se abra WhatsApp.
    saveCreditRequest({ name: getDisplayName(name), amount, months, installment }).catch(() => {});
  };

  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-5 relative shadow-xl overflow-hidden border border-gold-500/40 max-w-md mx-auto">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700"></div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">Atención a Socios</span>
          <h3 className="font-heading text-lg font-bold theme-text-heading">Simulador de Crédito</h3>
        </div>
        <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xs">
          <i className="fas fa-calculator"></i>
        </div>
      </div>

      {/* Compact Simulator Controls */}
      <div className="space-y-3.5 text-xs">
        {/* Socio Name Input */}
        <div>
          <label
            htmlFor="hero-user-name"
            className="block text-[10px] font-semibold uppercase tracking-wider mb-1 theme-text-muted"
          >
            Nombre del Socio:
          </label>
          <input
            type="text"
            id="hero-user-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={80}
            placeholder="Ej: Emiliano Rodríguez"
            className="sim-field-bg w-full px-3 py-1.5 rounded-lg border theme-text-heading placeholder-gray-400 text-xs focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* Slider */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="hero-loan-amount"
              className="text-[10px] font-semibold uppercase tracking-wider theme-text-muted"
            >
              Monto solicitado:
            </label>
            <span className="text-gold-300 font-extrabold text-lg font-heading" id="hero-loan-text">
              {formatMoney(amount)}
            </span>
          </div>
          <input
            type="range"
            id="hero-loan-amount"
            min={CREDIT.minAmount}
            max={CREDIT.maxAmount}
            step={CREDIT.step}
            value={amount}
            onChange={(event) => setAmount(parseFloat(event.target.value))}
            className="sim-slider-track w-full accent-gold-500 rounded-lg h-1.5 cursor-pointer"
          />
          <div className="flex justify-between text-[9px] theme-text-muted font-medium mt-0.5">
            <span>$100.000</span>
            <span>$2.500.000</span>
            <span>$5.000.000</span>
          </div>
        </div>

        {/* Installment Grid */}
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider mb-1 theme-text-muted">
            Plazo en cuotas fijas:
          </span>
          <div className="grid grid-cols-4 gap-1.5" role="group" aria-label="Plazo en cuotas fijas">
            {CREDIT.monthOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMonths(option)}
                aria-pressed={months === option}
                className={months === option ? ACTIVE_MONTH_CLASSES : INACTIVE_MONTH_CLASSES}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Result Box */}
        <div className="sim-field-bg p-3 rounded-xl border text-center space-y-0.5">
          <span className="text-[9px] font-semibold theme-text-muted uppercase tracking-widest">
            Valor Cuota Mensual Estimada
          </span>
          <div className="text-xl font-extrabold text-gold-gradient font-heading" id="hero-monthly-result">
            {formatMoney(Math.round(installment))}
          </div>
          <p className="text-[9px] theme-text-muted">Cuotas fijas en pesos. Sujeto a aprobación crediticia.</p>
        </div>

        {/* WhatsApp Action */}
        <a
          id="hero-cta-btn"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleRequest}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-xs block text-center shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
        >
          <i className="fab fa-whatsapp text-sm me-1.5"></i> Solicitar Crédito por WhatsApp
        </a>
      </div>
    </div>
  );
}
