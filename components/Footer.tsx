import { Truck, RefreshCw, Lock } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
        style={{ background: "var(--mocha-dark)" }}>
        {[
          { icon: <Truck size={22} />, label: "LIVRAISON OFFERTE", sub: "dès 80 €" },
          { icon: <RefreshCw size={22} />, label: "RETOURS 30 JOURS", sub: "gratuits" },
          { icon: <Lock size={22} />, label: "PAIEMENT SÉCURISÉ", sub: "Stripe" },
        ].map(item => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <div style={{ color: "var(--caramel)" }}>{item.icon}</div>
            <p className="text-xs" style={{ color: "var(--caramel)", letterSpacing: "2px" }}>{item.label}</p>
            <p className="text-xs font-playfair italic" style={{ color: "var(--muted)" }}>{item.sub}</p>
          </div>
        ))}
      </div>

      <footer className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ background: "var(--cream)", borderTop: "0.5px solid var(--border)" }}>
        <span className="font-playfair text-sm" style={{ color: "var(--mocha-dark)", letterSpacing: "6px" }}>HIJRA</span>
        <span className="font-playfair italic text-xs" style={{ color: "var(--muted)" }}>© 2025 · modest fashion</span>
        <div className="flex gap-5 text-xs" style={{ color: "var(--muted)" }}>
          <a href="#" className="hover:text-[var(--mocha)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--mocha)] transition-colors">TikTok</a>
          <a href="#" className="hover:text-[var(--mocha)] transition-colors">Contact</a>
        </div>
      </footer>
    </>
  );
}

