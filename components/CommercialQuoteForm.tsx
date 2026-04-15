"use client";

import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

const businessTypeOptions = [
  { value: "", en: "-- Select your business type --", es: "-- Seleccione el tipo de negocio --" },
  { value: "gym", en: "Gym / Fitness Studio", es: "Gimnasio / Estudio de Fitness" },
  { value: "restaurant", en: "Restaurant / Catering", es: "Restaurante / Catering" },
  { value: "airbnb", en: "Airbnb / Vacation Rental", es: "Airbnb / Renta Vacacional" },
  { value: "hotel", en: "Hotel / Hospitality", es: "Hotel / Hospitalidad" },
  { value: "salon", en: "Salon / Spa", es: "Salón / Spa" },
  { value: "medical", en: "Medical / Dental Office", es: "Oficina Médica / Dental" },
  { value: "school", en: "School / Daycare", es: "Escuela / Guardería" },
  { value: "auto-shop", en: "Auto Shop / Dealership", es: "Taller / Agencia Automotriz" },
  { value: "other", en: "Other", es: "Otro" },
];

const frequencyOptions = [
  { value: "", en: "-- Select frequency --", es: "-- Seleccione la frecuencia --" },
  { value: "weekly", en: "Weekly", es: "Semanalmente" },
  { value: "biweekly", en: "Every Two Weeks", es: "Cada Dos Semanas" },
  { value: "monthly", en: "Monthly", es: "Mensualmente" },
  { value: "one-time", en: "One-Time Service", es: "Servicio Único" },
];

const volumeOptions = [
  { value: "", en: "-- Estimate if known (optional) --", es: "-- Estimado si lo sabe (opcional) --" },
  { value: "under-20lbs", en: "Under 20 lbs", es: "Menos de 20 libras" },
  { value: "20-50lbs", en: "20 – 50 lbs", es: "20 – 50 libras" },
  { value: "50-100lbs", en: "50 – 100 lbs", es: "50 – 100 libras" },
  { value: "over-100lbs", en: "Over 100 lbs", es: "Más de 100 libras" },
];

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessAddress: string;
  businessType: string;
  estimatedFrequency: string;
  estimatedVolume: string;
  additionalNotes: string;
}

interface FormErrors {
  businessName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  businessAddress?: string;
  businessType?: string;
  estimatedFrequency?: string;
}

const emptyForm: FormData = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  businessAddress: "",
  businessType: "",
  estimatedFrequency: "",
  estimatedVolume: "",
  additionalNotes: "",
};

