import React from "react";
import { BedDouble, Square } from "lucide-react";

import villa1 from "../assets/photo4.svg";
import villa2 from "../assets/photo5.svg";
import villa3 from "../assets/photo6.svg";

export default function PropertyListing() {
  return (
    <section className="bg-[#eaf6fb] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl  text-black font-bold mb-14">
          Latest property listing
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: villa1,
              price: "$ 66,000",
              title: "Modern Villa",
              beds: "3 Beds",
              size: "210 m²",
              tag: "For Sell",
            },
            {
              img: villa2,
              price: "$ 70,000",
              title: "Villa in New York",
              beds: "4 Beds",
              size: "320 m²",
              tag: "Rent",
            },
            {
              img: villa3,
              price: "$ 50,000",
              title: "Forest House",
              beds: "2 Beds",
              size: "180 m²",
              tag: "Buy",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/40 rounded-2xl shadow-lg overflow-hidden
                         transition-all duration-500 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl  text-black font-bold mb-1">
                  {item.price}
                </h3>
                <p className="text-gray-600 mb-4">{item.title}</p>

                {/* specs */}
                <div className="flex items-center gap-6 text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <BedDouble size={18} /> {item.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={18} /> {item.size}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span
                    className="px-4 py-1 text-sm text-black rounded-full
                               backdrop-blur-md bg-white/60
                               border border-gray-200 shadow"
                  >
                    {item.tag}
                  </span>

                  <button
                    className="px-4 py-1 text-sm text-black rounded-full
                               backdrop-blur-md bg-white/60
                               border border-gray-200 shadow
                               hover:bg-white/90 transition"
                  >
                    More
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
