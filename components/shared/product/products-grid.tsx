"use client";

import { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface ProductsGridProps extends React.ComponentProps<"div"> {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

function ProductsGrid({ products, onAddToCart, className, ...props }: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center border border-[#cccccc] py-20">
        <p className="text-lg font-bold text-[#757575]">No products found</p>
      </div>
    );
  }

  return (
    <div
      className={cn("grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4", className)}
      {...props}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export { ProductsGrid, type ProductsGridProps };