"use client";

import { useAuthStore } from "@/store/auth-store";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserHomePage = () => {
  const signOut = useAuthStore((s) => s.signOut);
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

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
                <Link href="/app" className="text-sm font-bold text-[#76b900]">
                  Home
                </Link>
                <Link href="/products" className="text-sm font-bold text-white hover:text-[#76b900]">
                  Products
                </Link>
                <Link href="/app" className="text-sm font-bold text-[rgba(255,255,255,0.7)] hover:text-white">
                  About
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <span className="text-sm text-[rgba(255,255,255,0.7)]">
                    Hello,{" "}
                    <span className="font-bold text-white">{user.user_metadata.username}</span>
                  </span>
                  <button
                    onClick={() => signOut()}
                    className="rounded-sm px-4 py-2 text-sm font-bold text-white border border-[#5e5e5e] hover:border-white transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link href="/signin">
                  <button className="rounded-sm bg-[#76b900] px-4 py-2 text-sm font-bold text-white hover:bg-[#5a8d00]">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden border border-[#cccccc] bg-[#f7f7f7] p-12 md:p-16">
          <div className="absolute right-0 top-0 h-3 w-3 bg-[#76b900]" />
          
          <div className="relative">
            <h1 className="mb-6 text-4xl font-bold text-black md:text-6xl" style={{ letterSpacing: "0" }}>
              Welcome to{" "}
              <span className="text-[#76b900]">Your Store</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-[#1a1a1a]">
              Discover amazing products and enjoy a seamless shopping experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/products")}
                className="rounded-sm bg-[#76b900] px-6 py-3 font-bold text-white hover:bg-[#5a8d00]"
              >
                Browse Products
              </button>
              <button className="rounded-sm border-2 border-black bg-white px-6 py-3 font-bold text-black hover:border-[#76b900] hover:text-[#76b900]">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative border border-[#cccccc] bg-white p-6">
            <div className="absolute right-0 bottom-0 h-3 w-3 bg-[#76b900]" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#f7f7f7]">
              <svg className="h-6 w-6 text-[#76b900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">Quality Products</h3>
            <p className="text-[#757575]">Curated selection of premium products for your needs.</p>
          </div>

          <div className="group relative border border-[#cccccc] bg-white p-6">
            <div className="absolute right-0 bottom-0 h-3 w-3 bg-[#76b900]" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#f7f7f7]">
              <svg className="h-6 w-6 text-[#76b900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">Fast Delivery</h3>
            <p className="text-[#757575]">Quick and reliable shipping to your doorstep.</p>
          </div>

          <div className="group relative border border-[#cccccc] bg-white p-6">
            <div className="absolute right-0 bottom-0 h-3 w-3 bg-[#76b900]" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#f7f7f7]">
              <svg className="h-6 w-6 text-[#76b900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">24/7 Support</h3>
            <p className="text-[#757575]">Round-the-clock assistance for any questions.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserHomePage;