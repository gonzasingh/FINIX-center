// Formato de números al estilo argentino (1.234.567 / 1.185,00)

export const formatNumber = (value) => Number(value).toLocaleString('es-AR');

export const formatMoney = (value) => `$${formatNumber(value)}`;

export const formatMoneyDecimals = (value) =>
  `$${Number(value).toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
