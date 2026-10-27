import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Hammer, ShieldCheck, CheckCircle2, Phone, Building2 } from 'lucide-react';
import cleaningImage from '../assets/images/pro_cleaning_service_1791501759015.jpg';
import heroImage from '../assets/images/hero_construction_1791499952212.jpg';
import { Language } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface HomePageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onOpenDirectCall: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onNavigate,
  onOpenDirectCall,
}) => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-slate-50 text-slate-900 overflow-hidden flex flex-col justify-between selection:bg-amber-200">
      
      {/* Subtle Ambient Background Motion - Soft Light Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft warm amber glow top center */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-amber-200/50 blur-[120px] rounded-full"
        />

        {/* Soft slate/sky glow bottom right */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute -bottom-24 right-0 w-[550px] h-[400px] bg-blue-100/60 blur-[130px] rounded-full"
        />

        {/* Subtle architectural grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content Container - Minimal & Clean */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 flex-grow flex flex-col justify-center">
        
        {/* Animated Top Region Pill */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-xs font-semibold tracking-wide text-slate-700 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span className="uppercase text-amber-700 font-bold tracking-wider">
              {language === 'es' ? 'COBERTURA REGIONAL' : 'REGIONAL DISPATCH'}
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-600 hidden sm:inline">
              Jersey City · New Jersey · Philadelphia · New York · New York City
            </span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle with Staggered Motion */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-4"
          >
            {language === 'es' ? (
              <>
                Limpieza y Construcción <br className="hidden sm:inline" />
                <span className="text-amber-600">
                  Verificada y Sin Intermediarios
                </span>
              </>
            ) : (
              <>
                Verified Cleaning & <br className="hidden sm:inline" />
                <span className="text-amber-600">
                  Construction Services
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto leading-relaxed"
          >
            {language === 'es'
              ? 'Conectamos a propietarios directamente con personal de limpieza calificado y contratistas con licencia. Escoja su servicio.'
              : 'Direct connections to vetted cleaning teams and licensed construction builders. Transparent pricing, zero broker markups.'}
          </motion.p>
        </div>

        {/* The Two Core Portals: Clean White Cards with Hover Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto w-full mb-10">
          
          {/* Card 1: Cleaning Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('cleaning')}
            className="group relative cursor-pointer rounded-2xl bg-white border border-slate-200/90 hover:border-amber-500/80 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs"
          >
            <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
              <img
                src={cleaningImage}
                alt="Cleaning Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 text-xs font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow-xs">
                01 · {language === 'es' ? 'LIMPIEZA' : 'CLEANING'}
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow bg-white">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-950 mb-2 group-hover:text-amber-700 transition-colors flex items-center justify-between">
                  <span>{language === 'es' ? 'Servicios de Limpieza' : 'Cleaning Services'}</span>
                  <span className="text-amber-600 group-hover:translate-x-1.5 transition-transform text-xl">→</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {language === 'es'
                    ? 'Limpieza profunda residencial, conserjería comercial y limpieza pesada post-construcción.'
                    : 'Residential turnover, recurring office janitorial, and post-construction dust extraction.'}
                </p>
                
                <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium">
                  <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {language === 'es' ? 'Residencial' : 'Residential'}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {language === 'es' ? 'Comercial' : 'Commercial'}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {language === 'es' ? 'Post-Construcción' : 'Post-Construction'}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-slate-950 transition-colors">
                <span>{language === 'es' ? 'Ver Servicios y Tarifas' : 'Explore Cleaning & Rates'}</span>
                <span className="text-amber-600">
                  {language === 'es' ? 'Reservar en Línea →' : 'Book Online →'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Construction Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('construction')}
            className="group relative cursor-pointer rounded-2xl bg-white border border-slate-200/90 hover:border-amber-500/80 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs"
          >
            <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
              <img
                src={heroImage}
                alt="Construction & Trades"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-xs">
                02 · {language === 'es' ? 'CONSTRUCCIÓN' : 'CONSTRUCTION'}
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow bg-white">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-950 mb-2 group-hover:text-amber-700 transition-colors flex items-center justify-between">
                  <span>{language === 'es' ? 'Construcción y Reformas' : 'Construction & Trades'}</span>
                  <span className="text-amber-600 group-hover:translate-x-1.5 transition-transform text-xl">→</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {language === 'es'
                    ? 'Contratistas generales con licencia para cocinas, baños, instalaciones eléctricas y plomería.'
                    : 'Licensed general contractors for turnkey renovations, licensed electrical, plumbing & HVAC.'}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium">
                  <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {language === 'es' ? 'Reformas Integrales' : 'Full Remodels'}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {language === 'es' ? 'Oficios Certificados' : 'Licensed Trades'}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {language === 'es' ? 'Adecuación Comercial' : 'Commercial Fit-Outs'}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-slate-950 transition-colors">
                <span>{language === 'es' ? 'Ver Disciplinas de Obra' : 'Explore Construction Scope'}</span>
                <span className="text-amber-600">
                  {language === 'es' ? 'Solicitar Presupuesto →' : 'Request Estimate →'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Minimal Action Strip: 3 Quick Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          <button
            onClick={() => onNavigate('ai-previews')}
            className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:border-amber-500/60 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'es' ? 'Vistas Previas 3D ($0.99)' : '$0.99 AI Concept Previews'}</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:border-amber-500/60 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Building2 className="w-3.5 h-3.5 text-slate-600" />
            <span>{language === 'es' ? 'Contactar para Reservar' : 'Contact Us to Book'}</span>
          </button>

          <button
            onClick={onOpenDirectCall}
            className="px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'es' ? 'Despacho Directo: (201) 555-0198' : 'Dispatch Desk: (201) 555-0198'}</span>
          </button>
        </motion.div>

      </div>

      {/* Clean Bottom Trust Bar */}
      <div className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-md py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {language === 'es'
                ? 'Licencias Estatales y Seguro de Responsabilidad Verificados'
                : 'Verified State Licenses & Liability Insurance'}
            </span>
          </div>

          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              {language === 'es'
                ? 'Personal de Limpieza Local con Antecedentes Verificados'
                : 'Background-Checked Local Cleaners'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <span>
              {language === 'es'
                ? 'Despacho Directo en NJ, Filadelfia y NY'
                : 'Direct Dispatch Across NJ, PHL & NY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
