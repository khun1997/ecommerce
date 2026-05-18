"use client";

import { useState } from "react";
import { ProductsGrid } from "@/components/shared/product";
import { demoProducts } from "@/data/products";
import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductsPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const categories = ["All", ...Array.from(new Set(demoProducts.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? demoProducts
      : demoProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 border-b border-[#5e5e5e] bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/app" className="text-xl font-bold tracking-tight text-white">
                Store
              </Link>
              <div className="hidden items-center gap-6 md:flex">
                <Link
                  href="/app"
                  className="text-sm font-bold text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-sm font-bold text-[#76b900] transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/app"
                  className="text-sm font-bold text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-white transition-colors hover:text-[#76b900]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-sm bg-[#76b900] text-[10px] font-bold text-white">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black" style={{ letterSpacing: "0" }}>
            Our Products
          </h1>
          <p className="mt-3 text-lg text-[#1a1a1a]">
            Discover our collection of premium products
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-sm px-4 py-2.5 text-sm font-bold transition-all
                ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "border border-[#cccccc] bg-white text-black hover:border-[#76b900] hover:text-[#76b900]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductsGrid products={filteredProducts} onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}