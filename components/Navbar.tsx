"use client";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: "#FFFCF9", borderBottom: "0.5px solid #EAE0D5", height: "72px" }}
      className="sticky top-0 z-50 px-8 flex items-center justify-between">

      <div className="hidden md:flex gap-7 text-xs" style={{ color: "#9C8270", letterSpacing: "1.5px", textTransform: "uppercase" }}>
        <a href="#" className="hover:text-[#7A4F2E] transition-colors">Nouveautés</a>
        <a href="#" className="hover:text-[#7A4F2E] transition-colors">Collections</a>
        <a href="#" className="hover:text-[#7A4F2E] transition-colors">À propos</a>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={18} color="#7A4F2E" /> : <Menu size={18} color="#7A4F2E" />}
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div style={{ width: "1px", height: "10px", background: "#C4956A" }} />
        <span className="font-playfair" style={{ fontSize: "20px", letterSpacing: "10px", color: "#1A0F0A" }}>HIJRA</span>
        <span className="font-playfair italic" style={{ fontSize: "9px", letterSpacing: "5px", color: "#9C8270" }}>modest fashion</span>
        <div style={{ width: "1px", height: "10px", background: "#C4956A" }} />
      </div>

      <div className="flex gap-5" style={{ color: "#7A4F2E" }}>
        <button className="hover:opacity-60 transition-opacity"><Search size={17} /></button>
        <button className="hover:opacity-60 transition-opacity"><Heart size={17} /></button>
        <button className="hover:opacity-60 transition-opacity"><ShoppingBag size={17} /></button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full py-6 flex flex-col gap-4 px-8"
          style={{ background: "#FFFCF9", borderBottom: "0.5px solid #EAE0D5" }}>
          <a href="#" style={{ color: "#9C8270", fontSize: "12px", letterSpacing: "1.5px" }}>NOUVEAUTÉS</a>
          <a href="#" style={{ color: "#9C8270", fontSize: "12px", letterSpacing: "1.5px" }}>COLLECTIONS</a>
          <a href="#" style={{ color: "#9C8270", fontSize: "12px", letterSpacing: "1.5px" }}>À PROPOS</a>
        </div>
      )}
    </nav>
  );
}
