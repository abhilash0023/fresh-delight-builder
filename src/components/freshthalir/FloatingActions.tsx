import { MessageCircle, Phone } from "lucide-react";
import { TEL_URL, WHATSAPP_URL } from "@/lib/contact";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 md:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-soft active:scale-95"
      >
        <MessageCircle size={26} fill="currentColor" />
      </a>
      <a
        href={TEL_URL}
        aria-label="Call"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-soft active:scale-95"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
}
