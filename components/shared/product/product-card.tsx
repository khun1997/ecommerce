"use client";

import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductCardProps extends React.ComponentProps<"div"> {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

function ProductCard({ product, onAddToCart, className, ...props }: ProductCardProps) {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock < 20;

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-white ring-1 ring-[#cccccc] transition-all",
        className
      )}
      {...props}
    >
      <div className="absolute left-0 top-0 h-3 w-3 bg-[#76b900]" />
      
      <div className="relative aspect-square overflow-hidden bg-[#f7f7f7] p-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {isLowStock && !isOutOfStock && (
          <div className="absolute right-2 top-2">
            <span className="rounded-sm bg-[#df6500] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
              Low Stock
            </span>
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90">
            <span className="rounded-sm bg-[#1a1a1a] px-4 py-2 text-sm font-bold text-white">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="pr-6 text-[17px] font-bold leading-tight text-black">
          {product.name}
        </h3>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-black">
            ${product.price}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#76b900]" />
          <p className="text-sm font-medium text-[#757575]">
            {product.category}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-1">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                isOutOfStock ? "bg-[#a7a7a7]" : isLowStock ? "bg-[#df6500]" : "bg-[#76b900]"
              )}
            />
            <span className="text-sm font-medium text-[#757575]">
              {isOutOfStock ? "Sold out" : `${product.stock}`}
            </span>
          </div>
        </div>

        <button
          onClick={() => !isOutOfStock && onAddToCart?.(product)}
          disabled={isOutOfStock}
          className={cn(
            "mt-4 flex h-11 w-full items-center justify-center gap-2 text-sm font-bold transition-all",
            isOutOfStock
              ? "cursor-not-allowed bg-[#f7f7f7] text-[#a7a7a7]"
              : "bg-[#76b900] text-white hover:bg-[#5a8d00]"
          )}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export { ProductCard, type ProductCardProps };