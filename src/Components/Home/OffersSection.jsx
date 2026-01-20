// components/OffersSection.jsx
import { offers } from "@/data/offers";
import Image from "next/image";
// import { offers } from "@/data/offers";

export default function OffersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hot Deals & Special Offers
            </h2>
            <p className="text-gray-600 mt-3">
              Don’t miss out on limited-time deals on your favorite products
            </p>
          </div>

          <button className="mt-6 md:mt-0 border border-black px-6 py-2 rounded-xl hover:bg-black hover:text-white transition">
            View All Deals
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* Background Image */}
              <div className="relative h-80">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="inline-block bg-white text-black text-sm font-semibold px-4 py-1 rounded-full w-fit mb-3">
                  {offer.discount}
                </span>

                <h3 className="text-2xl font-bold">{offer.title}</h3>
                <p className="text-sm mt-2 opacity-90">{offer.description}</p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-sm text-yellow-300">
                    ⏰ {offer.expiry}
                  </span>
                  <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
                    {offer.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
