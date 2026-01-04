import { useState } from "react";

import layla from "../assets/custom1.svg";
import omid from "../assets/custom2.svg";
import sara from "../assets/custom3.svg";
import ahmad from "../assets/custom4.svg";
import Nadia from "../assets/custom5.svg";
import Farid from "../assets/custom6.svg";

const testimonials = [
  {
    name: "Layla Rahimi",
    role: "Home Buyer",
    text: "The entire experience felt effortless and refined. From browsing to final selection, everything was perfectly structured.",
    img: layla,
  },
  {
    name: "Omid Nazari",
    role: "Investor",
    text: "A truly premium platform. The interface is intuitive, fast, and delivers exactly what modern users expect.",
    img: omid,
  },
  {
    name: "Sara Mohammadi",
    role: "Property Seeker",
    text: "Comparing properties was smooth and enjoyable. It saved me valuable time while giving me confidence in my choices.",
    img: sara,
  },
  {
    name: "Ahmad Karimi",
    role: "Real Estate Agent",
    text: "Elegant, professional, and trustworthy. I proudly recommend this platform to my clients.",
    img: ahmad,
  },
  {
    name: "Nadia Azimi",
    role: "Client",
    text: "Everything feels modern, clean and extremely easy to use. Highly recommended.",
    img: Nadia,
  },
  {
    name: "Farid Akbari",
    role: "Entrepreneur",
    text: "This platform reflects professionalism and attention to detail.",
    img: Farid,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#eaf6fb] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-24">
          Trusted by Professionals
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function TestimonialCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="group relative cursor-pointer
                 bg-white/40 backdrop-blur-2xl
                 border border-white/30
                 rounded-[2.5rem]
                 shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                 overflow-hidden
                 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                 hover:-translate-y-2"
    >
      {/* IMAGE */}
      <div
        className={`relative w-full
        transition-all duration-700 ease-in-out
        ${open ? "h-32" : "h-64"}`}
      >
        <img
          src={item.img}
          alt={item.name}
          className={`w-full h-full object-cover
          transition-all duration-700 ease-in-out
          ${open ? "scale-75 rounded-full mx-auto mt-6 w-28 h-28" : ""}`}
        />

        {/* GLASS OVERLAY */}
        {!open && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{item.role}</p>

        <div
          className={`transition-all duration-700 ease-out
          ${
            open
              ? "opacity-100 translate-y-0 blur-0 max-h-40"
              : "opacity-0 translate-y-6 blur-sm max-h-0 overflow-hidden"
          }`}
        >
          <p className="text-gray-700 text-sm leading-relaxed">“{item.text}”</p>
        </div>
      </div>
    </div>
  );
}
