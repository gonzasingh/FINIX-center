import { firebaseApp, isFirebaseConfigured } from './config';

// Firestore se carga bajo demanda (import dinámico) para no engordar
// el bundle inicial si Firebase no está configurado.
let dbPromise = null;

function getDb() {
  if (!isFirebaseConfigured) return Promise.resolve(null);
  if (!dbPromise) {
    dbPromise = import('firebase/firestore').then(({ getFirestore }) => getFirestore(firebaseApp));
  }
  return dbPromise;
}

/**
 * Lee la cotización del dólar desde Firestore: documento config/exchangeRates
 * con los campos numéricos { buy, sell }. Devuelve null si no hay Firebase
 * o el documento no existe / es inválido.
 */
export async function fetchExchangeRates() {
  const db = await getDb();
  if (!db) return null;

  const { doc, getDoc } = await import('firebase/firestore');
  const snap = await getDoc(doc(db, 'config', 'exchangeRates'));
  if (!snap.exists()) return null;

  const { buy, sell } = snap.data();
  if (typeof buy !== 'number' || typeof sell !== 'number') return null;
  return { buy, sell };
}

/**
 * Guarda una solicitud de crédito en la colección creditRequests.
 * Solo se llama si VITE_SAVE_CREDIT_REQUESTS=true.
 */
export async function saveCreditRequest({ name, amount, months, installment }) {
  const db = await getDb();
  if (!db) return false;

  const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
  await addDoc(collection(db, 'creditRequests'), {
    name: String(name).slice(0, 80),
    amount,
    months,
    installment: Math.round(installment),
    source: 'web',
    createdAt: serverTimestamp(),
  });
  return true;
}
