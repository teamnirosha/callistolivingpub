import React, { FormEvent, useEffect, useId, useState } from "react";
import { CheckCircle2, Upload, X } from "lucide-react";
import { CallistoLogo } from "./CallistoLogo";

type EnquiryPopupProps = {
  open: boolean;
  onClose: () => void;
};

const STEPS = [
  { id: 1, label: "ABOUT YOU" },
  { id: 2, label: "YOUR PROPERTY" },
  { id: 3, label: "YOUR DESIGN" },
  { id: 4, label: "BUDGET & TIMELINE" },
  { id: 5, label: "YOUR VISION" },
];

const PROPERTY_TYPES = [
  "Apartment",
  "Villa",
  "Bungalow",
  "Penthouse",
  "Office",
  "Retail / Commercial",
  "Other",
];

const AREAS = [
  "Under 500 sq.ft.",
  "500–1000 sq.ft.",
  "1000–2000 sq.ft.",
  "2000–3000 sq.ft.",
  "3000+ sq.ft.",
];

const POSSESSION_STATUSES = [
  "Already have the property",
  "Possession within 3 months",
  "Possession within 6 months",
  "Planning / Pre-construction",
];

const SPACES_OPTIONS = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Dining",
  "Bathroom",
  "Kids Room",
  "Home Office",
  "Full Home",
  "Outdoor",
  "Commercial Space",
  "Other",
];

const DESIGN_STYLES = [
  "Modern",
  "Contemporary",
  "Minimal",
  "Luxury",
  "Japandi",
  "Classic",
  "Traditional",
  "Industrial",
  "Modern Indian",
  "Not Sure — Help Me Decide",
];

const SERVICES_OPTIONS = [
  "Interior Design",
  "Architecture",
  "Turnkey Execution",
  "Furniture & Custom Joinery",
  "Lighting Design",
  "Styling & Decor",
];

const BUDGET_OPTIONS = [
  "Under ₹5 Lakh",
  "₹5–10 Lakh",
  "₹10–20 Lakh",
  "₹20–40 Lakh",
  "₹40–75 Lakh",
  "₹75 Lakh+",
  "Prefer not to say",
];

const START_TIMES = [
  "Immediately",
  "Within 1–3 Months",
  "3–6 Months",
  "6+ Months",
  "Not Decided",
];

const TIMELINES = [
  "1–3 Months",
  "3–6 Months",
  "6–9 Months",
  "9+ Months",
  "Not Sure",
];