export default function CommercialQuoteForm() {
  const { t, language } = useTranslation();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function validateField(name: string, value: string): string | undefined {
    const required = t("form_error_required");
    if (["businessName", "contactName", "businessAddress"].includes(name)) {
      if (!value.trim()) return required;
    }
    if (name === "email") {
      if (!value.trim()) return required;
      if (!value.includes("@") || !value.includes(".")) return t("form_error_email");
    }
    if (name === "phone") {
      if (!value.trim()) return required;
      const digits = value.replace(/\D/g, "");
      if (digits.length < 10) return t("form_error_phone");
    }
    if (name === "businessType" && !value) return required;
    if (name === "estimatedFrequency" && !value) return required;
    return undefined;
  }

  function handleBlur(name: string) {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, form[name as keyof FormData]),
    }));
  }

  function handleChange(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  }

  function validateAll(): boolean {
    const requiredFields: (keyof FormErrors)[] = [
      "businessName",
      "contactName",
      "email",
      "phone",
      "businessAddress",
      "businessType",
      "estimatedFrequency",
    ];
    const newErrors: FormErrors = {};
    const newTouched: Record<string, boolean> = {};
    for (const field of requiredFields) {
      newTouched[field] = true;
      const err = validateField(field, form[field] ?? "");
      if (err) newErrors[field] = err;
    }
    setErrors(newErrors);
    setTouched((prev) => ({ ...prev, ...newTouched }));
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;
    setSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch("/api/commercial-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full font-sans text-sm text-brand-dark bg-white border px-4 py-3 outline-none transition-colors focus:border-brand-blue placeholder:text-brand-dark/30";
  const inputError = "border-red-400";
  const inputNormal = "border-brand-dark/20";

  function fieldClass(name: keyof FormErrors) {
    return `${inputBase} ${errors[name] ? inputError : inputNormal}`;
  }

  function ErrorMsg({ name }: { name: keyof FormErrors }) {
    if (!errors[name]) return null;
    return (
      <p className="font-sans text-xs text-red-500 mt-1">{errors[name]}</p>
    );
  }

  function Label({
    htmlFor,
    children,
    required,
    optional,
  }: {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
    optional?: boolean;
  }) {
    return (
      <label
        htmlFor={htmlFor}
        className="block font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/60 mb-1.5"
      >
        {children}
        {required && <span className="text-red-500 ml-0.5">*</span>}
        {optional && (
          <span className="text-brand-dark/35 ml-1 normal-case tracking-normal font-normal text-xs">
            {language === "es" ? "(opcional)" : "(optional)"}
          </span>
        )}
      </label>
    );
  }

  if (submitted) {
    const firstName = form.contactName.trim().split(" ")[0];
    return (
      <div className="bg-brand-dark text-white p-10 text-center rounded-none">
        <div className="text-5xl mb-6">✅</div>
        <h2 className="font-display font-black text-3xl md:text-4xl uppercase leading-none mb-4">
          {language === "es"
            ? `¡Gracias, ${firstName}!`
            : `Thank you, ${firstName}!`}
        </h2>
        <p className="font-sans text-white/80 text-base leading-relaxed max-w-md mx-auto mb-3">
          {language === "es"
            ? "Recibimos su solicitud y nos pondremos en contacto en 1 día hábil."
            : "We received your request and will be in touch within 1 business day."}
        </p>
        <p className="font-sans text-white/70 text-base mb-6">
          {language === "es"
            ? "¿Preguntas? Llámenos al (909) 248-7305."
            : "Questions? Call us at (909) 248-7305."}
        </p>
        <p className="font-sans text-white/40 text-sm">
          {language === "es"
            ? `Se ha enviado una confirmación a ${form.email}`
            : `A confirmation has been sent to ${form.email}`}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-brand-dark/10 shadow-sm"
    >
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          {/* 1. Business Name */}
          <div>
            <Label htmlFor="businessName" required>
              {t("form_business_name")}
            </Label>
            <input
              id="businessName"
              type="text"
              className={fieldClass("businessName")}
              placeholder={
                language === "es"
                  ? "ej. Gimnasio Fitness Pomona"
                  : "e.g. Fitness First Pomona"
              }
              value={form.businessName}
              onChange={(e) => handleChange("businessName", e.target.value)}
              onBlur={() => handleBlur("businessName")}
            />
            <ErrorMsg name="businessName" />
          </div>

          {/* 2. Contact Name */}
          <div>
            <Label htmlFor="contactName" required>
              {t("form_contact_name")}
            </Label>
            <input
              id="contactName"
              type="text"
              className={fieldClass("contactName")}
              placeholder={
                language === "es" ? "Su nombre completo" : "Your full name"
              }
              value={form.contactName}
              onChange={(e) => handleChange("contactName", e.target.value)}
              onBlur={() => handleBlur("contactName")}
            />
            <ErrorMsg name="contactName" />
          </div>

          {/* 3. Email */}
          <div>
            <Label htmlFor="email" required>
              {t("form_email")}
            </Label>
            <input
              id="email"
              type="email"
              className={fieldClass("email")}
              placeholder={
                language === "es" ? "usted@sunegocio.com" : "you@yourbusiness.com"
              }
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
            />
            <ErrorMsg name="email" />
          </div>

          {/* 4. Phone */}
          <div>
            <Label htmlFor="phone" required>
              {t("form_phone")}
            </Label>
            <input
              id="phone"
              type="tel"
              className={fieldClass("phone")}
              placeholder="(909) 555-0000"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
            />
            <ErrorMsg name="phone" />
          </div>

          {/* 5. Business Address */}
          <div>
            <Label htmlFor="businessAddress" required>
              {t("form_business_address")}
            </Label>
            <input
              id="businessAddress"
              type="text"
              className={fieldClass("businessAddress")}
              placeholder={
                language === "es"
                  ? "123 Calle Principal, Pomona, CA 91766"
                  : "123 Main St, Pomona, CA 91766"
              }
              value={form.businessAddress}
              onChange={(e) => handleChange("businessAddress", e.target.value)}
              onBlur={() => handleBlur("businessAddress")}
            />
            <ErrorMsg name="businessAddress" />
          </div>

          {/* 6. Business Type */}
          <div>
            <Label htmlFor="businessType" required>
              {t("form_business_type")}
            </Label>
            <select
              id="businessType"
              className={`${fieldClass("businessType")} appearance-none`}
              value={form.businessType}
              onChange={(e) => handleChange("businessType", e.target.value)}
              onBlur={() => handleBlur("businessType")}
            >
              {businessTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {language === "es" ? opt.es : opt.en}
                </option>
              ))}
            </select>
            <ErrorMsg name="businessType" />
          </div>

          {/* 7. Frequency */}
          <div>
            <Label htmlFor="estimatedFrequency" required>
              {t("form_frequency")}
            </Label>
            <select
              id="estimatedFrequency"
              className={`${fieldClass("estimatedFrequency")} appearance-none`}
              value={form.estimatedFrequency}
              onChange={(e) => handleChange("estimatedFrequency", e.target.value)}
              onBlur={() => handleBlur("estimatedFrequency")}
            >
              {frequencyOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {language === "es" ? opt.es : opt.en}
                </option>
              ))}
            </select>
            <ErrorMsg name="estimatedFrequency" />
          </div>

          {/* 8. Volume (optional) */}
          <div>
            <Label htmlFor="estimatedVolume" optional>
              {t("form_volume")}
            </Label>
            <select
              id="estimatedVolume"
              className={`${inputBase} ${inputNormal} appearance-none`}
              value={form.estimatedVolume}
              onChange={(e) => handleChange("estimatedVolume", e.target.value)}
            >
              {volumeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {language === "es" ? opt.es : opt.en}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 9. Notes - full width */}
        <div className="mt-5">
          <Label htmlFor="additionalNotes" optional>
            {t("form_notes")}
          </Label>
          <textarea
            id="additionalNotes"
            rows={4}
            className={`${inputBase} ${inputNormal} resize-none`}
            placeholder={
              language === "es"
                ? "Requisitos especiales, horarios de recogida preferidos, o preguntas para nuestro equipo..."
                : "Any special requirements, specific pickup times, or questions for our team..."
            }
            value={form.additionalNotes}
            maxLength={500}
            onChange={(e) => handleChange("additionalNotes", e.target.value)}
          />
          <p className="font-sans text-xs text-brand-dark/40 mt-1 text-right">
            {form.additionalNotes.length} / 500{" "}
            {language === "es" ? "caracteres" : "characters"}
          </p>
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-brand-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting && (
              <svg
                className="animate-spin w-4 h-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {submitting ? t("form_sending") : t("form_submit")}
          </button>

          {submitError && (
            <p className="font-sans text-sm text-red-600 mt-4 max-w-lg">
              {t("form_error_submit")}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
