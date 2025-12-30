import React from "react";
import bg from "../assets/bg2.svg";
import avatar from "../assets/Ellipse 979.svg";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function JoinTeamSection() {
  return (
    <section className="w-full bg-[#eaf6fb] pt-16">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 flex items-center gap-6">
        <img
          src={avatar}
          alt="Team"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 className="text-3xl text-black font-bold">Jion Our Team</h2>
      </div>

      {/* Card */}
      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        <div
          className="relative bg-cover bg-center rounded-3xl overflow-hidden min-h-[420px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

          <div className="relative z-10 px-12 py-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow">
                  🏢
                </div>
                <h3 className="text-3xl  text-black font-bold">
                  Read to Get Started
                </h3>
              </div>

              <p className="text-gray-700 max-w-md mb-10 text-lg">
                If there are question you want to ask,
                <br />
                we will answer all your question.
              </p>

              <div className="flex gap-5">
                <button className="px-10 py-2 rounded-full text-black backdrop-blur-md bg-white/70 border border-white/40 shadow hover:bg-white transition">
                  Login
                </button>
                <button className="px-10 py-2 rounded-full  text-black backdrop-blur-md bg-white/70 border border-white/40 shadow hover:bg-white transition">
                  Dashboard
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6 text-gray-800 text-lg">
              <p className="max-w-sm">
                If you have any question,
                <br />
                dont hesitate to contact us
              </p>

              <div className="flex items-center gap-3">
                <MdEmail className="text-xl" />
                <span>email@domin.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg" />
                <span>+7009536789</span>
              </div>

              <div className="flex items-center gap-3">
                <MdLocationOn className="text-xl" />
                <span>Afghanistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
