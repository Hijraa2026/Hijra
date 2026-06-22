export default function Hero() {
  return (
    <>
      <section style={{ background: "#FFFCF9" }}
        className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">

        <div className="px-10 py-14 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "24px", height: "0.5px", background: "#C4956A" }} />
            <span className="font-playfair italic" style={{ fontSize: "11px", color: "#B08060", letterSpacing: "4px" }}>Nouvelle collection</span>
          </div>
          <h1 className="font-playfair" style={{ fontSize: "48px", fontWeight: 400, color: "#1A0F0A", lineHeight: "1.2", marginBottom: "20px" }}>
            Modeste.<br />Élégante.<br />Quotidienne.
          </h1>
          <p style={{ fontSize: "13px", color: "#7A5535", lineHeight: "1.8", marginBottom: "32px", maxWidth: "300px" }}>
            Des tenues pensées pour la femme active — couverture complète, style épuré.
          </p>
          <div className="flex items-center gap-4">
            <a href="#collection" style={{ background: "#1A0F0A", color: "#FFF8F2", padding: "14px 28px", fontSize: "11px", letterSpacing: "2px", textDecoration: "none" }}>
              DÉCOUVRIR
            </a>
            <span className="font-playfair italic" style={{ fontSize: "12px", color: "#9C8270" }}>10 pièces →</span>
          </div>
        </div>

        <div style={{ background: "#EDE3D8", position: "relative", minHeight: "320px" }}
          className="flex items-center justify-center">
          <p className="font-playfair italic" style={{ fontSize: "11px", color: "#B08060", letterSpacing: "3px" }}>photo hero</p>
          <div style={{ position: "absolute", bottom: "24px", right: "24px", background: "#FFFCF9", padding: "10px 14px" }}>
            <p className="font-playfair" style={{ fontSize: "11px", color: "#1A0F0A", letterSpacing: "1px" }}>Robe Linéa</p>
            <p style={{ fontSize: "11px", color: "#9C8270" }}>59 €</p>
          </div>
        </div>
      </section>

      <div style={{ background: "#1A0F0A", padding: "12px 40px" }}
        className="flex justify-center gap-10 flex-wrap">
        {["LIVRAISON OFFERTE DÈS 80€", "RETOURS 30 JOURS", "PAIEMENT SÉCURISÉ"].map((item, i) => (
          <span key={i} style={{ fontSize: "10px", color: "#C4956A", letterSpacing: "3px" }}>{item}</span>
        ))}
      </div>
    </>
  );
}
