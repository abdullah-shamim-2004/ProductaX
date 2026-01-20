import Bannar from "@/components/Home/Bannar";
import BestSellingSection from "@/components/Home/BestSellingSection";
import Feauture from "@/components/Home/Feauture";
import NewsletterSection from "@/components/Home/NewsletterSection";
import OffersSection from "@/components/Home/OffersSection";
import ProductOverview from "@/components/Home/ProductOverview";
import TestimonialsMetrics from "@/components/Home/TestimonialsMetrics";

export default function Home() {
  return (
    <div className="font-sans bg-white text-slate-900">
      {/* Full width hero */}
      <Bannar />

      {/* Content sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="space-y-28">
          <ProductOverview />
          <BestSellingSection />
          <Feauture />
          <OffersSection />
          <TestimonialsMetrics />
          <NewsletterSection />
          <div className="h-px bg-slate-100 my-28" />
        </section>
      </main>
    </div>
  );
}
