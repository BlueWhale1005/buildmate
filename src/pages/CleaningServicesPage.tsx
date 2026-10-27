import React, { useEffect } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Check,
  Clock3,
  House,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { Language } from '../i18n/translations';
import { LanguageSwitch } from '../components/LanguageSwitch';
import cleaningImage from '../assets/images/pro_cleaning_service_1791501759015.jpg';

const copyByLanguage = {
  en: {
    hub: 'All services',
    contact: 'Contact BuildMate',
    eyebrow: 'Cleaning services',
    headline: 'A cleaner home or workspace, without the search.',
    intro: 'Tell us what needs cleaning and when. BuildMate connects homeowners and businesses with local cleaning professionals suited to their needs.',
    primary: 'Get a Cleaning Quote',
    secondary: 'Explore Services',
    heroNote: 'Local cleaning connections for homes and businesses',
    servicesEyebrow: 'Cleaning options',
    servicesTitle: 'Find the right kind of clean for your space.',
    residential: 'For Homeowners',
    residentialIntro: 'A refresh for everyday living, a deeper seasonal clean, or help preparing for a move.',
    residentialServices: ['Standard cleaning', 'Deep cleaning', 'Move-in / move-out cleaning', 'Recurring maintenance'],
    commercial: 'For Businesses',
    commercialIntro: 'Keep the spaces your team and customers use clean and ready for the day.',
    commercialServices: ['Office cleaning', 'Janitorial services', 'Retail and workspace sanitization'],
    addOns: 'Add-on Services',
    addOnsIntro: 'Ask about adding these details to your cleaning request.',
    addOnServices: ['Oven and refrigerator deep cleaning', 'Window washing', 'Carpet cleaning', 'Eco-friendly cleaning options'],
    quote: 'Request a Quote',
    processEyebrow: 'How it works',
    processTitle: 'Three steps to a cleaner space.',
    stepOneTitle: 'Tell Us What You Need',
    stepOneText: 'Share your property type and size, the kind of cleaning you need, and your preferred date.',
    stepTwoTitle: 'Get Matched with a Pro',
    stepTwoText: 'We review your request and connect you with an available local cleaner from our network. We confirm the details before you book.',
    stepThreeTitle: 'Enjoy a Spotless Space',
    stepThreeText: 'Confirm the schedule and payment details with your provider. If the cleaning misses the agreed scope, contact us and we will coordinate a re-clean with the provider.',
    trustEyebrow: 'Trust, safety and quality',
    trustTitle: 'Feel confident about who you invite in.',
    vettedTitle: 'Vetted local providers',
    vettedText: 'Our cleaning partners are reviewed before joining the network and background-checked before being matched with customers.',
    guaranteeTitle: 'A quality re-clean promise',
    guaranteeText: 'If a booked cleaning does not meet the agreed scope, let us know. We will coordinate a re-clean with your provider.',
    scheduleTitle: 'Scheduling that fits your life',
    scheduleText: 'Request a one-time clean or ask about recurring service options that fit your home or business.',
    reviewsEyebrow: 'Customer reviews',
    reviewsTitle: 'Real feedback from real bookings.',
    reviewsEmpty: 'Verified customer reviews will appear here as customers share feedback after completed bookings.',
    reviewsNote: 'Only reviews from confirmed bookings are featured.',
    finalEyebrow: 'Ready for a cleaner space?',
    finalTitle: 'Spend less time searching. Get matched with a local cleaner.',
    finalText: 'Tell us about your home or business and the service you need. We will help you connect with a cleaning provider in your area.',
    finalCta: 'Get a Cleaning Quote',
    footer: 'Local connections for cleaner spaces.',
    rights: '© 2026 BuildMate. All rights reserved.',
  },
  es: {
    hub: 'Todos los servicios',
    contact: 'Contacte a BuildMate',
    eyebrow: 'Servicios de limpieza',
    headline: 'Un hogar o espacio de trabajo más limpio, sin complicaciones.',
    intro: 'Cuéntenos qué necesita limpiar y para cuándo. BuildMate conecta a propietarios y negocios con profesionales locales de limpieza adecuados para sus necesidades.',
    primary: 'Solicite un presupuesto',
    secondary: 'Ver servicios',
    heroNote: 'Conexiones locales de limpieza para hogares y negocios',
    servicesEyebrow: 'Opciones de limpieza',
    servicesTitle: 'Encuentre el servicio adecuado para su espacio.',
    residential: 'Para propietarios',
    residentialIntro: 'Limpieza para el día a día, una limpieza profunda o ayuda para preparar una mudanza.',
    residentialServices: ['Limpieza estándar', 'Limpieza profunda', 'Limpieza de entrada o salida', 'Mantenimiento recurrente'],
    commercial: 'Para negocios',
    commercialIntro: 'Mantenga limpios y listos para el día los espacios que usan su equipo y sus clientes.',
    commercialServices: ['Limpieza de oficinas', 'Servicios de conserjería', 'Desinfección de tiendas y espacios de trabajo'],
    addOns: 'Servicios adicionales',
    addOnsIntro: 'Pregunte si puede añadir estos detalles a su solicitud de limpieza.',
    addOnServices: ['Limpieza profunda de horno y refrigerador', 'Lavado de ventanas', 'Limpieza de alfombras', 'Opciones de limpieza ecológica'],
    quote: 'Solicite un presupuesto',
    processEyebrow: 'Cómo funciona',
    processTitle: 'Tres pasos hacia un espacio más limpio.',
    stepOneTitle: 'Cuéntenos qué necesita',
    stepOneText: 'Indique el tipo y tamaño de la propiedad, el servicio que necesita y la fecha que prefiere.',
    stepTwoTitle: 'Le conectamos con un profesional',
    stepTwoText: 'Revisamos su solicitud y le conectamos con un profesional local disponible de nuestra red. Confirmamos los detalles antes de reservar.',
    stepThreeTitle: 'Disfrute de un espacio impecable',
    stepThreeText: 'Confirme el horario y los detalles de pago con su proveedor. Si la limpieza no cumple con el alcance acordado, contáctenos y coordinaremos una nueva limpieza con el proveedor.',
    trustEyebrow: 'Confianza, seguridad y calidad',
    trustTitle: 'Confíe en quién recibe en su espacio.',
    vettedTitle: 'Proveedores locales verificados',
    vettedText: 'Revisamos a nuestros socios de limpieza antes de incluirlos en la red y verificamos sus antecedentes antes de conectarlos con clientes.',
    guaranteeTitle: 'Compromiso de nueva limpieza',
    guaranteeText: 'Si una limpieza reservada no cumple con el alcance acordado, avísenos. Coordinaremos una nueva limpieza con su proveedor.',
    scheduleTitle: 'Horarios que se adaptan a usted',
    scheduleText: 'Solicite una limpieza única o pregunte por opciones recurrentes para su hogar o negocio.',
    reviewsEyebrow: 'Opiniones de clientes',
    reviewsTitle: 'Comentarios reales de reservas reales.',
    reviewsEmpty: 'Las opiniones verificadas aparecerán aquí cuando los clientes compartan sus comentarios después de completar una reserva.',
    reviewsNote: 'Solo mostramos opiniones de reservas confirmadas.',
    finalEyebrow: '¿Listo para un espacio más limpio?',
    finalTitle: 'Dedique menos tiempo a buscar. Conéctese con un profesional local.',
    finalText: 'Cuéntenos sobre su hogar o negocio y el servicio que necesita. Le ayudaremos a conectar con un proveedor de limpieza en su zona.',
    finalCta: 'Solicite un presupuesto',
    footer: 'Conexiones locales para espacios más limpios.',
    rights: '© 2026 BuildMate. Todos los derechos reservados.',
  },
} as const;

