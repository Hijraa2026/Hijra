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
        style={{ background: "#EDE3D8", aspectRatio: "2/3" }}>
        {product.image ? (
          <img src={product.image} alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-playfair italic" style={{ fontSize: "10px", color: "#C4A882", letterSpacing: "2px" }}>photo</span>
          </div>
        )}
        <button onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 transition-all opacity-0 group-hover:opacity-100 p-1"
          style={{ background: "#FFFCF9" }}>
          <Heart size={12} fill={liked ? "#7A4F2E" : "none"} color="#7A4F2E" />
        </button>
      </div>
      <p className="font-playfair" style={{ fontSize: "12px", color: "#1A0F0A", marginBottom: "2px", letterSpacing: "0.5px" }}>
        {product.name}
      </p>
      <p style={{ fontSize: "11px", color: "#9C8270" }}>{product.price} €</p>
    </div>
  );
}
