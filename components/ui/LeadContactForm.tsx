"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { courses } from "@/lib/data";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
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

const WHATSAPP_NUMBER = "919175386755";

export default function LeadContactForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || "General Career Counseling",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [redirecting, setRedirecting] = useState(false);
  const [success, setSuccess] = useState(false);

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
      errs.phone = "Phone / Mobile Number is required";
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setRedirecting(true);

    // Construct structured WhatsApp message
    const formattedMessage =
      `*New Inquiry — Youth Success Academy*\n\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📧 *Email:* ${form.email.trim()}\n` +
      `📱 *Phone:* ${form.phone.trim()}\n` +
      `🎓 *Course/Program:* ${form.course}\n` +
      (form.message.trim() ? `💬 *Message:* ${form.message.trim()}\n` : "") +
      `\nHello YSA Team, I would like to learn more and book a counseling session!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Open WhatsApp in new tab / application after short animation feedback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setRedirecting(false);
      setSuccess(true);
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-7 md:p-10 border border-gray-200/80 card-shadow relative overflow-hidden">
      {/* Top gold accent line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C9A558]" />

      <div className="mb-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-semibold uppercase tracking-wider mb-3">
          <WhatsAppIcon size={14} />
          Direct WhatsApp Connect
        </div>
        <h3
          className="text-2xl font-extrabold text-gray-900 leading-snug"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Book Your Free Session
        </h3>
        <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
          Fill in your details below to connect directly with our admissions team on WhatsApp.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {success ? (
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
              WhatsApp Launched!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
              We&apos;ve opened WhatsApp with your pre-filled inquiry. Click Send in WhatsApp to connect with our mentors instantly!
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  course: defaultCourse || "General Career Counseling",
                  message: "",
                });
              }}
              className="btn-outline text-xs py-2.5 px-6 font-semibold"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form id="lead-whatsapp-form" onSubmit={handleSubmit} noValidate className="space-y-5">
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
                Select Course / Interest *
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
                placeholder="Tell us about your background or specific questions..."
                className="textarea-premium min-h-[100px]"
              />
            </div>

            {/* Submit button -> Opens WhatsApp */}
            <button
              type="submit"
              disabled={redirecting}
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {redirecting ? (
                <span>Constructing WhatsApp Inquiry...</span>
              ) : (
                <>
                  <WhatsAppIcon size={20} />
                  <span>Submit &amp; Connect on WhatsApp</span>
                  <Send size={16} />
                </>
              )}
            </button>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5">
              <span>🔒 Your privacy is protected. No email service required.</span>
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
