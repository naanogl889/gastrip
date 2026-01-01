
import React from 'react';

interface InputSectionProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  unit: string;
  icon: React.ReactNode;
  step?: string;
  onHelp?: () => void;
  helpLoading?: boolean;
  helpText?: string;
}

export const InputField: React.FC<InputSectionProps> = ({ 
  label, value, onChange, unit, icon, step = "0.01", onHelp, helpLoading, helpText 
}) => {
  return (
    <div className="flex flex-col gap-2.5 group">
      <div className="flex justify-between items-end">
        <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-all">
          <span className="opacity-60 group-focus-within:opacity-100">{icon}</span>
          {label}
        </label>
        {onHelp && (
          <button 
            onClick={onHelp}
            disabled={helpLoading}
            className="text-[10px] font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-all bg-indigo-50 dark:bg-indigo-950/30 px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50"
          >
            {helpLoading ? (
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : "✨ " + helpText}
          </button>
        )}
      </div>
      <div className="relative">
        // Dentro de InputField (o el componente que uses para los inputs numéricos)

        <input
          type="text"             // ← importante: TEXT, no number
          inputMode="decimal"     // ← para que en móvil salga teclado numérico con separador
          value={value}           // value viene de props
          onChange={(e) => onChange(e.target.value)}  // ← pasar SIEMPRE string al padre
          className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 font-bold"
        />

        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
          <span className="text-slate-400 dark:text-slate-600 font-black text-xs uppercase tracking-tighter">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
};
