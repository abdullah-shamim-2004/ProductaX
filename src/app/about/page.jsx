import React from "react";
import Image from "next/image";
import { ShieldCheck, Truck, Globe, Zap, Users, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen mt-25">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Our Mission
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between innovation and everyday life by providing
            the world most advanced tech gadgets under one roof.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
              alt="Technology and Collaboration"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="space-y-8">
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              Established 2024
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Redefining the Digital <br /> Shopping Experience
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded in 2024, **Productax** began with a simple idea:
              high-quality technology should be accessible to everyone. We vet
              every single product to ensure it meets our rigorous standards for
              performance, design, and durability.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="font-black text-3xl text-slate-900">99.9%</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Customer Satisfaction
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-3xl text-slate-900">24h</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Average Dispatch Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Core Values
            </h2>
            <p className="text-slate-500">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
                title: "Authenticity",
                desc: "We only source 100% original products directly from verified manufacturers and global brands.",
              },
              {
                icon: <Zap className="w-10 h-10 text-indigo-600" />,
                title: "Innovation",
                desc: "We stay ahead of the curve by constantly updating our inventory with the latest tech trends.",
              },
              {
                icon: <Users className="w-10 h-10 text-indigo-600" />,
                title: "Community",
                desc: "Our customers are our priority. We listen, adapt, and grow based on your valuable feedback.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="font-bold text-2xl text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">
              Ready to Upgrade Your Life?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of tech enthusiasts who trust Productax for their
              daily essentials and professional gear.
            </p>
            <button className="bg-white text-indigo-600 font-bold px-12 py-5 rounded-2xl hover:bg-slate-100 transition-all transform hover:scale-105 relative z-10">
              Browse Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
