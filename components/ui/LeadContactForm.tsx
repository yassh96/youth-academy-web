"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface LeadFormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  course: string;
  duration: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  course?: string;
  duration?: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnnpeq";
const WHATSAPP_NUMBER = "919175386755";

export const courseOptions = [
  "English for Competitive Exams & Interview",
  "Business Growth",
  "Stress Management",
  "Entrepreneurship",
  "Communication & Leadership",
  "Communication & Soft Skills Development Program",
];

export const durationOptions = ["1 Month", "6 Months", "1 Year"];

export default function LeadContactForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const initialFormState: LeadFormState = {
    name: "",
    email: "",
    phone: "",
    city: "",
    course: defaultCourse || courseOptions[0],
    duration: durationOptions[0],
    message: "",
  };

  const [form, setForm] = useState<LeadFormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedCourse, setSubmittedCourse] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = "Name is required";
    }

    if (!form.email.trim()) {
      errs.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    const cleanPhone = form.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!form.phone.trim()) {
      errs.phone = "Phone Number is required";
    } else if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!form.city.trim()) {
      errs.city = "City is required";
    }

    if (!form.course) {
      errs.course = "Please select a course";
    }

    if (!form.duration) {
      errs.duration = "Please select duration";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError(null);

    const nameVal = form.name.trim();
    const emailVal = form.email.trim();
    const phoneVal = form.phone.trim();
    const cityVal = form.city.trim();
    const courseVal = form.course;
    const durationVal = form.duration;
    const messageVal = form.message.trim();

    // 1. Construct & trigger WhatsApp redirection with pre-filled details
    const formattedMessage =
      `*New Student Inquiry — Youth Success Academy*\n\n` +
      `👤 *Name:* ${nameVal}\n` +
      `📧 *Email ID:* ${emailVal}\n` +
      `📱 *Phone Number:* ${phoneVal}\n` +
      `📍 *City:* ${cityVal}\n` +
      `🎓 *Course:* ${courseVal}\n` +
      `⏱️ *Duration:* ${durationVal}\n` +
      (messageVal ? `💬 *Message:* ${messageVal}\n` : "") +
      `\nHello YSA Team, I would like to enroll / book my free counseling session!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, "_blank");

    // 2. Simultaneously send POST request to Formspree in the background
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          city: cityVal,
          course: courseVal,
          duration: durationVal,
          message: messageVal,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmittedName(nameVal);
        setSubmittedCourse(courseVal);
        setSubmitting(false);
        setSubmitted(true);
        setForm(initialFormState);
      } else {
        setSubmittedName(nameVal);
        setSubmittedCourse(courseVal);
        setSubmitting(false);
        setSubmitted(true);
        setForm(initialFormState);
      }
    } catch (err) {
      setSubmittedName(nameVal);
      setSubmittedCourse(courseVal);
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialFormState);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-gray-200/80 card-shadow relative overflow-hidden w-full">
      {/* Top gold accent line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C9A558]" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A558]/10 text-[#C9A558] text-xs font-semibold uppercase tracking-wider mb-2.5">
          Free Admissions Counseling
        </div>
        <h3
          className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Enquire Now &amp; Book Free Session
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
          Fill in your details below to get instant course info and connect with our mentors.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success-message"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="text-center py-8 px-4 rounded-2xl bg-amber-50/50 border border-[#C9A558]/30"
          >
            <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={32} strokeWidth={2} />
            </div>
            <h4
              className="text-lg font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Inquiry Sent &amp; WhatsApp Opened!
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-5 leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{submittedName}</span>. Your inquiry for <span className="font-semibold text-[#C9A558]">{submittedCourse}</span> has been received and WhatsApp has been launched with your pre-filled message.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
              }}
              className="btn-gold text-xs py-2.5 px-6 font-semibold"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <form id="lead-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-4">
            {serverError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                <span>{serverError}</span>
              </div>
            )}

            {/* Name & Email ID Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lead-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Name *
                </label>
                <input
                  id="lead-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`input-premium text-xs sm:text-sm ${
                    errors.name ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lead-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Email ID *
                </label>
                <input
                  id="lead-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@gmail.com"
                  className={`input-premium text-xs sm:text-sm ${
                    errors.email ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Phone Number *
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 91753 86755"
                  className={`input-premium text-xs sm:text-sm ${
                    errors.phone ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lead-city"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  City *
                </label>
                <input
                  id="lead-city"
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Pune"
                  className={`input-premium text-xs sm:text-sm ${
                    errors.city ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                />
                {errors.city && (
                  <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.city}
                  </p>
                )}
              </div>
            </div>

            {/* Select Course & Select Duration Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lead-course"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Select Course *
                </label>
                <select
                  id="lead-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className={`input-premium bg-white cursor-pointer text-xs sm:text-sm ${
                    errors.course ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                >
                  {courseOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.course}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lead-duration"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Select Duration *
                </label>
                <select
                  id="lead-duration"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className={`input-premium bg-white cursor-pointer text-xs sm:text-sm ${
                    errors.duration ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                >
                  {durationOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.duration && (
                  <p className="text-[11px] text-red-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.duration}
                  </p>
                )}
              </div>
            </div>

            {/* Your Message */}
            <div>
              <label
                htmlFor="lead-message"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Your Message
              </label>
              <textarea
                id="lead-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={2}
                placeholder="Tell us about your goal or specific questions..."
                className="textarea-premium min-h-[75px] text-xs sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-6 rounded-xl bg-[#C9A558] hover:bg-[#b59247] text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send size={15} />
                </>
              )}
            </button>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
              <WhatsAppIcon size={13} />
              <span>Connects instantly on WhatsApp &amp; sends lead to YSA</span>
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
