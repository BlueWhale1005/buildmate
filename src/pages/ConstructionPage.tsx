import React, { useState } from 'react';
import { Hammer, CheckCircle2, ShieldCheck, Phone, ArrowLeft, Send, Sparkles, Wrench, Building2, PaintBucket, HardHat, Check } from 'lucide-react';
import heroImage from '../assets/images/hero_construction_1791499952212.jpg';
import { Language } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface ConstructionPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onOpenDirectCall: () => void;
}

export const ConstructionPage: React.FC<ConstructionPageProps> = ({
  language,
  onNavigate,
  onOpenDirectCall,
}) => {
  const [selectedTrade, setSelectedTrade] = useState('General Remodeling');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [timeline, setTimeline] = useState('Within 1 month');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const constructionServices = [
    {
      id: 'general_remodel',
      title: language === 'es' ? 'Remodelaciones Generales de Viviendas' : 'General Contracting & Remodels',
      desc: language === 'es'
        ? 'Renovaciones integrales de cocinas, baños principales, aperturas de espacios y remodelación de casas históricas.'
        : 'Turnkey residential remodeling including kitchen expansions, master bath upgrades, wall removals, and brownstone restorations.',
      icon: HardHat,
      features: [
        language === 'es' ? 'Diseño de cocina, gabinetes e islas' : 'Custom kitchen cabinetry, countertops & islands',
        language === 'es' ? 'Duchas a ras de suelo y azulejos de lujo' : 'Curbless walk-in showers & luxury tile installation',
        language === 'es' ? 'Gestión completa de permisos y planos' : 'Permit expediting & architectural plans handling',
        language === 'es' ? 'Garantía por escrito de mano de obra' : 'Written labor & materials warranty included',
      ],
      tag: language === 'es' ? 'Licencia Estatal Verificada' : 'Licensed & Insured',
    },
    {
      id: 'licensed_trades',
      title: language === 'es' ? 'Oficios Mecánicos Certificados' : 'Licensed Electrical, Plumbing & HVAC',
      desc: language === 'es'
        ? 'Instalaciones y reparaciones por profesionales certificados para paneles de 200A, cableado, tuberías y climatización.'
        : 'Certified tradesmen for electrical service upgrades, whole-house repiping, boiler replacements, and heat pumps.',
      icon: Wrench,
      features: [
        language === 'es' ? 'Paneles eléctricos de 200A y recableado' : '200-Amp electrical service upgrades & EV chargers',
        language === 'es' ? 'Plomería en cobre y PEX con pruebas de presión' : 'Copper & PEX water lines with pressure certification',
        language === 'es' ? 'Sistemas mini-split y bombas de calor' : 'Ductless mini-split HVAC & furnace installations',
        language === 'es' ? 'Inspecciones y certificados para la ciudad' : 'City code sign-offs & safety certifications',
      ],
      tag: language === 'es' ? 'Mecánicos Certificados' : 'Master Tradesmen',
    },
    {
      id: 'finish_trades',
      title: language === 'es' ? 'Carpintería, Pisos y Acabados Finos' : 'Finish Carpentry, Flooring & Tile',
      desc: language === 'es'
        ? 'Instalación de pisos de madera noble, zócalos, molduras decorativas, drywall nivel 5 y pintura de alta durabilidad.'
        : 'Architectural trim work, engineered oak flooring, level-5 drywall finishing, zero-VOC coatings, and custom built-ins.',
      icon: PaintBucket,
      features: [
        language === 'es' ? 'Pisos de roble blanco y nivelación de contrapiso' : 'Hardwood subfloor leveling & precision laying',
        language === 'es' ? 'Molduras de techo y carpintería personalizada' : 'Crown moulding, wainscoting & architectural trim',
        language === 'es' ? 'Reparación de drywall y acabado liso' : 'Flawless level-5 smooth drywall skim coating',
        language === 'es' ? 'Pintura satinada de primera calidad' : 'Premium scuff-resistant architectural coatings',
      ],
      tag: language === 'es' ? 'Acabados de Precisión' : 'Fine Craftsmanship',
    },
    {
      id: 'commercial_fitouts',
      title: language === 'es' ? 'Adecuación Comercial y Tiendas' : 'Commercial Fit-Outs & Storefronts',
      desc: language === 'es'
        ? 'Construcción y acondicionamiento rápido para locales comerciales, oficinas corporativas, estudios y restaurantes.'
        : 'Rapid turnaround tenant improvements, retail display cases, ADA-compliant restrooms, and commercial flooring.',
      icon: Building2,
      features: [
        language === 'es' ? 'Vidrieras comerciales y accesibilidad ADA' : 'Storefront framing, glazing & ADA compliance',
        language === 'es' ? 'Aislamiento acústico e iluminación comercial' : 'Acoustic drop ceilings & commercial track lighting',
        language === 'es' ? 'Horarios nocturnos para minimizar interrupciones' : 'Off-hours & weekend construction scheduling',
        language === 'es' ? 'Cumplimiento estricto de códigos comerciales' : 'Full commercial building code adherence',
      ],
      tag: language === 'es' ? 'Entrega Rápida' : 'Fast-Track Handover',
    },
  ];

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
          serviceCategory: `Construction: ${selectedTrade}`,
          message: `Location: ${address || 'Not specified'}. Timeline: ${timeline}. Details: ${message || 'Construction estimate requested.'}`,
          userType: 'homeowner',
          urgency: 'routine',
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
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
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
            <Hammer className="w-3.5 h-3.5" />
            <span>
              {language === 'es'
                ? 'DIVISIÓN DE CONSTRUCCIÓN Y OFICIOS'
                : 'LICENSED CONSTRUCTION & TRADES DIVISION'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {language === 'es'
              ? 'Construcción, Remodelaciones y Oficios con Licencia'
              : 'Licensed Construction & Remodeling Services'}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {language === 'es'
              ? 'Conéctese directamente con contratistas generales verificados con licencia activa y seguro de responsabilidad civil. Cobertura en Jersey City, New Jersey, Filadelfia, New York y New York City.'
              : 'Direct access to state-licensed general contractors, master electricians, plumbers, and carpenters with active liability insurance and zero broker commissions.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote-form"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-colors"
            >
              {language === 'es' ? 'Solicitar Cotización de Obra' : 'Request Construction Estimate'}
            </a>
            <button
              onClick={() => onNavigate('ai-previews')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-wide transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'es' ? 'Probar Conceptos con IA ($0.99)' : '$0.99 AI Concept Previews'}</span>
            </button>
            <button
              onClick={onOpenDirectCall}
              className="px-5 py-3 border border-slate-700 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>(201) 555-0198</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900 pt-8 mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {language === 'es' ? 'Capacidades de Construcción' : 'Construction Disciplines'}
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            {language === 'es'
              ? 'Desde reformas completas hasta oficios especializados, todos los trabajos cumplen con los códigos locales de edificación.'
              : 'From complete architectural renovations to individual trades, every project is executed to local building codes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {constructionServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-slate-950 text-white flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="#quote-form"
                    onClick={() => setSelectedTrade(service.title)}
                    className="text-xs font-bold text-slate-950 hover:text-amber-700 transition-colors uppercase tracking-wider"
                  >
                    {language === 'es' ? 'Cotizar Este Proyecto →' : 'Request Estimate for This →'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Step Process */}
        <div className="bg-slate-950 text-white p-8 sm:p-12 mb-16 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">
              {language === 'es' ? 'PROCESO TRANSPARENTE' : 'TRANSPARENT CONTRACTOR WORKFLOW'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              {language === 'es' ? 'Cómo Funciona su Proyecto' : 'How Your Project Gets Built'}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {language === 'es'
                ? 'Un camino claro desde la idea inicial hasta la entrega final sin sorpresas presupuestarias.'
                : 'A structured, professional pathway from initial concept to certified final inspection.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 p-6 border border-slate-800">
              <span className="text-amber-400 font-mono text-sm font-bold block mb-2">
                {language === 'es' ? 'PASO 01' : 'STEP 01'}
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                {language === 'es' ? 'Alcance y Diseño' : 'Scope & Design'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'es'
                  ? 'Defina sus necesidades, verifique dimensiones y obtenga costos aproximados de materiales o previews 3D por $0.99.'
                  : 'Define your wishlist, verify dimensions, and get realistic material ballpark costs or $0.99 3D AI previews.'}
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 border border-slate-800">
              <span className="text-amber-400 font-mono text-sm font-bold block mb-2">
                {language === 'es' ? 'PASO 02' : 'STEP 02'}
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                {language === 'es' ? 'Asignación de Contratista' : 'Licensed Match'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'es'
                  ? 'Conéctese con constructores verificados con licencia estatal vigente y seguro de responsabilidad mínima de $1M.'
                  : 'Connect with verified contractors carrying active state licensing and minimum $1M general liability insurance.'}
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 border border-slate-800">
              <span className="text-amber-400 font-mono text-sm font-bold block mb-2">
                {language === 'es' ? 'PASO 03' : 'STEP 03'}
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                {language === 'es' ? 'Inspección y Cumplimiento' : 'Code Completion'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'es'
                  ? 'Inspecciones periódicas por fases, aprobación municipal y entrega final con garantía escrita por mano de obra.'
                  : 'Milestone-based progress inspections, municipal sign-off, and final handover with written craftsmanship warranty.'}
              </p>
            </div>
          </div>
        </div>

        {/* Construction Estimate Form */}
        <div id="quote-form" className="bg-white border border-slate-200 p-8 sm:p-12 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-slate-950 mb-2">
            {language === 'es' ? 'Solicite su Presupuesto de Construcción' : 'Request Construction Estimate'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-8">
            {language === 'es'
              ? 'Describa su proyecto para que un contratista general verificado coordine una visita o propuesta detallada.'
              : 'Provide your project details to coordinate a site evaluation and itemized proposal from licensed builders.'}
          </p>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-lg font-bold text-slate-950 mb-1">
                {language === 'es' ? '¡Proyecto Recibido!' : 'Project Submitted Successfully!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                {language === 'es'
                  ? 'Nuestro coordinador de proyectos se pondrá en contacto para revisar planos o programar una visita técnica.'
                  : 'Our regional construction coordinator will review your scope and contact you to schedule an initial consultation.'}
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
                    placeholder={language === 'es' ? 'ej. Carlos Mendoza' : 'e.g. Alex Morgan'}
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
                    {language === 'es' ? 'Tipo de Obra' : 'Project Category'}
                  </label>
                  <select
                    value={selectedTrade}
                    onChange={(e) => setSelectedTrade(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                  >
                    <option value="General Remodeling">
                      {language === 'es' ? 'Contratista General y Reformas' : 'General Contracting & Remodels'}
                    </option>
                    <option value="Kitchen Renovation">
                      {language === 'es' ? 'Remodelación de Cocina' : 'Kitchen Renovation'}
                    </option>
                    <option value="Bathroom Remodeling">
                      {language === 'es' ? 'Remodelación de Baño' : 'Bathroom Remodeling'}
                    </option>
                    <option value="Electrical Trades">
                      {language === 'es' ? 'Electricista con Licencia' : 'Licensed Electrical Trade'}
                    </option>
                    <option value="Plumbing Trades">
                      {language === 'es' ? 'Plomero con Licencia' : 'Licensed Plumbing Trade'}
                    </option>
                    <option value="Carpentry & Flooring">
                      {language === 'es' ? 'Carpintería, Pisos y Azulejos' : 'Carpentry, Flooring & Tile'}
                    </option>
                    <option value="Commercial Fit-Out">
                      {language === 'es' ? 'Adecuación de Local Comercial' : 'Commercial Storefront / Fit-Out'}
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    {language === 'es' ? 'Ubicación de la Propiedad' : 'Project City / Address'}
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
                    {language === 'es' ? 'Plazo Deseado' : 'Target Timeline'}
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2.5 text-sm focus:outline-none focus:border-slate-950"
                  >
                    <option value="Immediately (Emergency/Urgent)">
                      {language === 'es' ? 'De inmediato (Emergencia / Urgente)' : 'Immediately (Emergency/Urgent)'}
                    </option>
                    <option value="Within 1 month">
                      {language === 'es' ? 'En menos de 1 mes' : 'Within 1 month'}
                    </option>
                    <option value="1 - 3 months">
                      {language === 'es' ? 'De 1 a 3 meses' : '1 - 3 months'}
                    </option>
                    <option value="Planning / Budgeting Phase">
                      {language === 'es' ? 'Fase de planificación / presupuesto' : 'Planning / Budgeting Phase'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'es' ? 'Descripción del Proyecto y Metros' : 'Scope Description / Specifications'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'es'
                      ? 'ej. Reforma completa de cocina, derribo de tabique hacia el salón, instalación de isla de cuarzo y contrapiso nuevo...'
                      : 'e.g. Total kitchen gut remodel, open wall between living and kitchen, install quartz island, replace subfloor...'
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
                    : (language === 'es' ? 'Enviar Solicitud de Obra' : 'Submit Construction Estimate Request')}
                </span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
