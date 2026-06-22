import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Robe Linéa", description: "Col montant - coupe ample", price: 59 },
  { id: 2, name: "Ensemble Sahel", description: "Veste + pantalon large", price: 89 },
  { id: 3, name: "Blouse Nour", description: "Manches longues - fluide", price: 45 },
  { id: 4, name: "Manteau Farah", description: "Long - ceinturé - chic", price: 110 },
  { id: 5, name: "Robe Safa", description: "Coupe droite - col rond", price: 65 },
  { id: 6, name: "Ensemble Warda", description: "Pantalon + tunique", price: 95 },
  { id: 7, name: "Blouse Amira", description: "Poignets boutonnés - élégant", price: 55 },
  { id: 8, name: "Abaya Layla", description: "Oversize - casual chic", price: 120 },
  { id: 9, name: "Robe Zara", description: "Col officier - sobre", price: 72 },
  { id: 10, name: "Ensemble Hana", description: "Blazer long + large", price: 130 },
];

export default function Collection() {
  return (
    <section id="collection" style={{ background: "#FFFCF9" }} className="px-8 md:px-10 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div style={{ flex: 1, height: "0.5px", background: "#EAE0D5" }} />
        <span className="font-playfair italic" style={{ fontSize: "11px", color: "#9C8270", letterSpacing: "5px" }}>
          nos articles
        </span>
        <div style={{ flex: 1, height: "0.5px", background: "#EAE0D5" }} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="text-center mt-10">
        <button style={{ background: "transparent", color: "#1A0F0A", border: "0.5px solid #1A0F0A", padding: "12px 32px", fontSize: "11px", letterSpacing: "2px", cursor: "pointer" }}>
          VOIR TOUT
        </button>
      </div>
    </section>
  );
}

