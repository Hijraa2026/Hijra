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
      <div className="relative overflow-hidden mb-3"
        style={{ background: "var(--sand)", aspectRatio: "2/3", borderRadius: "2px" }}>
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-playfair italic text-xs" style={{ color: "var(--muted)", letterSpacing: "2px" }}>
            photo
          </span>
        </div>
        <button onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 transition-all opacity-0 group-hover:opacity-100">
          <Heart size={13} fill={liked ? "var(--mocha)" : "none"} color="var(--mocha)" />
        </button>
      </div>
      <p className="font-playfair text-xs mb-1" style={{ color: "var(--mocha-dark)", letterSpacing: "1px" }}>{product.name}</p>
      <p style={{ fontSize: "11px", color: "var(--muted)" }}>{product.price} €</p>
    </div>
  );
}
