import { CREDIT } from '../config/site';
import { formatNumber } from './format';

// Cuota fija mensual = capital * (1 + tasaMensual * cuotas) / cuotas
export function calculateInstallment(amount, months, annualRate = CREDIT.annualRate) {
  const monthlyRate = annualRate / 12;
  return (amount * (1 + monthlyRate * months)) / months;
}

export function getDisplayName(name) {
  const trimmed = name.trim();
  return trimmed ? trimmed : 'Socio FINIX';
}

export function buildCreditMessage({ name, amount, months, installment }) {
  return `Hola FINIX Center! Mi nombre es ${getDisplayName(name)}. Quisiera solicitar mi crédito de $${formatNumber(amount)} en ${months} cuotas fijas estimadas de $${formatNumber(Math.round(installment))}.`;
}
