import bg from "../assets/hero image.svg";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* NAVBAR */}
      <Navbar />

      <div className="w-full px-6 md:px-16">
        {/* TEXT */}
        <div className="max-w-xl text-white pt-32 md:pt-44">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your Dream <br /> Property
          </h1>

          <p className="mt-4 text-white/90 text-sm md:text-base">
            Discover your perfect home with our expert guidance and exclusive
            listing
          </p>

          {/* SEARCH */}
          <div className="mt-8 flex items-center bg-white/30 backdrop-blur-lg rounded-full px-4 py-2 max-w-md">
            <input
              type="text"
              placeholder="Search location..."
              className="bg-transparent outline-none text-white placeholder-white/70 flex-1 text-sm"
            />
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium">
              Search
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-5xl">
            {[
              { value: "8", label: "Years Experience" },
              { value: "26", label: "Projects Completed" },
              { value: "30%", label: "Buying & Selling" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-lg rounded-3xl text-center py-6 px-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {item.value}
                </h2>
                <p className="mt-1 text-xs text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
