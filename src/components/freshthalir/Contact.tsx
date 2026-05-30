import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { ActionButtons } from "./ActionButtons";
import { PHONE, WHATSAPP_URL } from "@/lib/contact";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi FreshThalir!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/919840120212?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-fresh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Get in touch</div>
          <h2 className="text-3xl md:text-5xl font-bold">Order today, eat fresh tomorrow</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-card border border-border p-7 shadow-soft"
          >
            <h3 className="text-xl font-bold mb-5">Send us a message</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground/70">Your name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Priya"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="98xxxxxxxx"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70">What would you like to order?</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="2kg carrot cut, 1kg spinach, mango..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary text-primary-foreground font-semibold py-3.5 hover:bg-primary/90 active:scale-95 transition shadow-soft"
              >
                Send via WhatsApp
              </button>
              {sent && (
                <p className="text-xs text-primary text-center">Opening WhatsApp...</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-7 shadow-soft">
              <h3 className="text-xl font-bold mb-1">Talk to us directly</h3>
              <p className="text-sm opacity-90">Fastest way to place an order or ask anything.</p>
              <div className="mt-5">
                <ActionButtons size="lg" variant="light" />
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border p-7 shadow-sm space-y-4">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-bold">We deliver across</div>
                  <div className="text-sm text-muted-foreground">Chennai, Tamil Nadu</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold">Call</div>
                  <a href={`tel:+91${PHONE}`} className="text-sm text-muted-foreground hover:text-primary">
                    +91 {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-bold">WhatsApp anytime</div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                    Chat with our team
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
