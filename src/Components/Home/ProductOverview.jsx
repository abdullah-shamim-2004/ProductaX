import Image from "next/image";
import Link from "next/link";

// Dummy data for Tech Categories
const techCategories = [
  {
    id: "electronics",
    title: "Premium Electronics",
    description:
      "Explore high-end gadgets, from noise-canceling headphones to smart home hubs.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "wearables",
    title: "Smart Wearables",
    description:
      "Stay connected on the go with our latest collection of smartwatches and fitness trackers.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: "accessories",
    title: "Essential Gear",
    description:
      "The best mechanical keyboards, mice, and desk accessories to boost your productivity.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
  },
];

const ProductOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-slate-500 text-lg">
            Carefully curated tech collections designed to enhance your digital
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-transparent hover:border-indigo-100 hover:bg-white transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  fill
                  src={category.image}
                  alt={category.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={"/products"}
                  className="inline-block bg-white text-slate-900 border border-slate-200 font-bold px-8 py-3 rounded-2xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
