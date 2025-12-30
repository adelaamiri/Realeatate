import React from "react";

import img1 from "../assets/pic1.svg";
import img2 from "../assets/pic2.svg";
import img3 from "../assets/pic3.svg";
import img4 from "../assets/pic4.svg";

export default function ExclusiveProperties() {
  return (
    <section className="bg-[#eaf6fb] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl  text-black font-bold mb-3">
            Exclusive Properties
          </h2>
          <p className="text-gray-600">
            Lorem ipsum sit amet, consectetur adipiscing
          </p>
        </div>

        {/* Grid */}
        <div className="bg-[#eaf6fb] rounded-3xl p-8 grid lg:grid-cols-3 gap-6">
          {/* Left big */}
          <div className="lg:row-span-2 overflow-hidden rounded-2xl">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Top right */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={img2}
              alt=""
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={img3}
              alt=""
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom right big */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl">
            <img
              src={img4}
              alt=""
              className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
