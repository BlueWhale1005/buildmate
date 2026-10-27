import React from 'react';
import { X, Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { Language } from '../i18n/translations';

interface DirectCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigateToForm: () => void;
}

export const DirectCallModal: React.FC<DirectCallModalProps> = ({
  isOpen,
  onClose,
  language,
  onNavigateToForm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-lg w-full border border-slate-300 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              {language === 'es' ? 'Línea de Despacho Directo' : 'Direct Dispatch Line'}
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {language === 'es' ? 'Hable Directamente con BuildMate' : 'Speak Directly with BuildMate Dispatch'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            {language === 'es'
              ? 'Brindamos atención confiable y transparente. Al llamar, se comunica directamente con nuestro equipo de coordinación en New Jersey, Filadelfia y New York, sin contestadores automáticos.'
              : 'We provide dependable, honest help. When you call, you speak directly with local BuildMate dispatch across New Jersey, Philadelphia, and New York—not a robotic call center.'}
          </p>

          {/* Big Tap to Call Box */}
          <div className="bg-slate-50 border border-slate-900 p-6 text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {language === 'es' ? 'Número de Despacho BuildMate' : 'BuildMate Dispatch Number'}
            </div>
            <a
              href="tel:2015550198"
              className="text-3xl font-extrabold text-slate-950 hover:text-amber-600 block transition-colors tracking-tight"
            >
              (201) 555-0198
            </a>
            <div className="text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>{language === 'es' ? 'Líneas activas · Despacho de emergencias 24/7' : 'Lines open · Emergency dispatch available 24/7'}</span>
            </div>

            <div className="pt-3">
              <a
                href="tel:2015550198"
                className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{language === 'es' ? 'Tocar para Llamar Ahora' : 'Tap to Call Now'}</span>
              </a>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{language === 'es' ? 'Consultas de Rutina: Lun – Sáb, 7:00 AM – 7:00 PM EST' : 'Routine Consultations: Mon – Sat, 7:00 AM – 7:00 PM EST'}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'es'
                  ? 'Atención directa para presupuestos de limpieza, remodelación y oficios con licencia'
                  : 'Direct access for quotes, cleaning inquiries & licensed trades'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                {language === 'es'
                  ? 'Cobertura en Jersey City, New Jersey, Filadelfia y New York City'
                  : 'Covering Jersey City, New Jersey, Philadelphia & New York City'}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {language === 'es' ? '¿Prefiere que le escribamos?' : 'Prefer we contact you instead?'}
            </span>
            <button
              onClick={() => {
                onClose();
                onNavigateToForm();
              }}
              className="text-xs font-bold text-amber-700 hover:underline cursor-pointer"
            >
              {language === 'es' ? 'Completar Formulario de Consulta →' : 'Fill out Contact Query Form →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
