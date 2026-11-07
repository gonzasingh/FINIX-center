import { useCallback, useState } from 'react';
import AboutUs from './components/AboutUs';
import AppMobile from './components/AppMobile';
import Benefits from './components/Benefits';
import CoverageBar from './components/CoverageBar';
import ExchangeRates from './components/ExchangeRates';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoginModal from './components/LoginModal';
import Navbar from './components/Navbar';
import VortexCanvas from './components/VortexCanvas';
import useExchangeRates from './hooks/useExchangeRates';
import useTheme from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const rates = useExchangeRates();
  const [loginOpen, setLoginOpen] = useState(false);

  const openLogin = useCallback(() => setLoginOpen(true), []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  // TODO (Firebase Auth): reemplazar estos avisos por el flujo de ingreso real.
  // En src/firebase/auth.js ya están loginWithEmail, logout, subscribeToAuth y getUserRole.
  const handleSelectProfile = (profile) => {
    if (profile === 'socio') {
      alert('Redirigiendo al Portal Oficial de Socios de FINIX Center...');
    } else {
      alert('Redirigiendo al Sistema de Gestión Interno / CRM de FINIX Center...');
    }
  };

  return (
    <>
      {/* FONDO ANIMADO DE PARTÍCULAS */}
      <VortexCanvas />

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} onOpenLogin={openLogin} />

      <main>
        <Hero />
        <CoverageBar />
        <AppMobile />
        <AboutUs />
        <Benefits />
        <ExchangeRates rates={rates} />
      </main>

      <Footer />

      <LoginModal open={loginOpen} onClose={closeLogin} onSelectProfile={handleSelectProfile} />
    </>
  );
}
