import React, { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Hammer,
  Mail,
  Megaphone,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import { Language } from '../i18n/translations';
import marketingImage from '../assets/images/digital_small_business_1791501777695.jpg';
import cleaningImage from '../assets/images/pro_cleaning_service_1791501759015.jpg';
import constructionImage from '../assets/images/hero_construction_1791499952212.jpg';
import { LanguageSwitch } from '../components/LanguageSwitch';

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
};

const content = {
  en: {
    nav: ['What we do', 'How it works', 'Our fee', 'Contact'],
    eyebrow: 'A local partner for local work',
    headline: 'Good work starts with the right connection.',
    intro: 'BuildMate promotes local businesses and connects people with cleaning providers and general contracting partners.',
    heroCta: 'Explore what we do',
    contactCta: 'Talk to BuildMate',
    serviceEyebrow: 'What we do',
    serviceTitle: 'We help good work find its people.',
    serviceAction: 'Explore promotion package',
    cleaningAction: 'Explore cleaning services',
    contractingAction: 'Submit a project inquiry',
    services: [
      {
        number: '01',
        title: 'Social media promotion',
        text: 'We help local service businesses get in front of more people with practical social media promotion.',
        imageAlt: 'Small business owner working on a marketing plan',
        tag: 'For local businesses',
      },
      {
        number: '02',
        title: 'Cleaning services',
        text: 'We connect homeowners and businesses with cleaning providers for the work they need done.',
        imageAlt: 'Professional cleaning a bright home interior',
        tag: 'For homes and businesses',
      },
      {
        number: '03',
        title: 'General contracting',
        text: 'We introduce property owners to general contracting partners for renovation and improvement projects.',
        imageAlt: 'General contractor at an active construction site',
        tag: 'For projects big and small',
      },
    ],
    processEyebrow: 'A clear next step',
    processTitle: 'From first message to the right next move.',
    steps: [
      ['01', 'Tell us what you need', 'Share a few details by phone, email, or the form below.'],
      ['02', 'We make the connection', 'We’ll discuss the request and connect you with the relevant service or partner.'],
      ['03', 'Agree before work begins', 'We explain the service and our percentage-based fee before you decide to proceed.'],
    ],
    feeEyebrow: 'Straightforward pricing',
    feeTitle: 'Our fee is clear before you commit.',
    feeText: 'BuildMate charges a percentage-based fee for services arranged through our network. We’ll tell you the exact percentage and how it is calculated before you agree to move forward.',
    feeNote: 'No rate is hidden in the fine print. You decide once the terms are clear.',
    aboutEyebrow: 'How BuildMate works',
    aboutTitle: 'One point of contact. The right people for the work.',
    aboutText: 'BuildMate helps people and local service businesses find each other. We coordinate introductions and communication; cleaning providers and general contracting partners carry out their work directly.',
    contactEyebrow: 'Get in touch',
    contactTitle: 'What can we help you with?',
    contactIntro: 'Send us a note and tell us what you have in mind. We’ll get back to you using the details you provide.',
    name: 'Your name',
    email: 'Email address',
    phone: 'Phone number (optional)',
    service: 'What are you interested in?',
    message: 'How can we help?',
    messagePlaceholder: 'A few details about your question or project...',
    options: ['Choose a service', 'Social media promotion', 'Cleaning services', 'General contracting', 'Something else'],
    send: 'Send inquiry',
    sending: 'Sending...',
    successTitle: 'Thanks for reaching out.',
    successText: 'Your message was sent to the BuildMate team. We’ll be in touch.',
    sendAnother: 'Send another message',
    errorTitle: 'We couldn’t send your message.',
    errorFallback: 'Please email us directly or call the number below.',
    required: 'Please complete your name, email, and message.',
    emailInvalid: 'Please enter a valid email address.',
    phoneCta: 'Call BuildMate',
    emailCta: 'Email BuildMate',
    local: 'Serving Jersey City and nearby communities',
    footerText: 'Local connections for better work.',
    rights: '© 2026 BuildMate. All rights reserved.',
  },
  es: {
    nav: ['Servicios', 'Cómo funciona', 'Tarifa', 'Contacto'],
    eyebrow: 'Un aliado local para el trabajo local',
    headline: 'El buen trabajo empieza con la conexión correcta.',
    intro: 'BuildMate promociona negocios locales y conecta a las personas con proveedores de limpieza y contratistas generales asociados.',
    heroCta: 'Conozca nuestros servicios',
    contactCta: 'Contacte a BuildMate',
    serviceEyebrow: 'Qué hacemos',
    serviceTitle: 'Conectamos a las personas con el trabajo adecuado.',
    serviceAction: 'Conozca el paquete de promoción',
    cleaningAction: 'Conozca los servicios de limpieza',
    contractingAction: 'Envíe una consulta de proyecto',
    services: [
      {
        number: '01',
        title: 'Promoción en redes sociales',
        text: 'Ayudamos a negocios locales de servicios a llegar a más personas con promoción práctica en redes sociales.',
        imageAlt: 'Propietaria de un pequeño negocio preparando un plan de marketing',
        tag: 'Para negocios locales',
      },
      {
        number: '02',
        title: 'Servicios de limpieza',
        text: 'Conectamos a propietarios y negocios con proveedores de limpieza para el trabajo que necesitan.',
        imageAlt: 'Profesional limpiando un interior residencial iluminado',
        tag: 'Para hogares y negocios',
      },
      {
        number: '03',
        title: 'Contratación general',
        text: 'Presentamos a propietarios con contratistas generales asociados para proyectos de renovación y mejoras.',
        imageAlt: 'Contratista general en una obra activa',
        tag: 'Para proyectos de todo tipo',
      },
    ],
    processEyebrow: 'Un próximo paso claro',
    processTitle: 'Del primer mensaje al siguiente paso correcto.',
    steps: [
      ['01', 'Cuéntenos qué necesita', 'Comparta algunos detalles por teléfono, correo o el formulario.'],
      ['02', 'Hacemos la conexión', 'Conversamos sobre su solicitud y le conectamos con el servicio o socio adecuado.'],
      ['03', 'Acuerde antes de comenzar', 'Explicamos el servicio y nuestra tarifa porcentual antes de que decida continuar.'],
    ],
    feeEyebrow: 'Precios claros',
    feeTitle: 'Conocerá nuestra tarifa antes de comprometerse.',
    feeText: 'BuildMate cobra una tarifa porcentual por los servicios coordinados a través de nuestra red. Le informaremos el porcentaje exacto y cómo se calcula antes de que acepte continuar.',
    feeNote: 'Sin tarifas ocultas. Usted decide cuando los términos estén claros.',
    aboutEyebrow: 'Cómo trabaja BuildMate',
    aboutTitle: 'Un contacto. Las personas adecuadas para el trabajo.',
    aboutText: 'BuildMate ayuda a las personas y a los negocios locales a encontrarse. Coordinamos presentaciones y comunicación; los proveedores de limpieza y contratistas generales asociados realizan el trabajo directamente.',
    contactEyebrow: 'Comuníquese',
    contactTitle: '¿En qué podemos ayudarle?',
    contactIntro: 'Envíenos un mensaje y cuéntenos qué necesita. Le responderemos usando los datos que comparta.',
    name: 'Su nombre',
    email: 'Correo electrónico',
    phone: 'Teléfono (opcional)',
    service: '¿Qué servicio le interesa?',
    message: '¿Cómo podemos ayudarle?',
    messagePlaceholder: 'Cuéntenos brevemente sobre su consulta o proyecto...',
    options: ['Elija un servicio', 'Promoción en redes sociales', 'Servicios de limpieza', 'Contratación general', 'Otro asunto'],
    send: 'Enviar consulta',
    sending: 'Enviando...',
    successTitle: 'Gracias por comunicarse.',
    successText: 'Su mensaje fue enviado al equipo de BuildMate. Nos pondremos en contacto.',
    sendAnother: 'Enviar otro mensaje',
    errorTitle: 'No pudimos enviar su mensaje.',
    errorFallback: 'Envíenos un correo directamente o llame al número de abajo.',
    required: 'Complete su nombre, correo electrónico y mensaje.',
    emailInvalid: 'Ingrese un correo electrónico válido.',
    phoneCta: 'Llamar a BuildMate',
    emailCta: 'Enviar correo a BuildMate',
    local: 'Atendemos Jersey City y comunidades cercanas',
    footerText: 'Conexiones locales para un mejor trabajo.',
    rights: '© 2026 BuildMate. Todos los derechos reservados.',
  },
} as const;