interface CleaningServicesPageProps {
  language: Language;
  onSelectLanguage: (language: Language) => void;
}

export const CleaningServicesPage: React.FC<CleaningServicesPageProps> = ({ language, onSelectLanguage }) => {
  const copy = copyByLanguage[language];

  useEffect(() => {
    document.title = 'Cleaning Services | BuildMate';
    document.documentElement.lang = language;
  }, [language]);

  const serviceGroups = [
    { title: copy.residential, intro: copy.residentialIntro, services: copy.residentialServices, Icon: House },
    { title: copy.commercial, intro: copy.commercialIntro, services: copy.commercialServices, Icon: Building2 },
    { title: copy.addOns, intro: copy.addOnsIntro, services: copy.addOnServices, Icon: Sparkles },
  ];

  const trustItems = [
    { title: copy.vettedTitle, text: copy.vettedText, Icon: ShieldCheck },
    { title: copy.guaranteeTitle, text: copy.guaranteeText, Icon: BadgeCheck },
    { title: copy.scheduleTitle, text: copy.scheduleText, Icon: CalendarDays },
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="BuildMate home">
            <span className="grid h-9 w-9 place-items-center bg-[var(--green)] font-heading text-lg font-bold text-white">B</span>
            <span className="font-heading text-xl font-bold">Build<span className="text-[var(--green)]">Mate</span></span>
          </a>
          <div className="flex items-center gap-2 sm:gap-6">
            <a href="/" className="hidden items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--green)] sm:flex">
              <ArrowLeft size={16} />{copy.hub}
            </a>
            <LanguageSwitch language={language} onChange={onSelectLanguage} />
            <a href="/#contact" aria-label={copy.contact} className="inline-flex min-h-10 items-center gap-1 bg-[var(--green)] px-2 text-[10px] font-bold text-white transition-colors hover:bg-[var(--ink)] sm:gap-2 sm:px-4 sm:text-sm">
              <span className="sm:hidden">Contact</span><span className="hidden sm:inline">{copy.contact}</span><ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate flex min-h-[590px] items-end overflow-hidden sm:min-h-[660px]">
          <img src={cleaningImage} alt="Professional cleaner preparing a bright home interior" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,34,29,0.94)_0%,rgba(14,34,29,0.74)_48%,rgba(14,34,29,0.1)_100%)]" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20">
            <div className="max-w-3xl text-white page-reveal">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-[var(--lime)]">
                <span className="h-px w-8 bg-[var(--lime)]" />{copy.eyebrow}
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{copy.headline}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{copy.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/#contact" className="inline-flex min-h-12 items-center gap-3 bg-[var(--lime)] px-5 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white">
                  {copy.primary}<ArrowRight size={17} />
                </a>
                <a href="#services" className="inline-flex min-h-12 items-center gap-2 border border-white/55 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  {copy.secondary}<ArrowDownRight size={16} />
                </a>
              </div>
              <p className="mt-8 text-xs font-medium text-white/70">{copy.heroNote}</p>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-11 max-w-3xl">
              <p className="section-eyebrow">{copy.servicesEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.servicesTitle}</h2>
            </div>
            <div className="grid gap-8 border-t border-[var(--line)] md:grid-cols-3 md:gap-7">
              {serviceGroups.map(({ title, intro, services, Icon }) => (
                <article key={title} className="border-b border-[var(--line)] pb-7 pt-7 md:border-b-0 md:pb-0">
                  <span className="grid h-11 w-11 place-items-center bg-[var(--lime)] text-[var(--ink)]"><Icon size={20} /></span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 min-h-[3rem] text-sm leading-6 text-[var(--muted)]">{intro}</p>
                  <ul className="mt-5 space-y-3">
                    {services.map((service) => (
                      <li key={service} className="flex items-start gap-2.5 text-sm font-medium text-[var(--ink)]">
                        <Check size={16} className="mt-0.5 shrink-0 text-[var(--green)]" />{service}
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] hover:underline">
                    {copy.quote}<ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--green)] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="section-eyebrow section-eyebrow-light">{copy.processEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.processTitle}</h2>
            </div>
            <div className="grid gap-0 border-t border-white/25 md:grid-cols-3">
              {[
                [copy.stepOneTitle, copy.stepOneText],
                [copy.stepTwoTitle, copy.stepTwoText],
                [copy.stepThreeTitle, copy.stepThreeText],
              ].map(([title, text], index) => (
                <article key={title} className="border-b border-white/25 py-7 md:border-b-0 md:border-r md:px-7 md:py-8 md:first:pl-0 md:last:border-r-0">
                  <span className="font-heading text-sm font-semibold text-[var(--lime)]">0{index + 1}</span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{text}</p>
                </article>
              ))}
            </div>
            <a href="/#contact" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[var(--lime)] px-5 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white">
              {copy.primary}<ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="section-eyebrow">{copy.trustEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.trustTitle}</h2>
            </div>
            <div className="grid gap-8 border-t border-[var(--line)] pt-7 md:grid-cols-3 md:gap-10">
              {trustItems.map(({ title, text, Icon }) => (
                <article key={title}>
                  <span className="grid h-11 w-11 place-items-center bg-white text-[var(--green)]"><Icon size={20} /></span>
                  <h3 className="mt-5 font-heading text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="section-eyebrow">{copy.reviewsEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.reviewsTitle}</h2>
            </div>
            <div className="grid gap-8 border-y border-[var(--line)] py-8 md:grid-cols-[0.6fr_1fr] md:items-center">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center bg-[var(--lime)] text-[var(--ink)]"><Star size={21} /></span>
                <div>
                  <p className="font-heading text-lg font-semibold">{language === 'en' ? 'Verified booking reviews' : 'Opiniones de reservas verificadas'}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{copy.reviewsNote}</p>
                </div>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">{copy.reviewsEmpty}</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--lime)] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase text-[var(--green)]">{copy.finalEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.finalTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink)]/75">{copy.finalText}</p>
            </div>
            <a href="/#contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[var(--ink)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--green)]">
              {copy.finalCta}<ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--paper)] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="font-heading text-base font-bold text-[var(--ink)]">Build<span className="text-[var(--green)]">Mate</span></a>
          <p>{copy.footer}</p>
          <p>{copy.rights}</p>
        </div>
      </footer>
    </div>
  );
};
