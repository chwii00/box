import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; isPrefix: boolean }> = {
  CLP: { symbol: '$', rate: 1050, isPrefix: true },
  EUR: { symbol: '€', rate: 1, isPrefix: false },
  USD: { symbol: '$', rate: 1.08, isPrefix: true },
};

export const formatPrice = (baseEurPrice: number, currency: Currency): string => {
  const { symbol, rate, isPrefix } = CURRENCY_RATES[currency];
  const converted = baseEurPrice * rate;

  if (currency === 'CLP') {
    // Round to thousands or nearest 990 for authentic retail look
    const rounded = Math.round(converted / 100) * 100;
    const formatted = rounded.toLocaleString('es-CL');
    return `${symbol}${formatted}`;
  }

  const formatted = converted.toFixed(2).replace('.', ',');
  return isPrefix ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
};

export const formatInstallments = (baseEurPrice: number, currency: Currency, count: number = 3): string => {
  const { symbol, rate, isPrefix } = CURRENCY_RATES[currency];
  const perInstallment = (baseEurPrice * rate) / count;

  if (currency === 'CLP') {
    const rounded = Math.round(perInstallment);
    return `${count} cuotas sin interés de ${symbol}${rounded.toLocaleString('es-CL')}`;
  }

  const formatted = perInstallment.toFixed(2).replace('.', ',');
  return isPrefix
    ? `${count} cuotas sin interés de ${symbol}${formatted}`
    : `${count} cuotas sin interés de ${formatted} ${symbol}`;
};
