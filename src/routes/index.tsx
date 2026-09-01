import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/bronuts/Navbar";
import { Hero } from "@/components/bronuts/Hero";
import { BentoMenu } from "@/components/bronuts/BentoMenu";
import { Showcase } from "@/components/bronuts/Showcase";
import { Testimonials } from "@/components/bronuts/Testimonials";
import { Marquee } from "@/components/bronuts/Marquee";
import { OrderForm } from "@/components/bronuts/OrderForm";
import { Footer } from "@/components/bronuts/Footer";

const title = "BRONUTS — Gourmet Handmade Donuts & Specialty Coffee";
const description =
  "Small-batch brioche donuts, hand-poured artisanal glazes and specialty coffee. Rated 4.9 stars from 185+ Google reviews. Order pickup or delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <Hero />
      <BentoMenu />
      <Showcase />
      <Testimonials />
      <Marquee />
      <OrderForm />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "BRONUTS",
            servesCuisine: ["Donuts", "Coffee"],
            address: { "@type": "PostalAddress", streetAddress: "128 Warren Street" },
            telephone: "(555) 019-2288",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "185",
            },
          }),
        }}
      />
    </main>
  );
}
