import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ContactFormState } from '../types';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface ContactSectionProps {
  language: Language;
  initialServiceCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, initialServiceCategory }) => {
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    userType: 'homeowner',
    serviceCategory: initialServiceCategory || 'General Inquiry',
    urgency: 'routine',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg(language === 'es' ? 'Por favor ingrese su nombre.' : 'Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg(language === 'es' ? 'Por favor ingrese un teléfono o correo.' : 'Please enter either a phone number or email.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmissionSuccess(data);
        setFormData({
          name: '',
          phone: '',
          email: '',
          userType: 'homeowner',
          serviceCategory: 'General Inquiry',
          urgency: 'routine',
          message: '',
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please call us directly.');
      }
    } catch (err) {
      setErrorMsg(err instanceof Error
        ? err.message
        : (language === 'es' ? 'No pudimos enviar su consulta. Inténtelo de nuevo.' : 'We could not send your inquiry. Please try again.'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3 Quick Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* Card 1: Direct Phone */}
          <a
            href="tel:2015550198"
            className="group bg-white p-5 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 group-hover:bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                {language === 'es' ? 'Llamada Directa' : 'Direct Dispatch'}
              </div>
              <div className="text-base font-bold text-slate-950 group-hover:text-amber-700 transition-colors">
                (201) 555-0198
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {language === 'es' ? 'Lun–Sáb 7am–7pm · 24/7 Emergencias' : 'Mon–Sat 7am–7pm · 24/7 Emergency'}
              </div>
            </div>
          </a>

          {/* Card 2: Email */}
          <a
            href="mailto:Info@buildmateusa.com"
            className="group bg-white p-5 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                {language === 'es' ? 'Correo Electrónico' : 'Email Inquiries'}
              </div>
              <div className="text-base font-bold text-slate-950 group-hover:text-slate-800 transition-colors">
                Info@buildmateusa.com
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {language === 'es' ? 'Respuesta rápida en 2 horas' : 'Fast response within 2 hours'}
              </div>
            </div>
          </a>

          {/* Card 3: Regional Hub */}
          <div className="bg-white p-5 border border-slate-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                {language === 'es' ? 'Área de Cobertura' : 'Service Territory'}
              </div>
              <div className="text-base font-bold text-slate-950">
                NJ · Philadelphia · NYC
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                500 Washington Blvd, Jersey City
              </div>
            </div>
          </div>
        </div>

        {/* Form & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                {t.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {t.formDesc}
              </p>
            </div>

            {submissionSuccess ? (
              <div className="bg-emerald-50/60 border border-emerald-200 p-6 sm:p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-950">
                  {t.successTitle}
                </h4>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  {submissionSuccess.message || (language === 'es'
                    ? '¡Gracias! Su consulta se envió correctamente. Nuestro equipo de BuildMate se comunicará pronto.'
                    : 'Thank you! Your inquiry was sent successfully. Our BuildMate team will contact you shortly.')}
                </p>
                {submissionSuccess.referenceId && (
                  <div className="px-3 py-1.5 bg-white text-xs text-slate-600 border border-emerald-200 inline-block font-mono">
                    Ref ID: <strong className="text-slate-950">{submissionSuccess.referenceId}</strong>
                  </div>
                )}

                <div className="pt-3 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:2015550198"
                    className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{language === 'es' ? 'Llamar Directo: (201) 555-0198' : 'Call Direct: (201) 555-0198'}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmissionSuccess(null)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-950 underline cursor-pointer"
                  >
                    {language === 'es' ? 'Enviar otra solicitud' : 'Send Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t.nameLabel} <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'es' ? 'ej. Carlos Mendoza' : 'e.g. Alex Morgan'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-950 transition-colors"
                  />
                </div>

                {/* Phone & Email in 2 clean columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder="(201) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-950 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-950 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t.serviceCategoryLabel}
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-950 transition-colors"
                  >
                    <option value="Move-In / Move-Out Cleaning">
                      {language === 'es' ? 'Limpieza de Mudanza (Move-In / Move-Out)' : 'Move-In / Move-Out Cleaning'}
                    </option>
                    <option value="Deep Residential Cleaning">
                      {language === 'es' ? 'Limpieza Profunda Residencial' : 'Deep Residential Cleaning'}
                    </option>
                    <option value="Post-Construction Cleanup">
                      {language === 'es' ? 'Limpieza Post-Construcción' : 'Post-Construction Cleanup'}
                    </option>
                    <option value="Home & Apartment Remodeling">
                      {language === 'es' ? 'Remodelación de Casa o Apartamento' : 'Home & Apartment Remodeling'}
                    </option>
                    <option value="Licensed Trades (Electrical, Plumbing, Painting)">
                      {language === 'es' ? 'Oficios con Licencia (Electricidad, Plomería, Pintura)' : 'Licensed Trades (Electrical, Plumbing, Painting)'}
                    </option>
                    <option value="General Inquiry">
                      {language === 'es' ? 'Consulta General' : 'General Inquiry'}
                    </option>
                  </select>
                </div>

                {/* Project Details Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      language === 'es'
                        ? 'Dirección aproximada, tamaño del espacio o descripción de lo que necesita...'
                        : 'Approximate location, size of space, or what you need done...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-slate-950 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>{t.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Support & Dispatch Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Benefits Card */}
            <div className="bg-white p-6 border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{language === 'es' ? 'Garantía BuildMate' : 'The BuildMate Advantage'}</span>
              </h4>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      {language === 'es' ? 'Profesionales Verificados' : 'Vetted Professionals'}
                    </strong>
                    <span>
                      {language === 'es'
                        ? 'Equipos de limpieza evaluados y contratistas con licencia y póliza vigente.'
                        : 'Background-checked cleaning crews and licensed, insured trades.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      {language === 'es' ? 'Sin Recargos de Intermediarios' : 'Zero Middleman Markup'}
                    </strong>
                    <span>
                      {language === 'es'
                        ? 'Tarifas directas y transparentes con cotizaciones claras.'
                        : 'Direct and transparent pricing with clear itemized quotes.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">
                      {language === 'es' ? 'Respuesta y Despacho Rápido' : 'Fast Response & Dispatch'}
                    </strong>
                    <span>
                      {language === 'es'
                        ? 'Atención telefónica directa sin menús automáticos engorrosos.'
                        : 'Direct phone access without automated robotic menus.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Call Callout */}
            <div className="bg-slate-950 text-white p-6 border border-slate-900 shadow-xs">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'es' ? 'LÍNEA DE ATENCIÓN DIRECTA' : 'DIRECT LINE DISPATCH'}</span>
              </div>
              <h5 className="text-base font-bold mb-1">
                {language === 'es' ? '¿Necesita servicio de inmediato?' : 'Need immediate service?'}
              </h5>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {language === 'es'
                  ? 'Para limpiezas de emergencia, inspecciones urgentes o citas el mismo día, llámenos directamente.'
                  : 'For urgent cleaning, emergency trade visits, or same-day turnarounds, call directly.'}
              </p>
              <a
                href="tel:2015550198"
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(201) 555-0198</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
