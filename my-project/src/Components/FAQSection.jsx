import { useState } from "react";

export default function FooterSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I search for properties on this website?",
      a: "Use the search bar to enter location, property type, or keywords. You can also apply filters such as price, size, and amenities to refine results.",
    },
    {
      q: "How can I list my property for sale or rent?",
      a: "Log in to your dashboard, click on “Add Property”, fill in the details, and submit it for review.",
    },
    {
      q: "What documents do I need for buying or renting?",
      a: "Usually a valid ID, proof of income, and legal property documents are required.",
    },
    {
      q: "Do you offer customer support?",
      a: "Yes, our support team is available via email, phone, and dashboard messaging.",
    },
  ];

  return (
    <footer className="bg-[#eaf6fb] pt-28">
      {/* ================= FAQ + CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 pb-28">
        {/* FAQ */}
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-14 max-w-md">
            Everything you need to know about buying, selling, or renting
            properties.
          </p>

          <div className="space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden
                           backdrop-blur-md bg-white/60
                           border border-white/40 shadow"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex justify-between items-center
                             text-left text-lg font-medium text-gray-900"
                >
                  {item.q}
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-6 transition-all duration-500 overflow-hidden
                    ${
                      openIndex === index
                        ? "max-h-40 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA / Newsletter */}
        <div className="flex flex-col justify-center">
          <div
            className="rounded-3xl p-10
                       backdrop-blur-xl bg-white/70
                       border border-white/40 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-10 max-w-sm">
              Get the latest property listings and market updates directly in
              your inbox.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b-2 border-gray-800
                         outline-none py-3 text-lg text-black mb-10"
            />

            <button
              className="px-10 py-3 rounded-full text-black
                         backdrop-blur-md bg-white/70
                         border border-white/40 shadow
                         hover:bg-white transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ================= REAL FOOTER ================= */}
      <div className="border-t border-gray-300">
        <div
          className="max-w-7xl mx-auto px-6 py-10
                     flex flex-col md:flex-row
                     justify-between items-center gap-6"
        >
          {/* Menu */}
          <nav className="flex flex-wrap gap-8 text-gray-700 text-sm">
            <a href="#home" className="hover:text-black">
              Home
            </a>
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#properties" className="hover:text-black">
              Properties
            </a>
            <a href="#map" className="hover:text-black">
              Map
            </a>
            <a href="#faq" className="hover:text-black">
              FAQ
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Real Estate Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
