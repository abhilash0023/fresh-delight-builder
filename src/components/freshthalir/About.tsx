import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Sprout, Clock, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: Sprout, title: "Farm-fresh sourcing", desc: "Direct from local Chennai farms — picked the same morning." },
  { icon: ShieldCheck, title: "Hygiene first", desc: "Triple-washed, hand-cut, and packed in food-grade containers." },
  { icon: Clock, title: "Daily delivery", desc: "Place an order by 8 PM, get it the next morning at your door." },
  { icon: HeartHandshake, title: "Trusted by 2,000+ homes", desc: "A neighborhood favorite for healthy, time-saving meals." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-fresh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Why FreshThalir</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              A garden in your kitchen,<br /> without the chopping.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We started FreshThalir to make healthy eating effortless for busy Chennai families.
              From farm to your kitchen in under 24 hours — washed, cut and ready.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: 2000, s: "+", l: "Happy homes" },
                { v: 500, s: "+", l: "Daily deliveries" },
                { v: 50, s: "+", l: "Fresh items" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-card border border-border p-4 text-center shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "Fraunces, serif" }}>
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-soft transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <b.icon size={20} />
                </div>
                <h3 className="font-bold">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
