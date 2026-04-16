import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please include a short message.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Please share a little more detail so Jeremy can help.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialState);
  };

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div className="glass-panel h-full rounded-[2.6rem] p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Ready to explore music therapy support?"
              description="Jeremy welcomes enquiries from private clients, parents, support coordinators, and healthcare professionals."
            />

            <div className="mt-8 space-y-5">
              <a
                href="tel:0413548223"
                className="flex items-center gap-4 rounded-[1.5rem] border border-sand-200 bg-white/70 p-4 transition hover:border-sky-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-ocean-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-100">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-ink-700 dark:text-white/60">Phone</p>
                  <p className="font-semibold text-ink-900 dark:text-white">
                    0413 548 223
                  </p>
                </div>
              </a>

              <a
                href="mailto:jeremyyyau@hotmail.com"
                className="flex items-center gap-4 rounded-[1.5rem] border border-sand-200 bg-white/70 p-4 transition hover:border-sky-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-ocean-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 dark:bg-ocean-500/15 dark:text-ocean-100">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-ink-700 dark:text-white/60">Email</p>
                  <p className="font-semibold text-ink-900 dark:text-white">
                    jeremyyyau@hotmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel rounded-[2.6rem] p-8">
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-ink-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="input-base"
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-sm text-rose-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-ink-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="input-base"
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-sm text-rose-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-ink-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="input-base resize-none"
                  placeholder="How can Jeremy support you or the person you’re enquiring for?"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-sm text-rose-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean-700 dark:bg-ocean-500 dark:hover:bg-ocean-400"
              >
                Send Enquiry
              </button>

              {isSubmitted ? (
                <p
                  className="rounded-2xl bg-ocean-50 px-4 py-3 text-sm text-ocean-700 dark:bg-ocean-500/12 dark:text-ocean-100"
                  role="status"
                >
                  Thanks for your message. This demo form validates input and is
                  ready to connect to your preferred backend or form service.
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
