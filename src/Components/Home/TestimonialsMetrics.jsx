"use client";

import React from "react";
import { FaStar, FaUsers, FaUserNurse, FaSmile } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahima Akter",
    role: "Mother",
    feedback:
      "Care.io helped me find a reliable babysitter within hours. I finally feel safe leaving my child at home.",
    rating: 5,
  },
  {
    name: "Abdul Karim",
    role: "Son of Elderly Patient",
    feedback:
      "Professional caregivers and excellent service. My father is receiving proper care every day.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Working Professional",
    feedback:
      "Very trustworthy platform. Booking was simple and the caregiver was well trained.",
    rating: 4,
  },
];

const TestimonialsMetrics = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Trusted by <span className="text-indigo-600">Thousands</span>
          </h2>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Families across the country rely on Care.io for safe, reliable, and
            professional caregiving services.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <FaUsers />, label: "Happy Families", value: "10k+" },
            {
              icon: <FaUserNurse />,
              label: "Verified Caregivers",
              value: "2k+",
            },
            { icon: <FaStar />, label: "Average Rating", value: "4.8" },
            { icon: <FaSmile />, label: "Successful Bookings", value: "15k+" },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 text-center border border-slate-100
                         shadow-sm hover:shadow-xl transition-all duration-300
                         hover:-translate-y-2"
            >
              <div
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                           rounded-2xl bg-indigo-50 text-indigo-600 text-2xl
                           group-hover:scale-110 transition"
              >
                {item.icon}
              </div>
              <p className="text-sm text-slate-500">{item.label}</p>
              <h3 className="text-3xl font-extrabold text-slate-900 mt-2">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/70 backdrop-blur rounded-[2.5rem]
                         border border-slate-100 p-8 shadow-sm
                         hover:shadow-xl transition-all duration-300
                         hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-slate-600 leading-relaxed italic">
                “{t.feedback}”
              </p>

              {/* User */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="font-semibold text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMetrics;
