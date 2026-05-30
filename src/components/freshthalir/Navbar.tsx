import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { ActionButtons } from "./ActionButtons";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/contact";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="FreshThalir logo"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition"
            />
            <div className="leading-tight">
              <div className="font-bold text-lg text-primary tracking-tight" style={{ fontFamily: "Fraunces, serif" }}>
                FreshThalir
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Fresh • Cut • Delivered
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="p-2 rounded-full hover:bg-secondary text-foreground/70 hover:text-primary transition">
              <Instagram size={18} />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="p-2 rounded-full hover:bg-secondary text-foreground/70 hover:text-primary transition">
              <Facebook size={18} />
            </a>
            <ActionButtons size="sm" />
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-3 border-t border-border">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-foreground/80 hover:text-primary py-1"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary"><Instagram size={18} /></a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary"><Facebook size={18} /></a>
                </div>
                <ActionButtons size="sm" className="pt-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
