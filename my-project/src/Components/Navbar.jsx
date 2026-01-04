import { useState } from "react";
import logo from "../assets/logo1.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50">
      <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/40">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Buy & Sell</li>
          <li>Dashboard</li>
        </ul>

        {/* LOGIN (DESKTOP) */}
        <Link to="/login" className="hidden md:block">
          <button
            className="glass-nav px-7 py-2 rounded-full text-sm font-medium
                       text-sky-700 bg-sky-400/30 border border-sky-300/40
                       backdrop-blur-md transition-all duration-300
                       hover:bg-sky-500/40 hover:text-sky-900 hover:border-sky-400"
          >
            Login
          </button>
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 glass-nav rounded-2xl py-6 shadow-xl">
          <ul className="flex flex-col items-center gap-6 text-gray-800 font-medium">
            <li onClick={() => setOpen(false)}>About</li>
            <li onClick={() => setOpen(false)}>Contact</li>
            <li onClick={() => setOpen(false)}>Buy & Sell</li>
            <li onClick={() => setOpen(false)}>Dashboard</li>

            {/* LOGIN (MOBILE) */}
            <Link to="/login" onClick={() => setOpen(false)}>
              <button
                className="mt-2 glass-nav px-8 py-2 rounded-full text-sm font-medium
                           text-sky-700 bg-sky-400/30 border border-sky-300/40"
              >
                Login
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
