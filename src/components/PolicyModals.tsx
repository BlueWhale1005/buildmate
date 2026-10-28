import React from 'react';
import { X, ShieldCheck, Eye } from 'lucide-react';
import { Language } from '../i18n/translations';

interface PolicyModalProps {
  type: 'privacy' | 'accessibility' | null;
  language: Language;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, language, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-xl w-full max-h-[85vh] overflow-y-auto border border-slate-300 shadow-2xl">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            ) : (
              <Eye className="w-5 h-5 text-amber-600" />
            )}
            <h3 className="text-xl font-bold text-slate-950">
              {type === 'privacy'
                ? (language === 'es' ? 'Política de Privacidad' : 'Privacy Policy')
                : (language === 'es' ? 'Declaración de Accesibilidad' : 'Accessibility Statement')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200/50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {type === 'privacy' ? (
            language === 'es' ? (
              <>
                <p>
                  <strong>BuildMate</strong> está comprometido con la protección de su privacidad. Conectamos a propietarios con servicios de limpieza verificados y contratistas con licencia activa.
                </p>
                <h4 className="font-bold text-slate-900">Información que Recopilamos</h4>
                <p>
                  Solo recopilamos información enviada voluntariamente a través de nuestros formularios de contacto, llamadas directas o solicitudes de proyectos con IA (como nombre, teléfono, correo electrónico y especificaciones del inmueble).
                </p>
                <h4 className="font-bold text-slate-900">Trato y Pago Directo sin Intermediarios</h4>
                <p>
                  Los clientes contratan y pagan a los profesionales de limpieza y contratistas de forma directa. Nunca vendemos ni subastamos su número de teléfono a empresas de telemarketing. Sus datos solo se comparten con profesionales verificados que usted solicite.
                </p>
                <h4 className="font-bold text-slate-900">Contacto</h4>
                <p>
                  Para consultas sobre privacidad o eliminación de datos, escríbanos a <em>Info@buildmateusa.com</em> o llame al <em>(201) 555-0198</em>.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>BuildMate</strong> is committed to protecting your privacy. We connect property owners with verified local cleaning services and licensed contractors.
                </p>
                <h4 className="font-bold text-slate-900">Information We Collect</h4>
                <p>
                  We only collect information voluntarily submitted through our contact forms, direct calls, or AI project requests (such as name, phone number, email address, and project specifications).
                </p>
                <h4 className="font-bold text-slate-900">Direct Service Hiring & Payment</h4>
                <p>
                  Homeowners and commercial clients hire and pay service providers, cleaners, and contractors directly. We never sell or auction your phone number to third-party telemarketing brokers. Your project information is shared only with qualified local businesses you explicitly choose to engage with.
                </p>
                <h4 className="font-bold text-slate-900">Contact Us</h4>
                <p>
                  For questions regarding data privacy or to request removal of your details, please email us directly at <em>Info@buildmateusa.com</em> or call <em>(201) 555-0198</em>.
                </p>
              </>
            )
          ) : (
            language === 'es' ? (
              <>
                <p>
                  <strong>Declaración de Accesibilidad</strong>
                </p>
                <p>
                  Creemos que todas las personas—sin importar sus habilidades o conocimientos tecnológicos—deben tener un acceso ágil y sencillo a servicios de limpieza confiables y oficios de construcción.
                </p>
                <h4 className="font-bold text-slate-900">Diseñado para Toda la Comunidad</h4>
                <p>
                  Debido a que muchos propietarios, operarios y profesionales prefieren una comunicación directa y sin rodeos, nuestro sitio web está construido con tipografías de alto contraste, etiquetas claras, sin jerga técnica y con botones de llamada rápida en cada sección.
                </p>
                <h4 className="font-bold text-slate-900">Asistencia Telefónica Directa</h4>
                <p>
                  Si experimenta alguna dificultad para acceder al sitio, comuníquese directamente con nuestro equipo de despacho al <strong>(201) 555-0198</strong>. Con gusto le atenderemos por teléfono para presupuestos, servicios y visualizaciones en 3D.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Accessibility Statement</strong>
                </p>
                <p>
                  We believe that everyone—regardless of ability or technical background—should have effortless access to dependable cleaning, maintenance, trades, and small business services.
                </p>
                <h4 className="font-bold text-slate-900">Designed for Non-Technical Users</h4>
                <p>
                  Because many local business owners, cleaners, trade professionals, and residents prefer straightforward, direct communication, our website is built with large, high-contrast text, clear labels, zero technical jargon, and immediate tap-to-call phone access across every page.
                </p>
                <h4 className="font-bold text-slate-900">Direct Telephone Assistance</h4>
                <p>
                  If you experience any difficulty accessing any portion of this website, please call our management team directly at <strong>(201) 555-0198</strong>. We will happily assist you over the phone with quotes, service referrals, and AI visual previews.
                </p>
              </>
            )
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-950 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            {language === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
