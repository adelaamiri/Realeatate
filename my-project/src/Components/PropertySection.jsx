import { useState } from "react";

import house1 from "../assets/photo1.svg";
import house2 from "../assets/photo2.svg";
import house3 from "../assets/photo3.svg";

import { FaBath, FaBed, FaHeart } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";

export default function PropertySection() {
  const data = [
    { img: house1, price: "$ 66,000", title: "Modern Villa" },
    { img: house2, price: "$ 70,000", title: "Villa in New York" },
    { img: house3, price: "$ 50,000", title: "Forest House" },
    { img: house1, price: "$ 82,000", title: "Luxury Apartment" },
    { img: house2, price: "$ 91,000", title: "City View House" },
    { img: house3, price: "$ 58,000", title: "Countryside Home" },
  ];

  const loopData = [...data, ...data];

  const [favorites, setFavorites] = useState(
    Array(loopData.length).fill(false)
  );

  const toggleFavorite = (index) => {
    setFavorites((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
  };

  return (
    <section className="py-24 bg-[#F3FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <h2 className="text-4xl font-semibold text-gray-800">
          Property Details
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl">
          Explore premium properties with smooth horizontal navigation and
          infinite scrolling experience.
        </p>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative w-full overflow-hidden">
        {/* ⬇️ hover باعث توقف انیمیشن می‌شود */}
        <div className="flex gap-8 slider-track hover:paused">
          {loopData.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[340px] lg:min-w-[360px]
                         bg-white/70 backdrop-blur-xl
                         rounded-3xl p-4
                         border border-white/40 shadow-lg
                         relative"
            >
              {/* ❤️ FAVORITE */}
              <button
                onClick={() => toggleFavorite(index)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full
                           bg-white/80 backdrop-blur-md
                           flex items-center justify-center
                           z-10"
              >
                <FaHeart
                  className={`transition ${
                    favorites[index] ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="rounded-2xl w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.price}
                </h3>
                <p className="text-gray-700">{item.title}</p>

                <div className="flex gap-6 text-gray-600 text-sm mt-3">
                  <span className="flex items-center gap-1">
                    <FaBath /> 2
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBed /> 4
                  </span>
                  <span className="flex items-center gap-1">
                    <MdOutlineSquareFoot /> 3.4m
                  </span>
                </div>

                {/* BUTTONS – Liquid Glass */}
                <div className="flex gap-3 mt-5">
                  <button
                    className="px-5 py-2 rounded-full text-sm font-medium
                               text-gray-900
                               bg-white/50 backdrop-blur-md
                               border border-white/70
                               hover:bg-white/80 transition"
                  >
                    For Sell
                  </button>

                  <button
                    className="px-5 py-2 rounded-full text-sm font-medium
                               text-gray-900
                               bg-white/40 backdrop-blur-md
                               border border-white/70
                               hover:bg-white/70 transition"
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          .slider-track {
            animation: scroll 35s linear infinite;
            width: max-content;
          }

          /* ⛔ توقف هنگام hover */
          .slider-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}
