import { useEffect, useState } from 'react';
import { DEFAULT_EXCHANGE_RATES } from '../config/site';
import { fetchExchangeRates } from '../firebase/firestore';

// Devuelve la cotización del dólar. Muestra los valores por defecto de inmediato
// y los reemplaza por los de Firestore si están disponibles.
export default function useExchangeRates() {
  const [rates, setRates] = useState(DEFAULT_EXCHANGE_RATES);

  useEffect(() => {
    let cancelled = false;
    fetchExchangeRates()
      .then((remote) => {
        if (!cancelled && remote) setRates(remote);
      })
      .catch(() => {
        /* Sin conexión o sin permisos: se mantienen los valores por defecto */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return rates;
}
