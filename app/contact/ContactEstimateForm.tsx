"use client";

import { useMemo, useState } from "react";

type EstimateFormState = {
  name: string;
  phone: string;
  city: string;
  service: string;
  details: string;
};

const initialFormState: EstimateFormState = {
  name: "",
  phone: "",
  city: "",
  service: "Fence staining",
  details: "",
};

const ronPhone = "6154038347";
const mattPhone = "6154796691";

function buildMessage(form: EstimateFormState) {
  const lines = [
    "Free estimate request from stonemanservicestn.com",
    `Name: ${form.name || "Not provided"}`,
    `Phone: ${form.phone || "Not provided"}`,
    `City/area: ${form.city || "Not provided"}`,
    `Service: ${form.service || "Not provided"}`,
    `Project details: ${form.details || "Not provided"}`,
  ];

  return lines.join("\n");
}

export default function ContactEstimateForm() {
  const [form, setForm] = useState(initialFormState);

  const message = useMemo(() => buildMessage(form), [form]);
  const textHref = `sms:${ronPhone}?&body=${encodeURIComponent(message)}`;

  function updateField(field: keyof EstimateFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <p className="text-gray-500 text-sm mb-5">
        Tell us what you need and this form will open a ready-to-send text message to Ron.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-800"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-800"
            placeholder="Best callback number"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
            City or area
          </label>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-800"
            placeholder="Nashville, Franklin, Brentwood..."
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
            Service
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-800 bg-white"
          >
            <option>Fence staining</option>
            <option>Deck sealing</option>
            <option>Fence or deck cleaning</option>
            <option>Driveway cleaning</option>
            <option>Other outdoor project</option>
          </select>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-1">
            Project details
          </label>
          <textarea
            id="details"
            value={form.details}
            onChange={(event) => updateField("details", event.target.value)}
            className="w-full min-h-28 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-800"
            placeholder="Tell us what needs cleaned, stained, sealed, or repaired."
          />
        </div>

        <a
          href={textHref}
          className="block w-full rounded-full px-6 py-4 text-center font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#8B5E3C" }}
        >
          Text Estimate Request
        </a>
      </form>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-center text-sm">
        <a
          href={`tel:${ronPhone}`}
          className="rounded-full border-2 px-4 py-3 font-semibold transition-colors"
          style={{ borderColor: "#1B4332", color: "#1B4332" }}
        >
          Call Ron
        </a>
        <a
          href={`tel:${mattPhone}`}
          className="rounded-full border-2 px-4 py-3 font-semibold transition-colors"
          style={{ borderColor: "#1B4332", color: "#1B4332" }}
        >
          Call Matt
        </a>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        Prefer not to text? Call Ron or Matt directly. We are friendly and happy to answer questions.
      </p>
    </div>
  );
}
