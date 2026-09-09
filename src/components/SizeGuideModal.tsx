import React from 'react';
import { X, Ruler, Info } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const sizeTable = [
    { mx: '23', us: '5', fit: 'Ideal pie 22.8 - 23.2 cm' },
    { mx: '24', us: '6', fit: 'Ideal pie 23.8 - 24.2 cm' },
    { mx: '25', us: '7', fit: 'Ideal pie 24.8 - 25.2 cm' },
    { mx: '26', us: '8', fit: 'Ideal pie 25.8 - 26.2 cm' },
    { mx: '27', us: '9', fit: 'Ideal pie 26.8 - 27.2 cm' },
    { mx: '28', us: '10', fit: 'Ideal pie 27.8 - 28.2 cm' },
    { mx: '29', us: '11', fit: 'Ideal pie 28.8 - 29.2 cm' },
    { mx: '30', us: '12', fit: 'Ideal pie 29.8 - 30.2 cm' },
    { mx: '31', us: '13', fit: 'Ideal pie 30.8 - 31.2 cm' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#F36C21]/15 text-[#F36C21] border border-[#F36C21]/30">
              <Ruler className="w-3.5 h-3.5" />
              {t.sizeGuide.badge}
            </div>
            <h3 className="text-2xl font-black text-white">
              {t.sizeGuide.title}
            </h3>
            <p className="text-xs text-zinc-400">
              {t.sizeGuide.subtitle}
            </p>
          </div>

          {/* Size Chart Table */}
          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-1">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-900 text-[#FFB400] font-bold uppercase border-b border-zinc-800">
                <tr>
                  <th className="p-2.5">{t.sizeGuide.sizeMx}</th>
                  <th className="p-2.5">{t.sizeGuide.sizeUs}</th>
                  <th className="p-2.5">{t.sizeGuide.footMeasure}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300 font-mono">
                {sizeTable.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-900/50">
                    <td className="p-2.5 font-bold text-[#FFB400]">{row.mx} MX</td>
                    <td className="p-2.5">{row.us} US</td>
                    <td className="p-2.5 text-zinc-400">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measuring Instructions */}
          <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-2 text-xs">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#FFB400]" />
              {t.sizeGuide.howToMeasureTitle}
            </h4>
            <ol className="list-decimal list-inside text-zinc-300 space-y-1 pl-1">
              <li>{t.sizeGuide.step1}</li>
              <li>{t.sizeGuide.step2}</li>
              <li>{t.sizeGuide.step3}</li>
            </ol>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-[#F36C21] hover:bg-[#D85100] text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all"
          >
            {t.sizeGuide.understoodBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

