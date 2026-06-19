export default function Hero() {
  return (
    <section style={{ background: "var(--sand)" }}
      className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div>
        <p className="font-playfair italic text-xs mb-4" style={{ color: "var(--muted-light)", letterSpacing: "5px" }}>
          Nouvelle collection
        </p>
        <h1 className="font-playfair text-5xl md:text-6xl font-normal leading-tight mb-6"
          style={{ color: "var(--mocha-dark)" }}>
          Modeste.<br />Élégante.<br />Quotidienne.
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--mocha)", maxWidth: "380px" }}>
          Des tenues pensées pour la femme active — couverture complète, style épuré et professionnel.
        </p>
        <a href="#collection"
          className="inline-block font-playfair text-xs px-8 py-4 transition-opacity hover:opacity-80"
          style={{ background: "var(--mocha)", color: "var(--cream)", letterSpacing: "2px" }}>
          Découvrir la collection
        </a>
      </div>

      <div className="relative h-[420px] md:h-[520px] overflow-hidden rounded-sm"
        style={{ background: "var(--sand-dark)" }}>
        <div className="w-full h-full flex items-center justify-center">
          <p className="font-playfair italic text-sm" style={{ color: "var(--muted)", letterSpacing: "3px" }}>
            Photo hero
          </p>
        </div>
      </div>
    </section>
  );
}
