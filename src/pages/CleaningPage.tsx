import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Phone, ArrowLeft, Send, Clock } from 'lucide-react';
import cleaningImage from '../assets/images/pro_cleaning_service_1791501759015.jpg';
import { Language } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface CleaningPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onOpenDirectCall: () => void;
}

export const CleaningPage: React.FC<CleaningPageProps> = ({
  language,
  onNavigate,
  onOpenDirectCall,
}) => {
  const [selectedService, setSelectedService] = useState('Residential Deep Cleaning');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [urgency, setUrgency] = useState<'routine' | 'urgent'>('routine');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
          serviceCategory: `Cleaning: ${selectedService}`,
          message: `Location: ${address || 'Not specified'}. Details: ${message || 'Standard service requested.'}`,
          userType: 'homeowner',
          urgency,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not send your inquiry. Please try again.');
      }
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not send your inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header & Breadcrumb */}
      <div className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={cleaningImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'es'
                ? 'DIVISIÓN DE LIMPIEZA PROFESIONAL'
                : 'PROFESSIONAL CLEANING DIVISION'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {language === 'es'
              ? 'Servicios de Limpieza Residencial y Comercial'
              : 'Residential & Commercial Cleaning Services'}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'es'
              ? 'Personal de limpieza verificado, con verificación de antecedentes y suministros profesionales. Cobertura en Jersey City, New Jersey, Filadelfia, New York y New York City.'
              : 'Vetted, background-checked cleaners with commercial supplies and transparent pricing. Active dispatch across Jersey City, New Jersey, Philadelphia, New York & New York City.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote-form"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-colors"
            >
              {language === 'es' ? 'Solicitar Presupuesto' : 'Book Cleaning / Get Quote'}
            </a>
            <button
              onClick={onOpenDirectCall}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-wide transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>(201) 555-0198</span>
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quality Standards Guarantee */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 mb-16 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
              {language === 'es' ? 'GARANTÍA DE CALIDAD' : 'THE BUILDMATE STANDARD'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              {language === 'es'
                ? 'Profesionales de Confianza para su Espacio'
                : 'Thoroughly Vetted Professionals You Can Trust'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {language === 'es'
                ? 'Cada limpiador en la red de BuildMate pasa por verificación de antecedentes penales, confirmación de referencias y evaluación de técnica con equipos comerciales. Traemos nuestros propios suministros y garantizamos su completa satisfacción.'
                : 'Every cleaner on the BuildMate network undergoes strict background verification, professional reference screening, and hands-on skill verification with commercial equipment. We arrive on time, bring our own supplies, and stand by our 100% satisfaction guarantee.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'es' ? '100% Antecedentes Verificados' : '100% Background Checked'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'es' ? 'Suministros Ecológicos Disponibles' : 'Eco-Friendly Supplies Available'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'es' ? 'Garantía de Llegada Puntual' : 'On-Time Arrival Guarantee'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Instant Quote Form */}
        <div id="quote-form" className="bg-white border border-slate-200 p-8 sm:p-12 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-slate-950 mb-2">
            {language === 'es' ? 'Solicite su Presupuesto de Limpieza' : 'Book Cleaning or Request Estimate'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-8">
            {language === 'es'
              ? 'Complete el formulario para recibir una cotización directa y rápida sin intermediarios.'
              : 'Fill out this brief form to receive direct dispatch confirmation and a firm quote.'}
          </p>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-lg font-bold text-slate-950 mb-1">
                {language === 'es' ? '¡Solicitud Recibida!' : 'Inquiry Received!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                {language === 'es'
                  ? 'Nuestro equipo de despacho se comunicará con usted en breve para confirmar horarios y detalles.'
                  : 'Our regional dispatch coordinator will contact you shortly with confirmed pricing and available slots.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'es' ? 'ej. María Rodríguez' : 'e.g. Sarah Jenkins'}
                    className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'es' ? 'Teléfono *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(201) 555-0100"
                    className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'es' ? 'Tipo de Servicio' : 'Cleaning Category'}
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                  >
                    <option value="Residential Deep Cleaning">
                      {language === 'es' ? 'Limpieza Residencial y de Mudanza' : 'Residential & Turnover Cleaning'}
                    </option>
                    <option value="Commercial & Office Janitorial">
                      {language === 'es' ? 'Limpieza Comercial y Oficinas' : 'Commercial & Office Janitorial'}
                    </option>
                    <option value="Post-Construction Site Polish">
                      {language === 'es' ? 'Limpieza Post-Construcción' : 'Post-Construction Site Polish'}
                    </option>
                    <option value="Move-In / Move-Out Sanitization">
                      {language === 'es' ? 'Sanitización Move-In / Move-Out' : 'Move-In / Move-Out Sanitization'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'es' ? 'Dirección o Ciudad (NJ / NY / PHL)' : 'Property Address / City (NJ / NY / PHL)'}
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={language === 'es' ? 'ej. Jersey City, Hoboken, Filadelfia, Manhattan...' : 'e.g. Jersey City, Hoboken, Philadelphia, Manhattan...'}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'es' ? 'Detalles o Requisitos Especiales' : 'Project Details / Special Instructions'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'es'
                      ? 'ej. Apartamento de 2 habitaciones, limpieza profunda de cocina, mascotas en el hogar...'
                      : 'e.g. 2-bedroom condo, heavy kitchen grease, pets in home, need service this Friday...'
                  }
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>
                  {submitting
                    ? (language === 'es' ? 'Enviando...' : 'Submitting...')
                    : (language === 'es' ? 'Enviar Solicitud de Presupuesto' : 'Submit Cleaning Request')}
                </span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
