import { Phone, MessageCircle } from "lucide-react";
import { TEL_URL, WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "light";
}

export function ActionButtons({ size = "md", className, variant = "default" }: Props) {
  const sizes = {
    sm: "px-3 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };
  const icon = size === "lg" ? 20 : size === "md" ? 18 : 16;

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold bg-whatsapp text-white shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:scale-95",
          sizes[size]
        )}
      >
        <MessageCircle size={icon} fill="currentColor" />
        WhatsApp
      </a>
      <a
        href={TEL_URL}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95",
          variant === "light"
            ? "bg-white/15 text-white backdrop-blur border border-white/30 hover:bg-white/25"
            : "bg-foreground text-background hover:opacity-90",
          sizes[size]
        )}
      >
        <Phone size={icon} fill="currentColor" />
        Call Us
      </a>
    </div>
  );
}
