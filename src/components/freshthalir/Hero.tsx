import { motion } from "framer-motion";
import { Sparkles, Leaf, Truck } from "lucide-react";
import heroImg from "@/assets/hero-produce.jpg";
import { ActionButtons } from "./ActionButtons";

const floatItems = ["🥕", "🥬", "🍅", "🥒", "🌽", "🥦", "🍎", "🍋"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-fresh pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Floating produce emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {floatItems.map((e, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-5xl opacity-30"
            style={{
              left: `${(i * 13 + 5) % 95}%`,
              top: `${(i * 17 + 10) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -10, 0],
            }}
            transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            {e}
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
            <Sparkles size={14} /> Chennai's freshest doorstep delivery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Freshly cut <span className="text-primary">vegetables</span> &{" "}
            <span className="text-accent">fruits</span> — delivered to your door.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Hand-picked at dawn, washed, chopped and packed with care.
            FreshThalir brings garden-fresh produce to Chennai homes — every single day.
          </p>

          <div className="mt-8">
            <ActionButtons size="lg" />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: Leaf, label: "100% Fresh", sub: "Daily harvest" },
              { icon: Truck, label: "Free Delivery", sub: "Across Chennai" },
              { icon: Sparkles, label: "Pre-cut", sub: "Ready to cook" },
            ].map((f) => (
              <div key={f.label} className="text-center">
                <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-1.5">
                  <f.icon size={18} />
                </div>
                <div className="text-sm font-semibold">{f.label}</div>
                <div className="text-xs text-muted-foreground">{f.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-hero rounded-[2.5rem] blur-3xl opacity-30" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft ring-1 ring-border">
            <img
              src={heroImg}
              alt="Fresh assortment of vegetables and fruits"
              width={1920}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-5 -left-5 bg-card rounded-2xl shadow-soft px-5 py-3.5 flex items-center gap-3 border border-border"
          >
            <div className="text-2xl">⭐</div>
            <div>
              <div className="text-sm font-bold">4.9 / 5</div>
              <div className="text-xs text-muted-foreground">2,000+ happy families</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
