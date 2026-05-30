import { motion } from "framer-motion";
import { useState } from "react";
import { ActionButtons } from "./ActionButtons";

interface Product {
  name: string;
  emoji: string;
  desc: string;
  category: "Vegetables" | "Leafy Greens" | "Fruits" | "Combo Packs";
  tint: string;
}

const PRODUCTS: Product[] = [
  { name: "Mixed Veg Cut Pack", emoji: "🥕", desc: "Carrots, beans, peas — chopped fresh", category: "Vegetables", tint: "from-orange-100 to-orange-50" },
  { name: "Cucumber & Tomato", emoji: "🥒", desc: "Sliced for salads & raita", category: "Vegetables", tint: "from-green-100 to-lime-50" },
  { name: "Sambar Mix", emoji: "🍅", desc: "Drumstick, brinjal, pumpkin", category: "Vegetables", tint: "from-red-100 to-orange-50" },
  { name: "Spinach Bundle", emoji: "🥬", desc: "Cleaned & ready to cook", category: "Leafy Greens", tint: "from-green-100 to-emerald-50" },
  { name: "Curry Leaves & Coriander", emoji: "🌿", desc: "Sorted & washed daily", category: "Leafy Greens", tint: "from-emerald-100 to-green-50" },
  { name: "Drumstick Leaves", emoji: "🍃", desc: "Iron-rich, farm fresh", category: "Leafy Greens", tint: "from-lime-100 to-green-50" },
  { name: "Mango (Alphonso)", emoji: "🥭", desc: "Sweet, seasonal, ripe", category: "Fruits", tint: "from-yellow-100 to-orange-50" },
  { name: "Banana Combo", emoji: "🍌", desc: "Robusta + yelakki", category: "Fruits", tint: "from-yellow-100 to-amber-50" },
  { name: "Watermelon Cubes", emoji: "🍉", desc: "Pre-cut, chilled", category: "Fruits", tint: "from-rose-100 to-red-50" },
  { name: "Family Weekly Box", emoji: "🧺", desc: "12 veggies + 4 fruits", category: "Combo Packs", tint: "from-primary/15 to-primary/5" },
  { name: "Healthy Snack Box", emoji: "🥗", desc: "Salad veggies + fruits cut", category: "Combo Packs", tint: "from-lime-100 to-green-50" },
  { name: "Juice Lover Pack", emoji: "🧃", desc: "Carrot, beet, apple, ginger", category: "Combo Packs", tint: "from-pink-100 to-rose-50" },
];

const CATEGORIES = ["All", "Vegetables", "Leafy Greens", "Fruits", "Combo Packs"] as const;

export function Products() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Our Range</div>
          <h2 className="text-3xl md:text-5xl font-bold">Cut, washed, and ready to cook</h2>
          <p className="mt-4 text-muted-foreground">
            Choose from a wide range of pre-cut vegetables, leafy greens, fruits and curated combo packs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {filtered.map((p, i) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-soft transition-all"
            >
              <div className={`aspect-square bg-gradient-to-br ${p.tint} flex items-center justify-center relative`}>
                <motion.span
                  className="text-7xl md:text-8xl"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {p.emoji}
                </motion.span>
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wide uppercase px-2 py-1 rounded-full bg-white/80 text-foreground backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 rounded-3xl bg-gradient-hero text-primary-foreground p-8 md:p-12 text-center shadow-soft">
          <h3 className="text-2xl md:text-3xl font-bold">Don't see what you need?</h3>
          <p className="mt-2 opacity-90 max-w-xl mx-auto">
            Message us on WhatsApp with your list — we'll source it fresh and deliver tomorrow.
          </p>
          <div className="mt-6 flex justify-center">
            <ActionButtons size="lg" variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
