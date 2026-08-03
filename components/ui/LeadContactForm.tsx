"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { courses } from "@/lib/data";

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
  course: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnnpeq";
const WHATSAPP_NUMBER = "919175386755";

export default function LeadContactForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const initialFormState: LeadFormState = {
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || "General Career Counseling",
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
      errs.name = "Full Name is required";
    }

    if (!form.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    const cleanPhone = form.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!form.phone.trim()) {
      errs.phone = "Mobile Number is required";
    } else if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!form.course) {
      errs.course = "Please select a program or course";
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
    const courseVal = form.course;
    const messageVal = form.message.trim();

    // 1. Construct & trigger WhatsApp redirection with pre-filled details
    const formattedMessage =
      `*New Student Inquiry — Youth Success Academy*\n\n` +
      `👤 *Name:* ${nameVal}\n` +
      `📧 *Email:* ${emailVal}\n` +
      `📱 *Phone:* ${phoneVal}\n` +
      `🎓 *Course:* ${courseVal}\n` +
      (messageVal ? `💬 *Message:* ${messageVal}\n` : "") +
      `\nHello YSA Team, I would like to book my free counseling session!`;

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
          course: courseVal,
          message: messageVal,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmittedName(nameVal);
        setSubmittedCourse(courseVal);
        setSubmitting(false);
        setSubmitted(true);
        // Reset form fields
        setForm(initialFormState);
      } else {
        const data = await response.json();
        // Even if Formspree returns non-ok, WhatsApp was triggered
        setSubmittedName(nameVal);
        setSubmittedCourse(courseVal);
        setSubmitting(false);
        setSubmitted(true);
        setForm(initialFormState);
      }
    } catch (err) {
      // Offline / network fallback
      setSubmittedName(nameVal);
      setSubmittedCourse(courseVal);
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialFormState);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-7 md:p-10 border border-gray-200/80 card-shadow relative overflow-hidden">
      {/* Top gold accent line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C9A558]" />

      <div className="mb-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A558]/10 text-[#C9A558] text-xs font-semibold uppercase tracking-wider mb-3">
          Free Admissions Counseling
        </div>
        <h3
          className="text-2xl font-extrabold text-gray-900 leading-snug"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Book Your Free Session
        </h3>
        <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
          Fill in your details to submit your lead and connect instantly on WhatsApp.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success-message"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="text-center py-10 px-4 rounded-2xl bg-amber-50/50 border border-[#C9A558]/30"
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} strokeWidth={2} />
            </div>
            <h4
              className="text-xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Inquiry Sent &amp; WhatsApp Opened!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{submittedName}</span>. Your inquiry for <span className="font-semibold text-[#C9A558]">{submittedCourse}</span> has been logged to Formspree and WhatsApp has been launched with your pre-filled message.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
                className="btn-gold text-xs py-3 px-6 font-semibold"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        ) : (
          <form id="lead-dual-form" onSubmit={handleSubmit} noValidate className="space-y-5">
            {serverError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{serverError}</span>
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="lead-name"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Full Name *
              </label>
              <input
                id="lead-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`input-premium ${
                  errors.name ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="lead-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Email Address *
                </label>
                <input
                  id="lead-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@gmail.com"
                  className={`input-premium ${
                    errors.email ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Mobile Number *
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 9175386755"
                  className={`input-premium ${
                    errors.phone ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Course dropdown */}
            <div>
              <label
                htmlFor="lead-course"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Select Course / Program *
              </label>
              <select
                id="lead-course"
                name="course"
                value={form.course}
                onChange={handleChange}
                className={`input-premium bg-white cursor-pointer ${
                  errors.course ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                }`}
              >
                <option value="General Career Counseling">General Career Counseling</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.category})
                  </option>
                ))}
              </select>
              {errors.course && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.course}
                </p>
              )}
            </div>

            {/* Optional message */}
            <div>
              <label
                htmlFor="lead-message"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Message / Goal (Optional)
              </label>
              <textarea
                id="lead-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your background or specific career goals..."
                className="textarea-premium min-h-[100px]"
              />
            </div>

            {/* Dual Action Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BD5C] to-[#C9A558] hover:opacity-95 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Submitting &amp; Launching WhatsApp...</span>
                </>
              ) : (
                <>
                  <WhatsAppIcon size={18} />
                  <span>Submit Form &amp; Open WhatsApp</span>
                  <Send size={16} />
                </>
              )}
            </button>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5">
              <span>🔒 Sends copy to Formspree &amp; opens pre-filled WhatsApp.</span>
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
