import { Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { ActionButtons } from "./ActionButtons";
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="FreshThalir" className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-bold text-xl" style={{ fontFamily: "Fraunces, serif" }}>FreshThalir</div>
                <div className="text-xs opacity-70">Fresh cut vegetables • Home delivery</div>
              </div>
            </div>
            <p className="mt-5 text-sm opacity-75 max-w-md">
              Bringing farm-fresh, pre-cut vegetables and fruits to homes across Chennai —
              every single day, with care.
            </p>
            <div className="mt-6">
              <ActionButtons size="md" variant="light" />
            </div>
          </div>

          <div>
            <div className="font-bold mb-4">Explore</div>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li><a href="#home" className="hover:text-primary-glow transition">Home</a></li>
              <li><a href="#products" className="hover:text-primary-glow transition">Products</a></li>
              <li><a href="#about" className="hover:text-primary-glow transition">About</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-4">Contact</div>
            <ul className="space-y-2.5 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" /> Chennai, Tamil Nadu
              </li>
              <li><a href={`tel:+91${PHONE}`} className="hover:text-primary-glow">+91 {PHONE}</a></li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition">
                <Instagram size={18} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/15 text-xs opacity-60 flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} FreshThalir. All rights reserved.</div>
          <div>Made with 🌱 in Chennai</div>
        </div>
      </div>
    </footer>
  );
}