export function EnquiryPopup({ open, onClose }: EnquiryPopupProps) {
  const titleId = useId();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactPreference: "WhatsApp",
    propertyType: "Apartment",
    location: "",
    area: "1000–2000 sq.ft.",
    possessionStatus: "Already have the property",
    // Conditionals
    workstations: "",
    meetingRooms: "",
    businessType: "",
    bedrooms: "",
    bathrooms: "",
    // Step 3
    spaces: [] as string[],
    styles: [] as string[],
    services: [] as string[],
    // Step 4
    budget: "₹20–40 Lakh",
    startDate: "Within 1–3 Months",
    timeline: "3–6 Months",
    // Step 5
    projectBrief: "",
    fileName: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setCurrentStep(1);
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Handle ESC key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const toggleArrayItem = (key: "spaces" | "styles" | "services", value: string) => {
    setFormData((prev) => {
      const current = prev[key];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) errs.name = "Full name is required";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        errs.email = "Valid email is required";
      if (!formData.phone.trim() || formData.phone.trim().length < 8)
        errs.phone = "Valid phone number is required";
    }

    if (step === 2) {
      if (!formData.location.trim()) errs.location = "Project location/city is required";
    }

    if (step === 5) {
      if (!formData.consent) errs.consent = "You must agree to be contacted to proceed";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(5, prev + 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative flex w-full max-w-4xl h-[92vh] max-h-[700px] flex-col overflow-hidden rounded-xl border border-[#F3EFE7]/20 bg-[#171817] text-[#F3EFE7] shadow-[0_0_80px_rgba(0,0,0,0.9)] lg:flex-row">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-30 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-[#DE1D25] hover:bg-[#DE1D25] cursor-pointer"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* SUCCESS STATE */}
        {isSubmitted ? (
          <div className="flex w-full min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center">
            <div className="mb-5">
              <CallistoLogo variant="light" height={40} hideTaglineOnMobile={false} />
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#DE1D25]/15 border border-[#DE1D25]/40 text-[#DE1D25] mb-5">
              <CheckCircle2 size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25]">
              CONFIRMATION RECEIVED
            </span>
            <h2 className="mt-1.5 font-display text-2xl sm:text-4xl font-light text-[#F3EFE7]">
              YOUR PROJECT HAS <span className="italic text-[#C5B7A7]">BEGUN.</span>
            </h2>
            <p className="mt-3 max-w-md text-xs sm:text-sm text-[#F3EFE7]/75 leading-relaxed font-light">
              Thank you for sharing your vision with Callisto Living. Our design team will review your project details and get in touch with you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 border border-[#F3EFE7] bg-[#F3EFE7] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#171817] transition-all hover:bg-white cursor-pointer"
            >
              RETURN TO WEBSITE
            </button>
          </div>
        ) : (
          <>
            {/* LEFT SIDEBAR (DESKTOP) */}
            <div className="relative flex flex-col justify-between bg-black/50 p-5 sm:p-6 lg:w-64 xl:w-70 lg:border-r border-[#F3EFE7]/10 shrink-0">
              <div>
                <CallistoLogo variant="light" height={32} hideTaglineOnMobile={false} />
                
                {/* Progress Steps List */}
                <div className="mt-7 hidden lg:flex flex-col gap-4">
                  {STEPS.map((s) => {
                    const isActive = s.id === currentStep;
                    const isPassed = s.id < currentStep;
                    return (
                      <div
                        key={s.id}
                        className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
                          isActive
                            ? "text-[#DE1D25] font-semibold"
                            : isPassed
                            ? "text-[#F3EFE7]/80"
                            : "text-[#F3EFE7]/30"
                        }`}
                      >
                        <span className={`grid h-5 w-5 place-items-center rounded-full text-[9px] border ${
                          isActive
                            ? "border-[#DE1D25] bg-[#DE1D25] text-white"
                            : isPassed
                            ? "border-[#F3EFE7]/50 bg-white/10 text-[#F3EFE7]"
                            : "border-white/10 text-white/30"
                        }`}>
                          0{s.id}
                        </span>
                        <span>{s.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Footer Note */}
              <div className="hidden lg:block border-t border-[#F3EFE7]/10 pt-3">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#6E665C]">
                  CALLISTO LIVING STUDIO
                </p>
                <p className="mt-0.5 text-[11px] text-[#F3EFE7]/60 font-light">
                  Tailored Interior Architecture & Consultation
                </p>
              </div>
            </div>

            {/* RIGHT FORM CONTENT AREA — 3-PART FLEX LAYOUT */}
            <div className="flex flex-1 flex-col h-full overflow-hidden bg-[#171817]">
              {/* TOP FIXED HEADER */}
              <div className="shrink-0 p-5 pb-3 sm:px-6 sm:pt-5 sm:pb-3 border-b border-[#F3EFE7]/10">
                {/* Mobile Compact Progress Bar */}
                <div className="flex items-center justify-between mb-3 lg:hidden">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DE1D25]">
                    STEP 0{currentStep} / 05 — {STEPS[currentStep - 1].label}
                  </span>
                  <div className="flex gap-1">
                    {STEPS.map((s) => (
                      <span
                        key={s.id}
                        className={`h-1 w-4 rounded-full transition-colors ${
                          s.id === currentStep ? "bg-[#DE1D25]" : s.id < currentStep ? "bg-[#F3EFE7]/60" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* EDITORIAL FORM TITLE */}
                <div>
                  <h2 id={titleId} className="font-display text-xl sm:text-2xl font-light text-[#F3EFE7]">
                    Let's Design <span className="italic text-[#DE1D25]">Your Space</span>
                  </h2>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-[#F3EFE7]/70 font-light">
                    Tell us a little about your project. Our design team will create a tailored direction for your space.
                  </p>
                </div>
              </div>

              {/* MIDDLE SCROLLABLE FORM STEP CONTENT */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <form id="enquiry-form" onSubmit={handleSubmit}>
                  {/* STEP 01 — ABOUT YOU */}
                  {currentStep === 1 && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DE1D25]">
                        Tell us about yourself
                      </h3>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full rounded-xs border border-[#F3EFE7]/20 bg-white/5 px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25]"
                        />
                        {errors.name && <p className="mt-1 text-[11px] text-[#DE1D25]">{errors.name}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full rounded-xs border border-[#F3EFE7]/20 bg-white/5 px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25]"
                          />
                          {errors.email && <p className="mt-1 text-[11px] text-[#DE1D25]">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                            PHONE / WHATSAPP *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="087669 26173"
                            className="w-full rounded-xs border border-[#F3EFE7]/20 bg-white/5 px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25]"
                          />
                          {errors.phone && <p className="mt-1 text-[11px] text-[#DE1D25]">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          PREFERRED CONTACT METHOD
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {["WhatsApp", "Phone Call", "Email"].map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setFormData({ ...formData, contactPreference: method })}
                              className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] border transition-colors cursor-pointer ${
                                formData.contactPreference === method
                                  ? "border-[#DE1D25] bg-[#DE1D25] text-white font-semibold"
                                  : "border-white/20 bg-white/5 text-[#F3EFE7]/70 hover:border-white"
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 02 — YOUR PROPERTY */}
                  {currentStep === 2 && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DE1D25]">
                        Tell us about your space
                      </h3>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          PROPERTY TYPE *
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {PROPERTY_TYPES.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, propertyType: type })}
                              className={`px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
                                formData.propertyType === type
                                  ? "border-[#DE1D25] bg-[#DE1D25] text-white font-semibold"
                                  : "border-white/20 bg-white/5 text-[#F3EFE7]/70 hover:border-white"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          PROJECT LOCATION / CITY *
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Mumbai, Pune, Delhi, Bangalore"
                          className="w-full rounded-xs border border-[#F3EFE7]/20 bg-white/5 px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25]"
                        />
                        {errors.location && <p className="mt-1 text-[11px] text-[#DE1D25]">{errors.location}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                            APPROXIMATE AREA *
                          </label>
                          <select
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full rounded-xs border border-[#F3EFE7]/20 bg-[#222] px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25] cursor-pointer"
                          >
                            {AREAS.map((a) => (
                              <option key={a} value={a}>
                                {a}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                            POSSESSION STATUS *
                          </label>
                          <select
                            value={formData.possessionStatus}
                            onChange={(e) => setFormData({ ...formData, possessionStatus: e.target.value })}
                            className="w-full rounded-xs border border-[#F3EFE7]/20 bg-[#222] px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25] cursor-pointer"
                          >
                            {POSSESSION_STATUSES.map((ps) => (
                              <option key={ps} value={ps}>
                                {ps}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* CONDITIONAL SMART FIELDS */}
                      {formData.propertyType === "Office" && (
                        <div className="grid grid-cols-2 gap-3 pt-1 border-t border-white/10">
                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.18em] text-[#C5B7A7]">
                              WORKSTATIONS
                            </label>
                            <input
                              type="text"
                              value={formData.workstations}
                              onChange={(e) => setFormData({ ...formData, workstations: e.target.value })}
                              placeholder="e.g. 20"
                              className="mt-0.5 w-full border border-white/20 bg-white/5 px-2.5 py-1.5 text-xs text-white outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] uppercase tracking-[0.18em] text-[#C5B7A7]">
                              MEETING ROOMS
                            </label>
                            <input
                              type="text"
                              value={formData.meetingRooms}
                              onChange={(e) => setFormData({ ...formData, meetingRooms: e.target.value })}
                              placeholder="e.g. 2"
                              className="mt-0.5 w-full border border-white/20 bg-white/5 px-2.5 py-1.5 text-xs text-white outline-none"
                            />
                          </div>
                        </div>
                      )}

                      {formData.propertyType === "Retail / Commercial" && (
                        <div className="pt-1 border-t border-white/10">
                          <label className="block text-[9px] uppercase tracking-[0.18em] text-[#C5B7A7]">
                            BUSINESS / RETAIL TYPE
                          </label>
                          <input
                            type="text"
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            placeholder="e.g. Luxury Fashion, Hospitality, Clinic"
                            className="mt-0.5 w-full border border-white/20 bg-white/5 px-2.5 py-1.5 text-xs text-white outline-none"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 03 — YOUR DESIGN */}
                  {currentStep === 3 && (
                    <div className="space-y-2.5 animate-in fade-in duration-300">
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DE1D25]">
                        What are we designing?
                      </h3>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          SPACES YOU NEED (SELECT MULTIPLE)
                        </label>
                        <div className="flex flex-wrap gap-1">
                          {SPACES_OPTIONS.map((space) => {
                            const isSel = formData.spaces.includes(space);
                            return (
                              <button
                                key={space}
                                type="button"
                                onClick={() => toggleArrayItem("spaces", space)}
                                className={`px-2 py-1 text-[10px] uppercase tracking-[0.1em] border transition-colors cursor-pointer ${
                                  isSel
                                    ? "border-[#DE1D25] bg-[#DE1D25] text-white font-semibold"
                                    : "border-white/15 bg-white/5 text-[#F3EFE7]/70 hover:border-white"
                                }`}
                              >
                                {space}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          PREFERRED DESIGN STYLE
                        </label>
                        <div className="flex flex-wrap gap-1">
                          {DESIGN_STYLES.map((style) => {
                            const isSel = formData.styles.includes(style);
                            return (
                              <button
                                key={style}
                                type="button"
                                onClick={() => toggleArrayItem("styles", style)}
                                className={`px-2 py-1 text-[10px] uppercase tracking-[0.1em] border transition-colors cursor-pointer ${
                                  isSel
                                    ? "border-[#C5B7A7] bg-[#C5B7A7] text-[#171817] font-semibold"
                                    : "border-white/15 bg-white/5 text-[#F3EFE7]/70 hover:border-white"
                                }`}
                              >
                                {style}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          SERVICES REQUIRED
                        </label>
                        <div className="flex flex-wrap gap-1">
                          {SERVICES_OPTIONS.map((service) => {
                            const isSel = formData.services.includes(service);
                            return (
                              <button
                                key={service}
                                type="button"
                                onClick={() => toggleArrayItem("services", service)}
                                className={`px-2 py-1 text-[10px] uppercase tracking-[0.1em] border transition-colors cursor-pointer ${
                                  isSel
                                    ? "border-[#DE1D25] bg-[#DE1D25] text-white font-semibold"
                                    : "border-white/15 bg-white/5 text-[#F3EFE7]/70 hover:border-white"
                                }`}
                              >
                                {service}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 04 — BUDGET & TIMELINE */}
                  {currentStep === 4 && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DE1D25]">
                        Let's understand your plans
                      </h3>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          ESTIMATED PROJECT BUDGET *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                          {BUDGET_OPTIONS.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`px-2.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.1em] border transition-colors cursor-pointer ${
                                formData.budget === b
                                  ? "border-[#DE1D25] bg-[#DE1D25] text-white font-semibold"
                                  : "border-white/20 bg-white/5 text-[#F3EFE7]/70 hover:border-white"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                            EXPECTED START
                          </label>
                          <select
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            className="w-full rounded-xs border border-[#F3EFE7]/20 bg-[#222] px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25] cursor-pointer"
                          >
                            {START_TIMES.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                            PROJECT TIMELINE
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full rounded-xs border border-[#F3EFE7]/20 bg-[#222] px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25] cursor-pointer"
                          >
                            {TIMELINES.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 05 — YOUR VISION & UPLOAD */}
                  {currentStep === 5 && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DE1D25]">
                        Tell us about your vision
                      </h3>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          PROJECT BRIEF / REQUIREMENTS
                        </label>
                        <textarea
                          rows={2}
                          value={formData.projectBrief}
                          onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                          placeholder="Tell us about your space, lifestyle, requirements, or anything you would love to see in your new interior..."
                          className="w-full rounded-xs border border-[#F3EFE7]/20 bg-white/5 px-3 py-2 text-xs text-[#F3EFE7] outline-none transition-colors focus:border-[#DE1D25] resize-none"
                        />
                      </div>

                      {/* SHARE YOUR INSPIRATION UPLOAD AREA */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.18em] font-medium text-[#F3EFE7]/80 mb-1">
                          SHARE YOUR INSPIRATION (OPTIONAL)
                        </label>
                        <label className="flex flex-col items-center justify-center w-full h-14 sm:h-16 border-2 border-dashed border-white/20 rounded-xs bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                          <Upload size={15} className="text-[#DE1D25] mb-0.5" />
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F3EFE7]">
                            {formData.fileName || "ADD FLOOR PLAN / REFERENCE IMAGES"}
                          </span>
                          <span className="text-[8px] text-[#F3EFE7]/50 mt-0.5">
                            JPG, PNG, WEBP, PDF accepted
                          </span>
                          <input
                            type="file"
                            accept=".jpg,.png,.webp,.pdf"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                setFormData({ ...formData, fileName: e.target.files[0].name });
                              }
                            }}
                          />
                        </label>
                      </div>

                      {/* CONSENT CHECKBOX */}
                      <div className="pt-1">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            className="mt-0.5 h-3.5 w-3.5 accent-[#DE1D25] cursor-pointer"
                          />
                          <span className="text-xs text-[#F3EFE7]/80 font-light">
                            I agree to be contacted by Callisto Living regarding my interior project proposal.
                          </span>
                        </label>
                        {errors.consent && <p className="mt-1 text-[11px] text-[#DE1D25]">{errors.consent}</p>}
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* ALWAYS VISIBLE BOTTOM STICKY ACTION BAR */}
              <div className="shrink-0 p-4 sm:px-6 sm:py-3.5 border-t border-[#F3EFE7]/15 bg-[#171817] flex items-center justify-between z-20">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] border border-white/20 text-[#F3EFE7] transition-colors hover:border-white cursor-pointer"
                  >
                    BACK
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-[#F3EFE7] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#171817] transition-all hover:bg-white cursor-pointer"
                  >
                    <span>CONTINUE</span>
                    <span>→</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="enquiry-form"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#DE1D25] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-[#171817] cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "SENDING ENQUIRY..." : "SEND PROJECT ENQUIRY →"}</span>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
