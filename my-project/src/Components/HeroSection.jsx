import bg from "../assets/hero.svg";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* overlay خیلی نرم */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px]"></div>

      {/* NAVBAR */}
      <Navbar />

      <div className="relative z-10 w-full px-6 md:px-16">
        {/* TEXT + SEARCH */}
        <div className="max-w-xl pt-28 md:pt-44 text-gray-800">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight
                       opacity-0 animate-[textSlide_1.4s_ease-out_forwards]"
          >
            Find Your Dream <br /> Property
          </h1>

          <p
            className="mt-5 text-gray-600 text-sm md:text-base max-w-md
                       opacity-0 animate-[textSlide_1.8s_ease-out_forwards]"
          >
            Discover your perfect home with our expert guidance and exclusive
            listing
          </p>

          {/* SEARCH */}
          <div
            className="mt-10 flex items-center
                       bg-white/70 backdrop-blur-2xl
                       rounded-full px-6 py-4 max-w-lg
                       border border-white/40 shadow-2xl
                       opacity-0 animate-[searchSlide_2.2s_ease-out_forwards]"
          >
            <span className="mr-3 text-gray-500">🔍</span>

            <input
              type="text"
              placeholder="Search location..."
              className="flex-1 bg-transparent outline-none
                         text-gray-700 placeholder-gray-500 text-sm"
            />

            <button
              className="ml-4 bg-gray-800/90 text-white px-8 py-2.5
                         rounded-full text-sm font-medium
                         hover:bg-gray-700 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* STATS – پایین‌تر + بزرگ‌تر + Liquid Glass */}
        <div className="mt-32 md:mt-40 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
            {[
              { value: "8", label: "Years Experience" },
              { value: "26", label: "Projects Completed" },
              { value: "30%", label: "Buying & Selling" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((item, index) => (
              <div
                key={index}
                className="h-44 md:h-48
                           bg-white/60 backdrop-blur-2xl
                           border border-white/50
                           rounded-[2.2rem]
                           shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                           flex flex-col items-center justify-center
                           transition-all duration-500
                           hover:-translate-y-4 hover:scale-[1.06]"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
                  {item.value}
                </h2>

                <p className="mt-3 text-sm md:text-base text-gray-500 text-center px-6">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes textSlide {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes searchSlide {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
}
