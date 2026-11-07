// Datos del negocio y parámetros del sitio.
// Todo lo que antes estaba "suelto" en el HTML se concentra acá.

export const WHATSAPP_NUMBER = '5493834709315';
export const WHATSAPP_DISPLAY = '+54 9 3834 709315';

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WA_MESSAGES = {
  nav: 'Hola FINIX Center, quisiera consultar por sus servicios financieros.',
  mobileMenu: 'Hola FINIX Center, quisiera información sobre créditos.',
  app: 'Hola, quisiera el link de descarga de la App FINIX Center',
  exchange: 'Hola FINIX Center, quisiera consultar por la cotización de dólares del día.',
};

// Parámetros del simulador de crédito (mismos valores del sitio original)
export const CREDIT = {
  annualRate: 0.58, // 58% anual, sistema de cuota fija
  minAmount: 100000,
  maxAmount: 5000000,
  step: 50000,
  defaultAmount: 500000,
  defaultMonths: 12,
  monthOptions: [6, 12, 18, 24],
};

// Cotización del dólar por defecto. Si Firebase está configurado y existe el
// documento config/exchangeRates en Firestore, se usa ese valor en su lugar.
export const DEFAULT_EXCHANGE_RATES = { buy: 1185, sell: 1215 };

// Guardar solicitudes de crédito en Firestore (desactivado por defecto)
export const SAVE_CREDIT_REQUESTS = import.meta.env.VITE_SAVE_CREDIT_REQUESTS === 'true';
