import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock3,
  FileImage,
  FileText,
  HardHat,
  House,
  LockKeyhole,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { Language } from '../i18n/translations';
import { LanguageSwitch } from '../components/LanguageSwitch';
import constructionImage from '../assets/images/hero_construction_1791499952212.jpg';

const copyByLanguage = {
  en: {
    hub: 'All services',
    eyebrow: 'General contracting inquiry',
    headline: "Tell us about your project. We'll help find the right general contractor.",
    intro: 'Projects big or small are welcome. Share your requirements and we will connect you with a suitable general contracting partner from our network.',
    smallProject: 'Projects big and small',
    formEyebrow: 'Project details',
    formTitle: 'Start your project inquiry',
    formIntro: 'Tell us a little about the work. The more detail you share, the better we can understand what kind of partner may fit.',
    propertyType: 'What type of property is this?',
    residential: 'Residential',
    commercial: 'Commercial',
    category: 'Project category',
    categoryPlaceholder: 'Choose a project type',
    categories: ['Renovation', 'Remodeling', 'New construction', 'Structural work or repair', 'Other'],
    description: 'Describe your project',
    descriptionHelp: 'What would you like done? Include the main requirements, rooms or areas involved, and any details a contractor should know.',
    descriptionPlaceholder: 'Example: Remodel a 10 x 12 ft kitchen, including cabinets, counters, flooring, and lighting...',
    timeline: 'When would you like to begin?',
    timelinePlaceholder: 'Choose a timeline',
    timelines: ['Immediate / ASAP', 'Within 1 month', '1-3 months', 'Planning phase'],
    budget: 'Estimated budget',
    budgetOptional: 'Optional',
    budgetPlaceholder: 'Select a range (optional)',
    budgets: ['Under $10,000', '$10,000-$25,000', '$25,000-$50,000', '$50,000-$100,000', '$100,000+', 'Not sure yet'],
    upload: 'Add photos or project documents',
    uploadOptional: 'Optional',
    uploadHelp: 'Attach site photos, blueprints, or inspiration images. Up to 3 files, 5 MB each. PDF, JPG, PNG, or WebP.',
    chooseFiles: 'Choose files',
    noFiles: 'No files selected',
    contactDetails: 'Your contact details',
    fullName: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    location: 'Property location or ZIP code',
    locationHelp: 'The project location helps us find partners who serve your area.',
    submit: 'Submit Project Inquiry',
    submitting: 'Sending inquiry...',
    formPrivacy: 'Your details are used to review this project inquiry and connect you with a relevant partner.',
    missingFields: 'Please complete all required fields.',
    tooManyFiles: 'Please attach no more than 3 files.',
    oversizedFile: 'Each file must be 5 MB or smaller.',
    unsupportedFile: 'Use PDF, JPG, PNG, or WebP files.',
    successTitle: 'Your project inquiry has been submitted.',
    successText: 'We will review the details and look for a suitable general contracting partner. If there is a fit, a partner will contact you to discuss the project and next steps.',
    sendAnother: 'Submit another inquiry',
    stepsEyebrow: 'What happens next?',
    stepsTitle: 'A clear path from inquiry to quote.',
    stepOneTitle: 'Request Submitted',
    stepOneText: 'We receive your project details and review the scope, location, timing, and budget you shared.',
    stepTwoTitle: 'Match with Partners',
    stepTwoText: 'We look for qualified general contracting partners whose licensing, insurance, and experience suit your project scope.',
    stepThreeTitle: 'Discuss Your Custom Quote',
    stepThreeText: 'A matched partner contacts you to discuss site details, ask follow-up questions, and prepare project pricing. Timing depends on project details and partner availability.',
    trustEyebrow: 'Trust and transparency',
    trustTitle: 'Know what to expect before work begins.',
    vettedTitle: 'Pre-vetted contractors',
    vettedText: 'We connect you with general contracting partners reviewed for fit with the requested scope.',
    licensedTitle: 'Licensed and insured partners',
    licensedText: 'We seek partners with applicable licenses and insurance for their trade and project scope. Ask to confirm current credentials before hiring.',
    noObligationTitle: 'No obligation to hire',
    noObligationText: 'Submitting an inquiry does not commit you to hire a partner. Review the scope, pricing, and terms before deciding.',
    footer: 'Local connections for better work.',
    rights: '© 2026 BuildMate. All rights reserved.',
  },
  es: {
    hub: 'Todos los servicios',
    eyebrow: 'Consulta de contratación general',
    headline: 'Cuéntenos sobre su proyecto. Le ayudaremos a encontrar el contratista adecuado.',
    intro: 'Aceptamos proyectos grandes y pequeños. Comparta sus requisitos y le conectaremos con un socio de contratación general adecuado de nuestra red.',
    smallProject: 'Proyectos grandes y pequeños',
    formEyebrow: 'Detalles del proyecto',
    formTitle: 'Inicie una consulta de proyecto',
    formIntro: 'Cuéntenos un poco sobre el trabajo. Cuantos más detalles comparta, mejor podremos entender qué tipo de socio podría ser adecuado.',
    propertyType: '¿Qué tipo de propiedad es?',
    residential: 'Residencial',
    commercial: 'Comercial',
    category: 'Categoría del proyecto',
    categoryPlaceholder: 'Elija un tipo de proyecto',
    categories: ['Renovación', 'Remodelación', 'Nueva construcción', 'Trabajo estructural o reparación', 'Otro'],
    description: 'Describa su proyecto',
    descriptionHelp: '¿Qué le gustaría hacer? Incluya los requisitos principales, las habitaciones o áreas involucradas y cualquier detalle importante para el contratista.',
    descriptionPlaceholder: 'Ejemplo: Remodelar una cocina de 3 x 3.6 m, incluidos gabinetes, encimeras, piso e iluminación...',
    timeline: '¿Cuándo le gustaría comenzar?',
    timelinePlaceholder: 'Elija un plazo',
    timelines: ['Inmediatamente / Lo antes posible', 'Dentro de 1 mes', 'En 1-3 meses', 'En fase de planificación'],
    budget: 'Presupuesto estimado',
    budgetOptional: 'Opcional',
    budgetPlaceholder: 'Elija un rango (opcional)',
    budgets: ['Menos de $10,000', '$10,000-$25,000', '$25,000-$50,000', '$50,000-$100,000', '$100,000+', 'Aún no lo sé'],
    upload: 'Añada fotos o documentos del proyecto',
    uploadOptional: 'Opcional',
    uploadHelp: 'Adjunte fotos del sitio, planos o imágenes de inspiración. Hasta 3 archivos de 5 MB cada uno. PDF, JPG, PNG o WebP.',
    chooseFiles: 'Elegir archivos',
    noFiles: 'No se seleccionaron archivos',
    contactDetails: 'Sus datos de contacto',
    fullName: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Número de teléfono',
    location: 'Ubicación de la propiedad o código postal',
    locationHelp: 'La ubicación nos ayuda a encontrar socios que atiendan su zona.',
    submit: 'Enviar consulta del proyecto',
    submitting: 'Enviando consulta...',
    formPrivacy: 'Usaremos sus datos para revisar esta consulta y conectarle con un socio adecuado.',
    missingFields: 'Complete todos los campos obligatorios.',
    tooManyFiles: 'Adjunte un máximo de 3 archivos.',
    oversizedFile: 'Cada archivo debe ser de 5 MB o menos.',
    unsupportedFile: 'Use archivos PDF, JPG, PNG o WebP.',
    successTitle: 'Su consulta del proyecto fue enviada.',
    successText: 'Revisaremos los detalles y buscaremos un socio de contratación general adecuado. Si encontramos una opción, un socio se comunicará con usted para conversar sobre el proyecto y los siguientes pasos.',
    sendAnother: 'Enviar otra consulta',
    stepsEyebrow: '¿Qué sucede ahora?',
    stepsTitle: 'Un camino claro desde la consulta hasta el presupuesto.',
    stepOneTitle: 'Consulta recibida',
    stepOneText: 'Recibimos los detalles y revisamos el alcance, la ubicación, el plazo y el presupuesto que compartió.',
    stepTwoTitle: 'Conexión con socios',
    stepTwoText: 'Buscamos socios de contratación general calificados cuyas licencias, seguros y experiencia se ajusten al alcance de su proyecto.',
    stepThreeTitle: 'Converse sobre su presupuesto',
    stepThreeText: 'Un socio adecuado se comunicará con usted para conversar sobre el sitio, hacer preguntas y preparar precios. El plazo depende de los detalles del proyecto y la disponibilidad del socio.',
    trustEyebrow: 'Confianza y transparencia',
    trustTitle: 'Sepa qué esperar antes de comenzar el trabajo.',
    vettedTitle: 'Contratistas preseleccionados',
    vettedText: 'Le conectamos con socios de contratación general revisados para que se ajusten al alcance solicitado.',
    licensedTitle: 'Socios con licencia y seguro',
    licensedText: 'Buscamos socios con las licencias y seguros aplicables a su oficio y proyecto. Confirme sus credenciales vigentes antes de contratar.',
    noObligationTitle: 'Sin obligación de contratar',
    noObligationText: 'Enviar una consulta no le obliga a contratar a un socio. Revise el alcance, el precio y las condiciones antes de decidir.',
    footer: 'Conexiones locales para un mejor trabajo.',
    rights: '© 2026 BuildMate. Todos los derechos reservados.',
  },
} as const;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 3;
const ACCEPTED_TYPES = new Set(['application/pdf', 'image/jpeg', 'image/png', 'image/webp']);

