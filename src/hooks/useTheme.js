import { useCallback, useEffect, useState } from 'react';

// Tema claro / oscuro. Arranca en oscuro, igual que el sitio original,
// y aplica la clase "dark" o "light" sobre <html> (las variables CSS dependen de eso).
export default function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    []
  );

  return { theme, isDark: theme === 'dark', toggleTheme };
}
