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
    <section id="collection" className="px-6 md:px-16 py-20" style={{ background: "var(--cream)" }}>
      <div className="flex items-center justify-center gap-6 mb-16">
        <div style={{ width: "32px", height: "0.5px", background: "var(--caramel)" }} />
        <span className="font-playfair italic" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "6px" }}>
          nos articles
        </span>
        <div style={{ width: "32px", height: "0.5px", background: "var(--caramel)" }} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
