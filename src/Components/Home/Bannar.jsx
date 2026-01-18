import React from "react";
import { Button } from "../ui/button";

const Bannar = () => {
  return (
    <section className="relative w-full md:max-w-10/12 min-h-[90vh] bg-background overflow-hidden border-y border-gray-100">
      {/* Background Decorative Elements (ইমেজের সেই ছোট ছোট আইকন ও ডটগুলোর জন্য) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* <div className="absolute top-10 left-10 w-20 h-20 border-4 border-dashed border-gray-800 rounded-full" /> */}
        <div className="absolute bottom-20 left-1/4 text-4xl">✏️</div>
        <div className="absolute top-1/2 left-10 text-4xl">💡</div>
        <div className="absolute top-20 right-1/3 text-4xl">🔍</div>
      </div>

      <div className="container min-h-[90vh] w-full md:max-w-10/12 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 py-20">
        {/* Left Content (Text Side) */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-gray-100 rounded-full">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-600">
              Special Offer
            </span>
          </div>

          <div className="relative inline-block">
            {/* Discount Label */}
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter bg-yellow-400 px-6 py-2 -rotate-2 inline-block">
              Discount
            </h1>
            <br />
            {/* Web Design Label */}
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter bg-black text-white px-6 py-2 rotate-1 inline-block mt-2">
              on our
            </h2>
            <br />
            {/* Course Label */}
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-black mt-4 ml-2 border-b-4 border-yellow-400 inline-block">
              products
            </h3>
          </div>

          {/* 40% OFF Circle */}
          <div className="flex items-center gap-6 mt-8">
            <div className="w-32 h-32 bg-yellow-400 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-xl rotate-12 transition-transform hover:scale-110">
              <span className="text-3xl font-black leading-none">40%</span>
              <span className="text-sm font-bold uppercase">Off</span>
            </div>

            <div className="max-w-[200px]">
              <p className="text-gray-600 font-medium">
                Explore our new product with our expert mentors.
              </p>
              <Button className="mt-4 bg-black text-white hover:bg-yellow-500 hover:text-black transition-all rounded-none px-8 font-bold">
                BUY NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content (Image Side with Organic Shape) */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Yellow Blob Behind Image */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />

          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] border-8 border-white shadow-2xl">
            {/* ইমেজ হিসেবে এখানে আপনার পছন্দমতো ছবি দিন */}
            <img
              src="https://i.ibb.co.com/cSz6dQkG/i-Phone-16-Plus-16-Pink-9850.webp"
              alt="Designer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Decorative Circles and Dots */}
          <div className="absolute -bottom-6 right-10 flex gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
