# FINIX Center

Sitio web de **FINIX Center** (soluciones financieras y créditos). Hecho con **React + Vite + Tailwind CSS**, preparado para **Firebase** y para publicarse en **Vercel**.

## Estructura

```
finix-center/
├── index.html              Entrada de Vite (fuentes y <div id="root">)
├── package.json            Dependencias y scripts
├── vite.config.js          Configuración de Vite
├── tailwind.config.js      Colores dorados, fuentes y sombras de la marca
├── postcss.config.js
├── vercel.json             Configuración de despliegue en Vercel
├── firebase.json           Apunta a las reglas de Firestore
├── firestore.rules         Reglas de seguridad de Firestore
├── .env.example            Plantilla de variables de entorno
├── public/                 Logos SVG originales (sin modificar)
└── src/
    ├── main.jsx            Punto de entrada de React
    ├── App.jsx             Arma la página completa
    ├── index.css           Estilos (tema claro/oscuro, vidrio, animaciones)
    ├── components/         Navbar, Hero, CreditSimulator, CoverageBar, AppMobile,
    │                       AboutUs, Benefits, ExchangeRates, Footer, LoginModal,
    │                       VortexCanvas (fondo animado), Reveal (animación al scroll)
    ├── config/site.js      WhatsApp, tasa del simulador, plazos, cotización por defecto
    ├── hooks/              useTheme, useExchangeRates
    ├── utils/              Cálculo de cuotas y formato de números
    └── firebase/           config.js, firestore.js, auth.js
```

## Probarlo en local (Visual Studio Code)

Requisito: [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev
```

Abrí la dirección que muestra la terminal (normalmente http://localhost:5173).

Otros comandos:

```bash
npm run build     # genera la carpeta dist/ para producción
npm run preview   # prueba localmente el resultado de build
```

El sitio funciona **sin Firebase** (usa los valores por defecto). Firebase se activa al completar las variables de entorno.

## Dónde cambiar los datos del negocio

Todo está en `src/config/site.js`:

- Número de WhatsApp y mensajes predefinidos
- Tasa anual del simulador (`CREDIT.annualRate`), montos mínimo/máximo y plazos
- Cotización del dólar por defecto

## Conectar Firebase

1. En la [consola de Firebase](https://console.firebase.google.com) creá un proyecto y agregá una **app web**. Copiá los datos de configuración.
2. Copiá `.env.example` como `.env.local` y completá los valores `VITE_FIREBASE_*`.
3. Activá **Firestore Database** y, para los portales de ingreso, **Authentication > Correo y contraseña**.
4. Publicá las reglas de seguridad: pegá el contenido de `firestore.rules` en *Firestore > Reglas*, o usá `firebase deploy --only firestore:rules` con Firebase CLI.

### Qué hace hoy la integración

| Función | Cómo se usa |
|---|---|
| **Cotización del dólar editable** | Creá en Firestore el documento `config/exchangeRates` con dos campos numéricos: `buy` (compra) y `sell` (venta). La web los muestra en lugar de los valores por defecto. Solo el personal puede editarlos. |
| **Guardar solicitudes de crédito** (opcional) | Poné `VITE_SAVE_CREDIT_REQUESTS=true`. Cada clic en "Solicitar Crédito por WhatsApp" guarda nombre, monto, cuotas y valor de cuota en la colección `creditRequests`. Solo el personal puede leerlas. |
| **Ingreso de socios y colaboradores** | `src/firebase/auth.js` ya tiene `loginWithEmail`, `logout`, `subscribeToAuth` y `getUserRole`. El modal "Acceso al Sistema" todavía muestra los mismos avisos que antes; conectalos en `handleSelectProfile` (`src/App.jsx`). |

Los roles se guardan en `users/{uid}` con el campo `role` (`"socio"` o `"colaborador"`). Se crean a mano desde la consola de Firebase.

## Publicar en Vercel

1. Subí el proyecto a GitHub (ver abajo).
2. En [vercel.com](https://vercel.com) elegí **Add New > Project** e importá el repositorio. Vercel detecta Vite solo.
3. En **Settings > Environment Variables** cargá las mismas variables de `.env.example`.
4. **Deploy**. Cada `git push` a `main` vuelve a publicar.
5. Si usás Firebase Auth, agregá el dominio `*.vercel.app` (y tu dominio propio) en *Authentication > Configuración > Dominios autorizados*.

## Reemplazar los archivos del repositorio en GitHub

Desde la carpeta de tu clon local del repo `FINIX-center`:

1. Borrá los archivos viejos: `index.html`, `README.md` y los cuatro `finixlogo-*.svg` de la raíz.
2. Copiá dentro todo el contenido de este proyecto (incluidos los archivos ocultos `.gitignore` y `.env.example`).
3. Subí los cambios:

```bash
git add -A
git commit -m "Migración a React + Vite + Tailwind, preparado para Firebase y Vercel"
git push
```

Los logos ahora viven en `public/` y se usan como `/finixlogo-horizontal.svg`.
