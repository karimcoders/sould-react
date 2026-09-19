import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SERVICES_DATA } from "../../data";

interface ProposalFormProps {
  onSuccess?: () => void;
  preselectedService?: string;
}

export default function ProposalForm({
  onSuccess,
  preselectedService,
}: ProposalFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service:
      preselectedService ?? SERVICES_DATA[0]?.title ?? "Website Development",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hello@soulddigitalmarketing.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
          }),
        },
      );

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setSubmitted(true);
        onSuccess?.();
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
          Proposal Request Received
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
          Thank you{formData.name ? `, ${formData.name}` : ""}. Soul-D will
          review your requirements and contact you at{" "}
          {formData.email || formData.phone}.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);

            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service:
  preselectedService ??
  SERVICES_DATA[0]?.title ??
  "Website Development",
              budget: "",
              message: "",
            });
          }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
          Get Custom Proposal
        </h3>

        <p className="text-base text-slate-500">
          Tell us what you need and we will prepare a clear next-step plan.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="proposal-name"
            className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Full Name *
          </label>

          <input
            id="proposal-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="proposal-email"
            className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Email Address *
          </label>

          <input
            id="proposal-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="proposal-phone"
            className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Phone Number *
          </label>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0555F0]" />

            <input
              id="proposal-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+91 9866500578"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="proposal-company"
            className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Company / Brand
          </label>

          <input
            id="proposal-company"
            type="text"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="proposal-service"
          className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Service *
        </label>

        <select
          id="proposal-service"
          required
          value={formData.service}
          onChange={(e) => updateField("service", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
        >
          {SERVICES_DATA.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="proposal-budget"
          className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Estimated Budget (INR)
        </label>

        <input
          id="proposal-budget"
          type="text"
          inputMode="numeric"
          value={formData.budget}
          onChange={(e) => updateField("budget", e.target.value)}
          placeholder="e.g. 50000"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="proposal-message"
          className="block text-base font-bold uppercase tracking-wider text-slate-700 mb-2"
        >
          Project Details *
        </label>

        <textarea
          id="proposal-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Tell us about your goals, audience, deliverables, and any launch deadlines."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0555F0] hover:bg-[#0444C0] text-white font-bold text-sm py-4 shadow-lg shadow-indigo-600/25 transition-all"
      >
        <Send className="w-4 h-4" />

        <span className="text-lg font-bold uppercase">Submit Your Request</span>
      </button>
    </form>
  );
}
