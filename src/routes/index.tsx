import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/freshthalir/Navbar";
import { Hero } from "@/components/freshthalir/Hero";
import { Products } from "@/components/freshthalir/Products";
import { About } from "@/components/freshthalir/About";
import { Testimonials } from "@/components/freshthalir/Testimonials";
import { Contact } from "@/components/freshthalir/Contact";
import { Footer } from "@/components/freshthalir/Footer";
import { FloatingActions } from "@/components/freshthalir/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreshThalir — Fresh Cut Vegetables & Fruits Delivered in Chennai" },
      { name: "description", content: "FreshThalir delivers farm-fresh, pre-cut vegetables, leafy greens and fruits to homes across Chennai. Order on WhatsApp — washed, chopped, ready to cook." },
      { property: "og:title", content: "FreshThalir — Fresh Cut Vegetables & Fruits Delivered in Chennai" },
      { property: "og:description", content: "Farm-fresh, pre-cut vegetables and fruits delivered daily across Chennai. Order on WhatsApp today." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