interface GeneralContractingInquiryPageProps {
  language: Language;
  onSelectLanguage: (language: Language) => void;
}

export const GeneralContractingInquiryPage: React.FC<GeneralContractingInquiryPageProps> = ({ language, onSelectLanguage }) => {
  const copy = copyByLanguage[language];
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'General Contracting Inquiry | BuildMate';
    document.documentElement.lang = language;
  }, [language]);

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(event.target.files ?? []);
    setError('');
    if (nextFiles.length > MAX_FILES) {
      setError(copy.tooManyFiles);
      event.target.value = '';
      setFiles([]);
      return;
    }
    if (nextFiles.some((file) => file.size > MAX_FILE_SIZE)) {
      setError(copy.oversizedFile);
      event.target.value = '';
      setFiles([]);
      return;
    }
    if (nextFiles.some((file) => !ACCEPTED_TYPES.has(file.type))) {
      setError(copy.unsupportedFile);
      event.target.value = '';
      setFiles([]);
      return;
    }
    setFiles(nextFiles);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/project-inquiry', { method: 'POST', body: formData });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'We could not send your inquiry right now. Please contact BuildMate directly.');
      }
      setSubmitted(true);
      setFiles([]);
      form.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not send your inquiry right now. Please contact BuildMate directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="BuildMate home">
            <span className="grid h-9 w-9 place-items-center bg-[var(--green)] font-heading text-lg font-bold text-white">B</span>
            <span className="font-heading text-xl font-bold">Build<span className="text-[var(--green)]">Mate</span></span>
          </a>
          <div className="flex items-center gap-2 sm:gap-6">
            <a href="/" className="hidden items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--green)] sm:flex"><ArrowLeft size={16} />{copy.hub}</a>
            <LanguageSwitch language={language} onChange={onSelectLanguage} />
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[var(--green)] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div className="page-reveal">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-[var(--lime)]"><span className="h-px w-8 bg-[var(--lime)]" />{copy.eyebrow}</p>
              <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{copy.headline}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">{copy.intro}</p>
            </div>
            <div className="hidden overflow-hidden lg:block">
              <img src={constructionImage} alt="General contracting partners at a residential construction project" className="h-52 w-full object-cover" />
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-white/75"><HardHat size={15} className="text-[var(--lime)]" />{copy.smallProject}</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <aside className="h-fit lg:sticky lg:top-24">
              <p className="section-eyebrow">{copy.trustEyebrow}</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight">{copy.trustTitle}</h2>
              <div className="mt-7 space-y-6 border-t border-[var(--line)] pt-6">
                <div className="flex gap-3">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[var(--green)]" />
                  <div><h3 className="text-sm font-bold">{copy.vettedTitle}</h3><p className="mt-1 text-xs leading-5 text-[var(--muted)]">{copy.vettedText}</p></div>
                </div>
                <div className="flex gap-3">
                  <BadgeCheck size={20} className="mt-0.5 shrink-0 text-[var(--green)]" />
                  <div><h3 className="text-sm font-bold">{copy.licensedTitle}</h3><p className="mt-1 text-xs leading-5 text-[var(--muted)]">{copy.licensedText}</p></div>
                </div>
                <div className="flex gap-3">
                  <LockKeyhole size={20} className="mt-0.5 shrink-0 text-[var(--green)]" />
                  <div><h3 className="text-sm font-bold">{copy.noObligationTitle}</h3><p className="mt-1 text-xs leading-5 text-[var(--muted)]">{copy.noObligationText}</p></div>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              {submitted ? (
                <div className="border border-[var(--line)] bg-white p-6 sm:p-10" role="status">
                  <span className="grid h-12 w-12 place-items-center bg-[var(--lime)] text-[var(--ink)]"><Check size={22} /></span>
                  <h2 className="mt-6 font-heading text-3xl font-semibold">{copy.successTitle}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">{copy.successText}</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold text-[var(--green)] underline underline-offset-4">{copy.sendAnother}</button>
                </div>
              ) : (
                <div className="border border-[var(--line)] bg-white p-5 sm:p-8">
                  <p className="section-eyebrow">{copy.formEyebrow}</p>
                  <h2 className="mt-2 font-heading text-3xl font-semibold">{copy.formTitle}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.formIntro}</p>

                  <form onSubmit={handleSubmit} className="project-inquiry-form mt-7 space-y-6">
                    <fieldset>
                      <legend className="mb-2 text-sm font-bold">{copy.propertyType} <span className="text-[var(--green)]">*</span></legend>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'Residential', label: copy.residential, Icon: House },
                          { value: 'Commercial', label: copy.commercial, Icon: Building2 },
                        ].map(({ value, label, Icon }) => (
                          <label key={value} className="flex min-h-12 cursor-pointer items-center gap-2 border border-[var(--line)] px-3 text-sm font-semibold has-[:checked]:border-[var(--green)] has-[:checked]:bg-[var(--green)]/5">
                            <input required type="radio" name="propertyType" value={value} className="accent-[var(--green)]" />
                            <Icon size={17} className="text-[var(--green)]" />{label}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="form-field">
                        <span>{copy.category} <b>*</b></span>
                        <select required name="projectCategory" defaultValue="" className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]">
                          <option value="" disabled>{copy.categoryPlaceholder}</option>
                          {copy.categories.map((category) => <option key={category} value={category}>{category}</option>)}
                        </select>
                      </label>
                      <label className="form-field">
                        <span>{copy.timeline} <b>*</b></span>
                        <select required name="timeline" defaultValue="" className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]">
                          <option value="" disabled>{copy.timelinePlaceholder}</option>
                          {copy.timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
                        </select>
                      </label>
                    </div>

                    <label className="form-field">
                      <span>{copy.description} <b>*</b></span>
                      <span className="text-xs font-normal text-[var(--muted)]">{copy.descriptionHelp}</span>
                      <textarea required name="description" rows={5} maxLength={5000} placeholder={copy.descriptionPlaceholder} className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]" />
                    </label>

                    <label className="form-field max-w-sm">
                      <span>{copy.budget} <em className="font-normal text-[var(--muted)]">({copy.budgetOptional})</em></span>
                      <select name="budget" defaultValue="" className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]">
                        <option value="">{copy.budgetPlaceholder}</option>
                        {copy.budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                      </select>
                    </label>

                    <div>
                      <label htmlFor="documents" className="form-field">
                        <span>{copy.upload} <em className="font-normal text-[var(--muted)]">({copy.uploadOptional})</em></span>
                        <span className="text-xs font-normal text-[var(--muted)]">{copy.uploadHelp}</span>
                      </label>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <label htmlFor="documents" className="inline-flex min-h-10 cursor-pointer items-center gap-2 border border-[var(--line)] px-3 text-xs font-bold text-[var(--green)] hover:bg-[var(--paper)]">
                          <Upload size={15} />{copy.chooseFiles}
                        </label>
                        <input id="documents" name="documents" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp" onChange={handleFiles} className="sr-only" />
                        <span className="flex min-w-0 items-center gap-2 text-xs text-[var(--muted)]" aria-live="polite">
                          {files.length > 0 ? <FileImage size={15} /> : <FileText size={15} />}
                          <span className="break-all">{files.length ? files.map((file) => file.name).join(', ') : copy.noFiles}</span>
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-[var(--line)] pt-6">
                      <h3 className="font-heading text-xl font-semibold">{copy.contactDetails}</h3>
                      <div className="mt-4 grid gap-5 sm:grid-cols-2">
                        <label className="form-field">
                          <span>{copy.fullName} <b>*</b></span>
                          <input required name="fullName" autoComplete="name" maxLength={120} className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]" />
                        </label>
                        <label className="form-field">
                          <span>{copy.email} <b>*</b></span>
                          <input required type="email" name="email" autoComplete="email" maxLength={254} className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]" />
                        </label>
                        <label className="form-field">
                          <span>{copy.phone} <b>*</b></span>
                          <input required type="tel" name="phone" autoComplete="tel" maxLength={40} className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]" />
                        </label>
                        <label className="form-field">
                          <span>{copy.location} <b>*</b></span>
                          <input required name="location" autoComplete="postal-code" maxLength={160} aria-describedby="location-help" className="!border-[var(--line)] !bg-[var(--paper)] !text-[var(--ink)]" />
                          <span id="location-help" className="text-xs font-normal text-[var(--muted)]">{copy.locationHelp}</span>
                        </label>
                      </div>
                    </div>

                    {error && <p role="alert" className="border-l-2 border-red-600 pl-3 text-sm leading-6 text-red-800">{error}</p>}
                    <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-sm text-xs leading-5 text-[var(--muted)]">{copy.formPrivacy}</p>
                      <button type="submit" disabled={submitting} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[var(--green)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--ink)] disabled:cursor-wait disabled:opacity-60">
                        {submitting ? copy.submitting : copy.submit}<ArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[var(--lime)] px-5 py-9 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3 sm:gap-8">
            <p className="flex items-center gap-3 text-sm font-bold text-[var(--ink)]"><ShieldCheck size={20} className="shrink-0 text-[var(--green)]" />{copy.vettedTitle}</p>
            <p className="flex items-center gap-3 text-sm font-bold text-[var(--ink)]"><BadgeCheck size={20} className="shrink-0 text-[var(--green)]" />{copy.licensedTitle}</p>
            <p className="flex items-center gap-3 text-sm font-bold text-[var(--ink)]"><LockKeyhole size={20} className="shrink-0 text-[var(--green)]" />{copy.noObligationTitle}</p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
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
                  <span className="flex items-center gap-2 font-heading text-sm font-semibold text-[var(--green)]">0{index + 1}<Clock3 size={15} /></span>
                  <h3 className="mt-4 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--ink)] px-5 py-7 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="font-heading text-base font-bold text-white">Build<span className="text-[var(--lime)]">Mate</span></a>
          <p>{copy.footer}</p>
          <p>{copy.rights}</p>
        </div>
      </footer>
    </div>
  );
};
