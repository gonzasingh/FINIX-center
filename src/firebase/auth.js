import { firebaseApp, isFirebaseConfigured } from './config';

// Servicio de autenticación listo para conectar a los portales
// "Soy Socio" y "Soy Colaborador" (ver src/App.jsx > handleSelectProfile).
// Se carga bajo demanda, igual que Firestore.

let authPromise = null;

function getAuthInstance() {
  if (!isFirebaseConfigured) return Promise.resolve(null);
  if (!authPromise) {
    authPromise = import('firebase/auth').then(({ getAuth }) => getAuth(firebaseApp));
  }
  return authPromise;
}

export async function loginWithEmail(email, password) {
  const auth = await getAuthInstance();
  if (!auth) throw new Error('Firebase no está configurado.');
  const { signInWithEmailAndPassword } = await import('firebase/auth');
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function logout() {
  const auth = await getAuthInstance();
  if (!auth) return;
  const { signOut } = await import('firebase/auth');
  await signOut(auth);
}

// Devuelve una función para cancelar la suscripción.
export async function subscribeToAuth(callback) {
  const auth = await getAuthInstance();
  if (!auth) {
    callback(null);
    return () => {};
  }
  const { onAuthStateChanged } = await import('firebase/auth');
  return onAuthStateChanged(auth, callback);
}

// Lee el rol ("socio" | "colaborador") del documento users/{uid}.
export async function getUserRole(uid) {
  const auth = await getAuthInstance();
  if (!auth) return null;
  const { getFirestore, doc, getDoc } = await import('firebase/firestore');
  const snap = await getDoc(doc(getFirestore(firebaseApp), 'users', uid));
  return snap.exists() ? snap.data().role ?? null : null;
}
