import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface FlagSelectorProps {
  className?: string;
  showLabels?: boolean;
}

// Crisp Vector SVG Flags
const MexicoFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-black/20" viewBox="0 0 640 480" fill="none">
    <rect width="213.3" height="480" fill="#006847" />
    <rect x="213.3" width="213.3" height="480" fill="#FFFFFF" />
    <rect x="426.6" width="213.3" height="480" fill="#CE1126" />
    {/* Simplified Coat of Arms emblem */}
    <circle cx="320" cy="240" r="32" fill="#B8860B" opacity="0.9" />
    <circle cx="320" cy="240" r="22" fill="#006847" opacity="0.8" />
  </svg>
);

const UsaFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-black/20" viewBox="0 0 640 480" fill="none">
    <rect width="640" height="480" fill="#BB133E" />
    <path d="M0 36.9h640M0 110.8h640M0 184.6h640M0 258.5h640M0 332.3h640M0 406.2h640" stroke="#FFFFFF" strokeWidth="36.9" />
    <rect width="256" height="258.5" fill="#002147" />
    {/* Star pattern representation */}
    <circle cx="50" cy="40" r="6" fill="#FFFFFF" />
    <circle cx="128" cy="40" r="6" fill="#FFFFFF" />
    <circle cx="206" cy="40" r="6" fill="#FFFFFF" />
    <circle cx="89" cy="90" r="6" fill="#FFFFFF" />
    <circle cx="167" cy="90" r="6" fill="#FFFFFF" />
    <circle cx="50" cy="140" r="6" fill="#FFFFFF" />
    <circle cx="128" cy="140" r="6" fill="#FFFFFF" />
    <circle cx="206" cy="140" r="6" fill="#FFFFFF" />
    <circle cx="89" cy="190" r="6" fill="#FFFFFF" />
    <circle cx="167" cy="190" r="6" fill="#FFFFFF" />
    <circle cx="50" cy="230" r="6" fill="#FFFFFF" />
    <circle cx="128" cy="230" r="6" fill="#FFFFFF" />
    <circle cx="206" cy="230" r="6" fill="#FFFFFF" />
  </svg>
);

const ChinaFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-black/20" viewBox="0 0 640 480" fill="none">
    <rect width="640" height="480" fill="#DE2910" />
    {/* Large Yellow Star */}
    <polygon points="100,50 112,85 148,85 119,106 130,140 100,119 70,140 81,106 52,85 88,85" fill="#FFDE00" />
    {/* Small Stars */}
    <polygon points="180,40 184,52 196,52 186,60 190,72 180,64 170,72 174,60 164,52 176,52" fill="#FFDE00" />
    <polygon points="210,70 214,82 226,82 216,90 220,102 210,94 200,102 204,90 194,82 206,82" fill="#FFDE00" />
    <polygon points="210,120 214,132 226,132 216,140 220,152 210,144 200,152 204,140 194,132 206,132" fill="#FFDE00" />
    <polygon points="180,160 184,172 196,172 186,180 190,192 180,184 170,192 174,180 164,172 176,172" fill="#FFDE00" />
  </svg>
);

export const FlagSelector: React.FC<FlagSelectorProps> = ({
  className = '',
  showLabels = false,
}) => {
  const { language, setLanguage } = useLanguage();

  const flags: { code: Language; Icon: React.FC; label: string; title: string; short: string }[] = [
    { code: 'es', Icon: MexicoFlag, label: 'ES', title: 'México - Español (ES)', short: 'ES' },
    { code: 'en', Icon: UsaFlag, label: 'EN', title: 'USA - English (EN)', short: 'EN' },
    { code: 'zh', Icon: ChinaFlag, label: 'ZH', title: 'China - 中文 (ZH)', short: 'ZH' },
  ];

  return (
    <div
      className={`inline-flex items-center bg-zinc-950/90 border border-zinc-700/80 p-1 rounded-full shadow-lg gap-1 ${className}`}
      aria-label="Selector de idioma con banderas"
    >
      {flags.map((item) => {
        const isActive = language === item.code;
        const FlagComponent = item.Icon;
        return (
          <button
            key={item.code}
            onClick={() => setLanguage(item.code)}
            title={item.title}
            aria-label={`Seleccionar idioma ${item.title}`}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold transition-all duration-200 select-none cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-[#F36C21] to-[#D85100] text-white shadow-md shadow-[#F36C21]/40 scale-105 border border-amber-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/80'
            }`}
          >
            <FlagComponent />
            {showLabels ? (
              <span className="text-[11px] font-bold tracking-tight pr-0.5">{item.label}</span>
            ) : (
              <span className="text-[10px] uppercase tracking-wider font-extrabold pr-0.5">{item.short}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};
