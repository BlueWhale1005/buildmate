import React, { useEffect } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Facebook,
  Globe2,
  Instagram,
  Megaphone,
  MousePointer2,
  UsersRound,
} from 'lucide-react';
import { Language } from '../i18n/translations';
import { LanguageSwitch } from '../components/LanguageSwitch';
import marketingImage from '../assets/images/digital_small_business_1791501777695.jpg';

const pageCopy = {
  en: {
    home: 'All services',
    contact: 'Contact BuildMate',
    eyebrow: 'Social Media Promotion',
    headline: 'Build your online presence. Bring more customers your way.',
    intro: 'Need a website? We can build one from scratch. Already have one? We will focus on driving social traffic to it. We also set up your Facebook and Instagram business pages and actively promote your business online.',
    primary: 'Claim Your Promotion Package',
    explore: 'See what is included',
    local: 'Made for local businesses ready to grow',
    websiteEyebrow: 'Website solutions',
    websiteTitle: 'Start with the website you need.',
    buildTitle: 'Need a Website? We Build It for You.',
    buildText: 'We create a custom, mobile-friendly website from scratch, with a clear path for social visitors to learn about your business and contact you.',
    buildTag: 'A new website, built for your business',
    connectTitle: 'Already Have a Website?',
    connectText: 'Keep the website you have. We focus on promoting your business and directing targeted social media visitors straight to your existing site to create more opportunities for inquiries and sales.',
    connectTag: 'Your website stays as it is',
    setupEyebrow: 'Social page creation and setup',
    setupTitle: 'Make your business easy to find and contact.',
    setupText: 'We create your official business touchpoints on Facebook and Instagram so prospective customers can find your business and reach out.',
    facebook: 'Facebook Page',
    facebookText: 'A dedicated Facebook presence for your business.',
    instagram: 'Instagram Business account',
    instagramText: 'A business account customers can discover and contact.',
    promoEyebrow: 'Active online and social media promotion',
    promoTitle: 'Get your business in front of more people.',
    promoText: 'We promote your business across online channels and social networks to expand your reach. When people are interested, we direct them to your website or business contact channels.',
    destinationTitle: 'Every promotion has a next step.',
    destinationWeb: 'Visit your website',
    destinationContact: 'Contact your business',
    stepsEyebrow: 'Getting started',
    stepsTitle: 'From setup to customer connections in three steps.',
    stepOneTitle: 'Onboarding & Setup',
    stepOneText: 'We learn about your business, build or connect your website, and create your Facebook Page and Instagram Business account.',
    stepTwoTitle: 'Promotion Launch',
    stepTwoText: 'We launch promotion for your business across social platforms and online channels.',
    stepThreeTitle: 'Customer Growth',
    stepThreeText: 'We direct active traffic and prospective customers to your website or business contact channels.',
    feeNote: 'We explain your package and percentage-based fee before you decide to move forward.',
    finalEyebrow: 'Ready when you are',
    finalTitle: 'Give your business a stronger online presence.',
    finalText: 'Let us help more people discover your business and take the next step to reach you.',
    finalCta: 'Talk to BuildMate',
    footer: 'Local connections for better work.',
    rights: '© 2026 BuildMate. All rights reserved.',
  },
  es: {
    home: 'Todos los servicios',
    contact: 'Contacte a BuildMate',
    eyebrow: 'Promoción en redes sociales',
    headline: 'Cree su presencia en línea. Atraiga más clientes.',
    intro: '¿Necesita un sitio web? Podemos crearlo desde cero. ¿Ya tiene uno? Nos enfocamos en atraer visitas desde redes sociales. También configuramos sus páginas de Facebook e Instagram y promocionamos activamente su negocio en línea.',
    primary: 'Solicite su paquete de promoción',
    explore: 'Conozca los servicios',
    local: 'Para negocios locales listos para crecer',
    websiteEyebrow: 'Soluciones web',
    websiteTitle: 'Comenzamos con el sitio web que necesita.',
    buildTitle: '¿Necesita un sitio web? Lo creamos para usted.',
    buildText: 'Creamos desde cero un sitio web personalizado y adaptable a móviles, con una ruta clara para que las visitas conozcan su negocio y se comuniquen.',
    buildTag: 'Un sitio nuevo, creado para su negocio',
    connectTitle: '¿Ya tiene un sitio web?',
    connectText: 'Conserve el sitio que ya tiene. Nos enfocamos en promocionar su negocio y dirigir visitas segmentadas desde redes sociales a su sitio actual para generar más oportunidades de consultas y ventas.',
    connectTag: 'Su sitio permanece como está',
    setupEyebrow: 'Creación y configuración de páginas sociales',
    setupTitle: 'Facilite que las personas encuentren y contacten su negocio.',
    setupText: 'Creamos sus puntos de contacto oficiales en Facebook e Instagram para que los clientes potenciales puedan encontrar su negocio y comunicarse.',
    facebook: 'Página de Facebook',
    facebookText: 'Una presencia dedicada en Facebook para su negocio.',
    instagram: 'Cuenta de Instagram para empresas',
    instagramText: 'Una cuenta comercial que los clientes pueden descubrir y contactar.',
    promoEyebrow: 'Promoción activa en línea y redes sociales',
    promoTitle: 'Presente su negocio a más personas.',
    promoText: 'Promocionamos su negocio en canales en línea y redes sociales para ampliar su alcance. Cuando alguien muestra interés, lo dirigimos a su sitio web o a sus canales de contacto.',
    destinationTitle: 'Cada promoción lleva a un siguiente paso.',
    destinationWeb: 'Visitar su sitio web',
    destinationContact: 'Contactar su negocio',
    stepsEyebrow: 'Cómo comenzar',
    stepsTitle: 'De la configuración a nuevos contactos en tres pasos.',
    stepOneTitle: 'Incorporación y configuración',
    stepOneText: 'Conocemos su negocio, creamos o conectamos su sitio web y configuramos su página de Facebook y cuenta de Instagram para empresas.',
    stepTwoTitle: 'Lanzamiento de la promoción',
    stepTwoText: 'Lanzamos la promoción de su negocio en plataformas sociales y canales en línea.',
    stepThreeTitle: 'Crecimiento de clientes',
    stepThreeText: 'Dirigimos visitas activas y clientes potenciales a su sitio web o a los canales de contacto de su negocio.',
    feeNote: 'Explicamos su paquete y la tarifa porcentual antes de que decida continuar.',
    finalEyebrow: 'Cuando esté listo',
    finalTitle: 'Impulse la presencia en línea de su negocio.',
    finalText: 'Ayudemos a que más personas descubran su negocio y sepan cómo comunicarse con usted.',
    finalCta: 'Hable con BuildMate',
    footer: 'Conexiones locales para un mejor trabajo.',
    rights: '© 2026 BuildMate. Todos los derechos reservados.',
  },
} as const;

