import layla from "../assets/custom1.svg";
import omid from "../assets/custom2.svg";
import sara from "../assets/custom4.svg";
import ahmad from "../assets/custom3.svg";

export default function TestimonialsSection() {
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
  ];

  return (
    <section className="bg-[#eaf6fb] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-28">
          Trusted by Our Customers
        </h2>

        <div className="relative space-y-16 md:space-y-0">
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{ zIndex: testimonials.length - index }}
              className={`
                testimonial-card
                md:-mt-24
                ${index === 0 ? "md:mt-0" : ""}
              `}
            >
              <div
                className="
                  group
                  bg-white/70 backdrop-blur-xl
                  rounded-3xl shadow-xl
                  grid md:grid-cols-[240px_1fr]
                  items-center
                  transition-all duration-500
                  hover:scale-[1.02]
                "
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    w-full h-64 md:h-72
                    object-cover
                    rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none
                  "
                />

                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{item.role}</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    “{item.text}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Motion + Depth ===== */}
      <style>
        {`
          .testimonial-card {
            transition: transform 0.6s ease, opacity 0.6s ease;
          }

          .testimonial-card:nth-child(2) {
            transform: scale(0.96);
            opacity: 0.95;
          }

          .testimonial-card:nth-child(3) {
            transform: scale(0.92);
            opacity: 0.9;
          }

          .testimonial-card:nth-child(4) {
            transform: scale(0.88);
            opacity: 0.85;
          }

          @media (max-width: 768px) {
            .testimonial-card {
              transform: scale(1) !important;
              opacity: 1 !important;
            }
          }
        `}
      </style>
    </section>
  );
}
