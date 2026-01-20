const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Free shipping on all orders over $100",
  },
  {
    icon: "🛡️",
    title: "Secure Payment",
    desc: "100% secure payment processing",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    desc: "30-day money-back guarantee",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    desc: "Dedicated support anytime you need",
  },
];

const Feature = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Why Choose ProductaX
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experience seamless shopping with premium services designed for you
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100
                         shadow-sm hover:shadow-xl transition-all duration-300
                         hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br 
                              from-indigo-500/10 via-transparent to-purple-500/10
                              opacity-0 group-hover:opacity-100 transition"
              />

              {/* Icon */}
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center
                           bg-indigo-50 text-3xl mb-6
                           group-hover:scale-110 transition-transform"
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
