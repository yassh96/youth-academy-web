"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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

export default function LeadContactForm() {
  const initialFormState: LeadFormState = {
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    duration: "",
    message: "",
  };

  const [form, setForm] = useState<LeadFormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = "Full name is required";
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    const cleanPhone = form.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!form.phone.trim()) {
      errs.phone = "Mobile number is required";
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

    try {
      // Step 2: Send the complete enquiry payload to Formspree
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
          message: messageVal || "N/A",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Step 3: ONLY redirect to WhatsApp after successful email POST submission
        const formattedMessage =
          `Hello Youth Success Academy,\n\n` +
          `I have submitted the enquiry form.\n\n` +
          `Name: ${nameVal}\n` +
          `Email: ${emailVal}\n` +
          `Phone: ${phoneVal}\n` +
          `City: ${cityVal}\n` +
          `Course: ${courseVal}\n` +
          `Duration: ${durationVal}\n` +
          `Message: ${messageVal || "N/A"}\n\n` +
          `Please contact me regarding admission.`;

        const encodedText = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

        // Automatically open WhatsApp chat
        window.open(whatsappUrl, "_blank");

        setSubmittedName(nameVal);
        setSubmitting(false);
        setSubmitted(true);
        // Reset form fields back to empty
        setForm(initialFormState);
      } else {
        const data = await response.json().catch(() => ({}));
        setServerError(
          data.error || "Failed to submit enquiry email. Please check your details and try again."
        );
        setSubmitting(false);
      }
    } catch (err) {
      setServerError("Network error occurred while submitting email. Please try again.");
      setSubmitting(false);
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
          Fill in your details below and our admissions team will get in touch with you.
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
              Enquiry Submitted &amp; WhatsApp Opened!
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-5 leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{submittedName}</span>. Your enquiry has been sent to our admissions team and WhatsApp has been opened with your prefilled details.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
              }}
              className="btn-gold text-xs py-2.5 px-6 font-semibold"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form id="lead-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-4">
            {serverError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
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
                  placeholder="Enter your full name"
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
                  Email *
                </label>
                <input
                  id="lead-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
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

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Phone *
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
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
                  placeholder="Enter your city"
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
                  Course *
                </label>
                <select
                  id="lead-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className={`input-premium bg-white cursor-pointer text-xs sm:text-sm ${
                    !form.course ? "text-gray-400" : "text-gray-900"
                  } ${
                    errors.course ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                >
                  <option value="" disabled hidden>
                    Select a course
                  </option>
                  {courseOptions.map((c) => (
                    <option key={c} value={c} className="text-gray-900">
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
                  Duration *
                </label>
                <select
                  id="lead-duration"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className={`input-premium bg-white cursor-pointer text-xs sm:text-sm ${
                    !form.duration ? "text-gray-400" : "text-gray-900"
                  } ${
                    errors.duration ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" : ""
                  }`}
                >
                  <option value="" disabled hidden>
                    Select duration
                  </option>
                  {durationOptions.map((d) => (
                    <option key={d} value={d} className="text-gray-900">
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

            {/* Message */}
            <div>
              <label
                htmlFor="lead-message"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Message
              </label>
              <textarea
                id="lead-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={2}
                placeholder="Tell us about your goals or questions..."
                className="textarea-premium min-h-[75px] text-xs sm:text-sm text-gray-900"
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
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
