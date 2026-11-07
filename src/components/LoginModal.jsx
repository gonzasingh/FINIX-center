import { useEffect } from 'react';

// MODAL DE ACCESO / INICIAR SESIÓN
// onSelectProfile recibe 'socio' o 'colaborador'.
export default function LoginModal({ open, onClose, onSelectProfile }) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="login-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 border border-gold-500/40 relative shadow-2xl">
        {/* Close Modal Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center text-sm"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400 text-xl mx-auto mb-3">
            <i className="fas fa-user-lock"></i>
          </div>
          <h3 id="login-modal-title" className="font-heading text-2xl font-bold theme-text-heading">
            Acceso al Sistema
          </h3>
          <p className="text-xs theme-text-muted mt-1">Seleccioná tu tipo de perfil para ingresar</p>
        </div>

        {/* Profile Type Selector Buttons */}
        <div className="space-y-4">
          {/* Socio Profile Access */}
          <button
            type="button"
            onClick={() => onSelectProfile('socio')}
            className="w-full p-4 rounded-2xl border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 hover:text-black theme-text-heading transition-all flex items-center gap-4 group text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 group-hover:bg-black group-hover:text-gold-400 flex items-center justify-center text-xl flex-shrink-0">
              <i className="fas fa-user text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-sm font-heading">Soy Socio</h4>
              <p className="text-xs theme-text-muted group-hover:text-black/80">
                Accedé a tus cuotas, saldos y solicitud de nuevos créditos
              </p>
            </div>
          </button>

          {/* Colaborador Profile Access */}
          <button
            type="button"
            onClick={() => onSelectProfile('colaborador')}
            className="w-full p-4 rounded-2xl border border-white/10 hover:border-gold-500/60 bg-black/40 hover:bg-white/5 theme-text-heading transition-all flex items-center gap-4 group text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-800 text-gray-300 group-hover:text-gold-400 flex items-center justify-center text-xl flex-shrink-0">
              <i className="fas fa-user-shield text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-sm font-heading">Soy Colaborador</h4>
              <p className="text-xs theme-text-muted">
                Acceso al sistema interno de gestión, evaluación y soporte
              </p>
            </div>
          </button>
        </div>

        <p className="text-[10px] text-center theme-text-muted mt-6">FINIX Center — Conexión Encriptada Segura</p>
      </div>
    </div>
  );
}
