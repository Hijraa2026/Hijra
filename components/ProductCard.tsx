"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-sm mb-3"
        style={{ background: "var(--sand-dark)", aspectRatio: "3/4" }}>
        {product.image ? (
          <img src={product.image} alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-playfair italic text-xs" style={{ color: "var(--muted)", letterSpacing: "2px" }}>
              Photo produit
            </span>
          </div>
        )}
        <button onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          style={{ background: "var(--cream)" }}>
          <Heart size={14} fill={liked ? "var(--mocha)" : "none"} color="var(--mocha)" />
        </button>
      </div>
      <div className="px-1">
        <p className="font-playfair text-sm mb-1" style={{ color: "var(--mocha-dark)" }}>{product.name}</p>
        <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium" style={{ color: "var(--mocha)" }}>{product.price} €</p>
          <button className="text-xs font-playfair italic transition-opacity hover:opacity-70"
            style={{ color: "var(--mocha)", letterSpacing: "1px" }}>
            Ajouter →
          </button>
        </div>
      </div>
    </div>
  );
}
