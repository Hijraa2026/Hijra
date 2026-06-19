"use client";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: "var(--cream)", borderBottom: "0.5px solid var(--border)" }}
      className="sticky top-0 z-50">

      <div className="px-6 md:px-12 flex items-center justify-between" style={{ height: "80px" }}>
        
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "var(--muted)", letterSpacing: "1px" }}>
          <a href="#" className="hover:text-[var(--mocha)] transition-colors">Nouveautés</a>
          <a href="#" className="hover:text-[var(--mocha)] transition-colors">Collections</a>
          <a href="#" className="hover:text-[var(--mocha)] transition-colors">À propos</a>
        </div>

        <div className="flex flex-col items-center gap-1 mx-auto">
          <div style={{ width: "140px", height: "0.5px", background: "var(--mocha)" }} />
          <span className="font-playfair text-2xl font-normal" style={{ color: "var(--mocha-dark)", letterSpacing: "8px" }}>HIJRA</span>
          <div style={{ width: "140px", height: "0.5px", background: "var(--mocha)" }} />
          <span className="font-playfair italic" style={{ fontSize: "9px", color: "var(--muted)", letterSpacing: "5px" }}>modest fashion</span>
        </div>

        <div className="flex gap-4" style={{ color: "var(--mocha)" }}>
          <button className="hover:opacity-70 transition-opacity"><Search size={18} /></button>
          <button className="hover:opacity-70 transition-opacity"><Heart size={18} /></button>
          <button className="hover:opacity-70 transition-opacity"><ShoppingBag size={18} /></button>
        </div>
      </div>

      {menuOpen && (
        <div className="py-6 flex flex-col gap-4 px-6 md:hidden"
          style={{ background: "var(--cream)", borderBottom: "0.5px solid var(--border)" }}>
          <a href="#" style={{ color: "var(--muted)" }}>Nouveautés</a>
          <a href="#" style={{ color: "var(--muted)" }}>Collections</a>
          <a href="#" style={{ color: "var(--muted)" }}>À propos</a>
        </div>
      )}
    </nav>
  );
}