interface SocialMediaPromotionPageProps {
  language: Language;
  onSelectLanguage: (language: Language) => void;
}

export const SocialMediaPromotionPage: React.FC<SocialMediaPromotionPageProps> = ({ language, onSelectLanguage }) => {
  const copy = pageCopy[language];

  useEffect(() => {
    document.title = 'Social Media Promotion | BuildMate';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2.5" aria-label="BuildMate home">
            <span className="grid h-9 w-9 place-items-center bg-[var(--green)] font-heading text-lg font-bold text-white">B</span>
            <span className="font-heading text-xl font-bold">Build<span className="text-[var(--green)]">Mate</span></span>
          </a>
          <div className="flex items-center gap-2 sm:gap-6">
            <a href="/" className="hidden items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--green)] sm:flex">
              <ArrowLeft size={16} />{copy.home}
            </a>
            <LanguageSwitch language={language} onChange={onSelectLanguage} />
            <a href="/#contact" aria-label={copy.contact} className="inline-flex min-h-10 items-center gap-1 bg-[var(--green)] px-2 text-[10px] font-bold text-white transition-colors hover:bg-[var(--ink)] sm:gap-2 sm:px-4 sm:text-sm">
              <span className="sm:hidden">Contact</span><span className="hidden sm:inline">{copy.contact}</span><ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate flex min-h-[610px] items-end overflow-hidden sm:min-h-[690px]">
          <img src={marketingImage} alt="Small business owner planning an online promotion" className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,34,29,0.95)_0%,rgba(14,34,29,0.82)_45%,rgba(14,34,29,0.16)_100%)]" />
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
                <a href="#website-solutions" className="inline-flex min-h-12 items-center gap-2 border border-white/55 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  {copy.explore}<ArrowDownRight size={16} />
                </a>
              </div>
              <p className="mt-8 text-xs font-medium text-white/70">{copy.local}</p>
            </div>
          </div>
        </section>

        <section id="website-solutions" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-11">
              <p className="section-eyebrow">{copy.websiteEyebrow}</p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.websiteTitle}</h2>
            </div>
            <div className="grid border-y border-[var(--line)] md:grid-cols-2">
              <article className="border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:pr-10 md:py-10">
                <span className="grid h-11 w-11 place-items-center bg-[var(--lime)] text-[var(--ink)]"><Globe2 size={20} /></span>
                <p className="mt-6 text-xs font-bold uppercase text-[var(--green)]">{copy.buildTag}</p>
                <h3 className="mt-2 max-w-lg font-heading text-3xl font-semibold leading-tight">{copy.buildTitle}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">{copy.buildText}</p>
                <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] hover:underline">
                  {copy.primary}<ArrowRight size={16} />
                </a>
              </article>
              <article className="py-8 md:pl-10 md:py-10">
                <span className="grid h-11 w-11 place-items-center bg-[var(--green)] text-white"><MousePointer2 size={20} /></span>
                <p className="mt-6 text-xs font-bold uppercase text-[var(--green)]">{copy.connectTag}</p>
                <h3 className="mt-2 max-w-lg font-heading text-3xl font-semibold leading-tight">{copy.connectTitle}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">{copy.connectText}</p>
                <a href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] hover:underline">
                  {copy.primary}<ArrowRight size={16} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">{copy.setupEyebrow}</p>
              <h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.setupTitle}</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">{copy.setupText}</p>
            </div>
            <div className="grid gap-0 border-y border-[var(--line)] sm:grid-cols-2 sm:divide-x sm:divide-[var(--line)]">
              <article className="py-7 sm:pr-7 sm:py-8">
                <span className="grid h-11 w-11 place-items-center bg-[#e9efff] text-[#2456a6]"><Facebook size={21} /></span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{copy.facebook}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.facebookText}</p>
              </article>
              <article className="border-t border-[var(--line)] py-7 sm:border-t-0 sm:pl-7 sm:py-8">
                <span className="grid h-11 w-11 place-items-center bg-[#f9eaf0] text-[#a22e60]"><Instagram size={21} /></span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{copy.instagram}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.instagramText}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[var(--green)] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
            <div>
              <p className="section-eyebrow section-eyebrow-light">{copy.promoEyebrow}</p>
              <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.promoTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{copy.promoText}</p>
              <a href="/#contact" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[var(--lime)] px-5 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white">
                {copy.primary}<ArrowRight size={16} />
              </a>
            </div>
            <div className="border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-heading text-2xl font-semibold">{copy.destinationTitle}</h3>
              <div className="mt-6 flex items-center gap-3 border-b border-white/20 pb-5 text-sm font-semibold">
                <span className="grid h-10 w-10 place-items-center bg-white/10 text-[var(--lime)]"><Globe2 size={18} /></span>
                {copy.destinationWeb}
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm font-semibold">
                <span className="grid h-10 w-10 place-items-center bg-white/10 text-[var(--lime)]"><UsersRound size={18} /></span>
                {copy.destinationContact}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="section-eyebrow">{copy.stepsEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.stepsTitle}</h2>
            </div>
            <div className="grid gap-0 border-t border-[var(--line)] md:grid-cols-3">
              {[
                [copy.stepOneTitle, copy.stepOneText],
                [copy.stepTwoTitle, copy.stepTwoText],
                [copy.stepThreeTitle, copy.stepThreeText],
              ].map(([title, text], index) => (
                <article key={title} className="border-b border-[var(--line)] py-7 md:border-b-0 md:border-r md:px-7 md:py-8 md:first:pl-0 md:last:border-r-0">
                  <span className="font-heading text-sm font-semibold text-[var(--green)]">0{index + 1}</span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 flex items-start gap-2 text-sm font-semibold text-[var(--green)]"><Check size={17} className="mt-0.5 shrink-0" />{copy.feeNote}</p>
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