const serviceImages = [marketingImage, cleaningImage, constructionImage];
const serviceIcons = [Megaphone, Sparkles, Hammer];

interface CompanyOverviewPageProps {
  language: Language;
  onSelectLanguage: (language: Language) => void;
}

export const CompanyOverviewPage: React.FC<CompanyOverviewPageProps> = ({ language, onSelectLanguage }) => {
  const copy = content[language];
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    serviceCategory: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const submitInquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || copy.errorFallback);
      }

      setSuccess(true);
      setForm({ name: '', email: '', phone: '', serviceCategory: '', message: '' });
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : copy.errorFallback);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5" aria-label="BuildMate home">
            <span className="grid h-9 w-9 place-items-center bg-[var(--green)] font-heading text-lg font-bold text-white">B</span>
            <span className="font-heading text-xl font-bold">Build<span className="text-[var(--green)]">Mate</span></span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {copy.nav.map((label, index) => (
              <a key={label} href={['#services', '#how-it-works', '#fees', '#contact'][index]} className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--green)]">
                {label}
              </a>
            ))}
            <LanguageSwitch language={language} onChange={onSelectLanguage} />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitch language={language} onChange={onSelectLanguage} />
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center border border-[var(--line)]" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-3 md:hidden" aria-label="Mobile navigation">
            {copy.nav.map((label, index) => (
              <a key={label} href={['#services', '#how-it-works', '#fees', '#contact'][index]} onClick={() => setMenuOpen(false)} className="block border-b border-[var(--line)] py-3 text-sm font-semibold">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="overview-hero relative isolate flex min-h-[610px] items-end overflow-hidden sm:min-h-[680px]">
          <img src={marketingImage} alt="Local business owner planning a marketing campaign" className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,34,29,0.94)_0%,rgba(14,34,29,0.78)_43%,rgba(14,34,29,0.12)_100%)]" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20">
            <div className="max-w-3xl text-white page-reveal">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-normal text-[var(--lime)]">
                <span className="h-px w-8 bg-[var(--lime)]" />{copy.eyebrow}
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{copy.headline}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{copy.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#services" className="inline-flex min-h-12 items-center gap-3 bg-[var(--lime)] px-5 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white">
                  {copy.heroCta}<ArrowDownRight size={17} />
                </a>
                <a href="#contact" className="inline-flex min-h-12 items-center gap-2 border border-white/55 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  {copy.contactCta}<ArrowRight size={16} />
                </a>
              </div>
              <p className="mt-9 text-xs font-medium text-white/70">{copy.local}</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden w-[31%] min-w-[300px] bg-[var(--lime)] px-7 py-5 lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)]">BuildMate</p>
            <p className="mt-1 text-sm text-[var(--ink)]">{copy.footerText}</p>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div>
                <p className="section-eyebrow">{copy.serviceEyebrow}</p>
                <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.serviceTitle}</h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {copy.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article key={service.number} className="service-item group">
                    <div className="relative aspect-[1.42] overflow-hidden bg-[var(--line)]">
                      <img src={serviceImages[index]} alt={service.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute left-4 top-4 bg-[var(--lime)] px-3 py-1.5 text-xs font-bold text-[var(--ink)]">{service.number}</span>
                      <span className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center bg-white text-[var(--green)]"><Icon size={19} /></span>
                    </div>
                    <div className="border-b border-[var(--line)] pb-5 pt-5">
                      <p className="text-[11px] font-bold uppercase tracking-normal text-[var(--green)]">{service.tag}</p>
                      <h3 className="mt-2 font-heading text-2xl font-semibold">
                        {index < 3 ? <a href={['/social-media-promotion', '/cleaning-services', '/general-contracting-inquiry'][index]} className="transition-colors hover:text-[var(--green)]">{service.title}</a> : service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.text}</p>
                      {index < 3 && (
                        <a href={['/social-media-promotion', '/cleaning-services', '/general-contracting-inquiry'][index]} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] hover:underline">
                          {[copy.serviceAction, copy.cleaningAction, copy.contractingAction][index]}<ArrowRight size={16} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-[var(--green)] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="section-eyebrow section-eyebrow-light">{copy.processEyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.processTitle}</h2>
            </div>
            <div className="grid gap-0 border-t border-white/25 md:grid-cols-3">
              {copy.steps.map(([number, title, text]) => (
                <article key={number} className="border-b border-white/25 py-7 md:border-b-0 md:border-r md:px-7 md:py-8 md:first:pl-0 md:last:border-r-0">
                  <span className="font-heading text-sm font-semibold text-[var(--lime)]">{number}</span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fees" className="scroll-mt-20 bg-[var(--lime)] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1fr] md:items-center">
            <div>
              <p className="section-eyebrow">{copy.feeEyebrow}</p>
              <h2 className="mt-4 max-w-lg font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.feeTitle}</h2>
            </div>
            <div className="max-w-2xl border-l-2 border-[var(--green)]/35 pl-6 sm:pl-8">
              <p className="text-lg leading-8 text-[var(--ink)]">{copy.feeText}</p>
              <p className="mt-4 flex items-start gap-2 text-sm font-semibold text-[var(--green)]"><Check size={17} className="mt-0.5 shrink-0" />{copy.feeNote}</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 border-y border-[var(--line)] py-9 md:grid-cols-[0.7fr_1fr] md:gap-16 md:py-14">
            <div>
              <p className="section-eyebrow">{copy.aboutEyebrow}</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">{copy.aboutTitle}</h2>
            </div>
            <p className="max-w-2xl self-end text-base leading-8 text-[var(--muted)]">{copy.aboutText}</p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[var(--ink)] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            <div>
              <p className="section-eyebrow section-eyebrow-light">{copy.contactEyebrow}</p>
              <h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">{copy.contactTitle}</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70">{copy.contactIntro}</p>

              <div className="mt-9 space-y-4 border-t border-white/20 pt-6">
                <a href="tel:2015550198" className="flex items-center gap-4 text-sm font-semibold transition-colors hover:text-[var(--lime)]">
                  <span className="grid h-10 w-10 place-items-center border border-white/25"><Phone size={17} /></span>
                  <span><span className="block text-xs font-medium text-white/55">{copy.phoneCta}</span>(201) 555-0198</span>
                </a>
                <a href="mailto:Info@buildmateusa.com" className="flex items-center gap-4 text-sm font-semibold transition-colors hover:text-[var(--lime)]">
                  <span className="grid h-10 w-10 place-items-center border border-white/25"><Mail size={17} /></span>
                  <span><span className="block text-xs font-medium text-white/55">{copy.emailCta}</span>Info@buildmateusa.com</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {success ? (
                <div className="max-w-xl py-8" role="status">
                  <span className="grid h-12 w-12 place-items-center bg-[var(--lime)] text-[var(--ink)]"><Check size={22} /></span>
                  <h3 className="mt-6 font-heading text-3xl font-semibold">{copy.successTitle}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">{copy.successText}</p>
                  <button type="button" onClick={() => setSuccess(false)} className="mt-6 text-sm font-semibold text-[var(--lime)] underline underline-offset-4">{copy.sendAnother}</button>
                </div>
              ) : (
                <form onSubmit={submitInquiry} className="grid gap-4 sm:grid-cols-2">
                  <label className="form-field sm:col-span-1">
                    <span>{copy.name} <b>*</b></span>
                    <input required autoComplete="name" maxLength={120} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                  </label>
                  <label className="form-field sm:col-span-1">
                    <span>{copy.email} <b>*</b></span>
                    <input required type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                  </label>
                  <label className="form-field sm:col-span-1">
                    <span>{copy.phone}</span>
                    <input type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
                  </label>
                  <label className="form-field sm:col-span-1">
                    <span>{copy.service}</span>
                    <select value={form.serviceCategory} onChange={(event) => setForm({ ...form, serviceCategory: event.target.value })}>
                      {copy.options.map((option, index) => <option key={option} value={index === 0 ? '' : option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="form-field sm:col-span-2">
                    <span>{copy.message} <b>*</b></span>
                    <textarea required rows={4} maxLength={4000} placeholder={copy.messagePlaceholder} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
                  </label>
                  {error && (
                    <p className="sm:col-span-2 border-l-2 border-[var(--lime)] pl-3 text-sm leading-6 text-white/80" role="alert">
                      <strong className="block text-white">{copy.errorTitle}</strong>{error} {copy.errorFallback} <a className="font-semibold text-[var(--lime)] underline" href="mailto:Info@buildmateusa.com">Info@buildmateusa.com</a>
                    </p>
                  )}
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={submitting} className="inline-flex min-h-12 items-center gap-3 bg-[var(--lime)] px-5 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60">
                      {submitting ? copy.sending : copy.send}<Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--paper)] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="font-heading text-base font-bold text-[var(--ink)]">Build<span className="text-[var(--green)]">Mate</span></a>
          <p>{copy.footerText}</p>
          <p>{copy.rights}</p>
        </div>
      </footer>
    </div>
  );
};
