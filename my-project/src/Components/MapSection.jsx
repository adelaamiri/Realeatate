import { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import bg from "../assets/sec3.svg";

import {
  FaHome,
  FaBuilding,
  FaHospital,
  FaSchool,
  FaTree,
  FaShoppingCart,
  FaDumbbell,
  FaSearch,
} from "react-icons/fa";

const properties = [
  {
    city: "Kabul",
    price: "$320,000",
    position: { lat: 34.5553, lng: 69.2075 },
  },
  {
    city: "Herat",
    price: "$650,000",
    position: { lat: 34.3529, lng: 62.204 },
  },
];

export default function MapSection() {
  const [search, setSearch] = useState("");

  const filtered = properties.filter((p) =>
    p.city.toLowerCase().includes(search.toLowerCase())
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  return (
    <section className="relative py-24">
      <div
        className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "650px",
        }}
      >
        <div className="absolute inset-0 bg-white/45"></div>

        <div className="relative z-10 grid lg:grid-cols-2 h-full">
          {/* -------- LEFT PANEL -------- */}
          <div className="p-8 lg:p-12 text-gray-800">
            <h2 className="text-3xl font-semibold mb-6">Property Type</h2>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: <FaBuilding />, label: "Apartment" },
                { icon: <FaHome />, label: "Villa" },
                { icon: <FaTree />, label: "Land" },
                { icon: <FaBuilding />, label: "Office" },
              ].map((item, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-full
                             border border-white/50 backdrop-blur-md
                             hover:bg-white/40 transition"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4">Nearby</h3>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: <FaSchool />, label: "School" },
                { icon: <FaTree />, label: "Park" },
                { icon: <FaHospital />, label: "Hospital" },
                { icon: <FaShoppingCart />, label: "Supermarket" },
                { icon: <FaDumbbell />, label: "Gym" },
              ].map((item, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-full
                             border border-white/50 backdrop-blur-md
                             hover:bg-white/40 transition"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            <button className="px-8 py-3 rounded-full border border-white/60 hover:bg-white/40 transition">
              Send Message
            </button>
          </div>

          {/* -------- MAP PANEL -------- */}
          <div className="relative h-full">
            {/* SEARCH */}
            <div className="absolute top-6 left-6 right-6 z-10">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {isLoaded && (
              <GoogleMap
                mapContainerClassName="w-full h-full"
                center={{ lat: 34.5553, lng: 69.2075 }}
                zoom={6}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                }}
              >
                {filtered.map((item, i) => (
                  <Marker
                    key={i}
                    position={item.position}
                    title={`${item.city} - ${item.price}`}
                  />
                ))}
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
