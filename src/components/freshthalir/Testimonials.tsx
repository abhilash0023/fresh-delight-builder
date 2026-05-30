import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Priya R.", area: "Adyar", text: "The quality is amazing! Vegetables are so fresh and pre-cutting saves me so much time every morning.", rating: 5 },
  { name: "Karthik S.", area: "Anna Nagar", text: "We've been ordering for 6 months. Never had a bad batch. The combo packs are great value.", rating: 5 },
  { name: "Lakshmi V.", area: "Velachery", text: "Love how the leafy greens come properly washed. My amma approves — and that's saying something!", rating: 5 },
  { name: "Arjun M.", area: "T. Nagar", text: "WhatsApp ordering is so easy. They reply instantly and deliver right on time.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Loved by Chennai</div>
          <h2 className="text-3xl md:text-5xl font-bold">Stories from our customers</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="flex gap-0.5 text-accent mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.area}, Chennai</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
