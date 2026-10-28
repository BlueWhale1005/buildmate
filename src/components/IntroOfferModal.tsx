import React, { useState } from 'react';
import { X, Sparkles, Upload, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';
import { Language } from '../i18n/translations';

interface IntroOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialRoomType?: string;
  onSuccess: (details: any) => void;
}

export const IntroOfferModal: React.FC<IntroOfferModalProps> = ({
  isOpen,
  onClose,
  language,
  initialRoomType = 'Kitchen',
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState(initialRoomType);
  const [style, setStyle] = useState('Modern Brownstone');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          serviceCategory: '02 AI Renovation Visual Concept ($0.99 Intro Offer)',
          userType: 'homeowner',
          urgency: 'routine',
          message: `$0.99 Intro Offer request for ${roomType} (${style}). File attached: ${uploadedFileName || 'Will send via SMS/email'}. Notes: ${notes}`,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not submit your request. Please try again.');
      }

      setSubmitted(true);
      onSuccess({ name, roomType, style });
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not submit your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-300 shadow-2xl">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-sm bg-amber-500 shrink-0" />
              {language === 'es' ? 'OFERTA DE LANZAMIENTO 3D' : 'INTRODUCTORY 3D OFFER'}
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {language === 'es' ? 'Preview Conceptual de Remodelación con IA ($0.99)' : '$0.99 AI Renovation Concept Preview'}
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {language === 'es'
                ? 'Visualización digital en 3D para ayudarle a planificar su espacio antes de comprometerse con grandes gastos de obra.'
                : 'Simple 3D design preview to help you visualize what is possible before committing to major construction expenditures.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-950">
              {language === 'es' ? '¡Solicitud de Concepto Recibida!' : '$0.99 Concept Request Queued!'}
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {language === 'es'
                ? `Hemos recibido su solicitud para ${roomType} (${style}). Nuestro equipo visual de BuildMate revisará sus fotos y le enviará sus renders conceptuales directamente a ${email || phone} en menos de 24 horas.`
                : `We received your request for ${roomType} (${style}). Our BuildMate visual team will review your photos and send your visual concept renders directly to ${email || phone} within 24 hours.`}
            </p>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-950 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                {language === 'es' ? 'Listo' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {error && <p className="border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
            <div className="bg-amber-50 border border-amber-200 p-4 text-xs text-slate-700 flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-950 font-bold block mb-0.5">
                  {language === 'es' ? 'Qué incluye la tarifa de $0.99:' : 'What the $0.99 covers:'}
                </strong>
                {language === 'es'
                  ? 'Incluye de 2 a 3 conceptos visuales generados a partir de su espacio actual, guía de materiales recomendados y costos estimados de mano de obra. Nota: Se trata de conceptos visuales rápidos de diseño con IA, no de planos arquitectónicos sellados para permisos.'
                  : 'Includes 2-3 visual concept previews generated from your space, material recommendations, and ballpark labor/material estimates for Jersey City. Note: This covers rapid AI visual concept previews, not stamped 3D architectural construction blueprints.'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  {language === 'es' ? 'Su Nombre *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'es' ? 'ej. María Gómez' : 'e.g. Sarah Jenkins'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  {language === 'es' ? 'Correo Electrónico *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  {language === 'es' ? 'Teléfono (para enlace SMS)' : 'Phone (for SMS Preview Link)'}
                </label>
                <input
                  type="tel"
                  placeholder="(201) 555-0100"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                  {language === 'es' ? 'Habitación o Espacio' : 'Room / Space'}
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                >
                  <option value="Kitchen">{language === 'es' ? 'Cocina' : 'Kitchen'}</option>
                  <option value="Bathroom">{language === 'es' ? 'Baño Principal' : 'Bathroom'}</option>
                  <option value="Living Room">{language === 'es' ? 'Sala de Estar / Salón' : 'Living Room'}</option>
                  <option value="Storefront / Retail Space">{language === 'es' ? 'Local Comercial / Tienda' : 'Storefront / Retail Space'}</option>
                  <option value="Commercial Office / Studio">{language === 'es' ? 'Oficina Comercial / Estudio' : 'Commercial Office / Studio'}</option>
                  <option value="Salon / Cafe Space">{language === 'es' ? 'Café o Salón de Belleza' : 'Salon / Cafe Space'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                {language === 'es' ? 'Estilo Estético Preferido' : 'Preferred Aesthetic Style'}
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
              >
                <option value="Modern Brownstone">
                  {language === 'es' ? 'Modern Brownstone (Ladrillo visto, madera cálida, herrajes mate)' : 'Modern Brownstone (Brick, warm wood, sleek fixtures)'}
                </option>
                <option value="Clean Contemporary">
                  {language === 'es' ? 'Contemporáneo Luminoso (Líneas limpias, cuarzo, minimalista)' : 'Clean Contemporary (Minimal, bright, quartz)'}
                </option>
                <option value="Industrial Loft">
                  {language === 'es' ? 'Loft Industrial (Negro mate, hormigón, materiales rústicos)' : 'Industrial Loft (Matte black, raw materials)'}
                </option>
                <option value="Cozy Scandinavian">
                  {language === 'es' ? 'Escandinavo Acogedor (Tonos neutros, pino claro, funcional)' : 'Cozy Scandinavian (Soft neutrals, pine, functional)'}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                {language === 'es' ? 'Subir Foto o Captura Actual' : 'Upload Current Photo or Video Frame'}
              </label>
              <label className="border-2 border-dashed border-slate-300 hover:border-slate-400 p-4 flex flex-col items-center justify-center cursor-pointer bg-slate-50 transition-colors">
                <Upload className="w-5 h-5 text-slate-400 mb-1" />
                <span className="text-xs font-medium text-slate-700">
                  {uploadedFileName
                    ? (language === 'es' ? `Adjuntado: ${uploadedFileName}` : `Attached: ${uploadedFileName}`)
                    : (language === 'es' ? 'Seleccionar foto desde su dispositivo' : 'Select photo from device')}
                </span>
                <span className="text-[10px] text-slate-500">JPG, PNG, HEIC</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                {language === 'es' ? '¿Peticiones o restricciones específicas?' : 'Any specific requests or constraints?'}
              </label>
              <textarea
                rows={2}
                placeholder={
                  language === 'es'
                    ? 'ej. Mantener ubicación de tuberías, preferencia por isla de cuarzo, presupuesto estimado...'
                    : 'e.g. Keep existing plumbing stack, prefer quartz island, max budget...'
                }
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 p-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{language === 'es' ? '100% Satisfacción Garantizada' : '100% Satisfaction Guarantee'}</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
              >
                {submitting
                  ? (language === 'es' ? 'Enviando...' : 'Submitting...')
                  : (language === 'es' ? 'Pedir Concepto por $0.99' : 'Claim $0.99 Intro Offer')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
