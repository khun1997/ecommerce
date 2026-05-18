"use client";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const UserHomePage = (props: Props) => {
  const signOut = useAuthStore((s) => s.signOut);
  const user = useAuthStore((s) => s.user);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link
                href="/app"
                className="text-xl font-bold tracking-tight text-white"
              >
                Store
              </Link>
              <div className="hidden items-center gap-6 md:flex">
                <Link
                  href="/app"
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/app"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Products
                </Link>
                <Link
                  href="/app"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <span className="text-sm text-zinc-400">
                    Hello,{" "}
                    <span className="font-medium text-white">
                      {user.user_metadata.username}
                    </span>
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut()}
                    className="text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link href="/signin">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/80 to-zinc-800/30 p-12 md:p-16">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-violet-600/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-emerald-600/10 to-transparent blur-3xl" />

          <div className="relative">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                Your Store
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-zinc-400">
              Discover amazing products and enjoy a seamless shopping
              experience. We&apos;re here to provide you with the best service.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-medium text-white transition-all hover:from-emerald-500 hover:to-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25">
                Browse Products
              </button>
              <button className="rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-6 py-3 font-medium text-white transition-all hover:border-zinc-600/50 hover:bg-zinc-800">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 transition-transform group-hover:scale-110">
              <svg
                className="h-6 w-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Quality Products
            </h3>
            <p className="text-sm text-zinc-400">
              Curated selection of premium products for your needs.
            </p>
          </div>

          <div className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 transition-transform group-hover:scale-110">
              <svg
                className="h-6 w-6 text-violet-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Fast Delivery
            </h3>
            <p className="text-sm text-zinc-400">
              Quick and reliable shipping to your doorstep.
            </p>
          </div>

          <div className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 transition-transform group-hover:scale-110">
              <svg
                className="h-6 w-6 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              24/7 Support
            </h3>
            <p className="text-sm text-zinc-400">
              Round-the-clock assistance for any questions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserHomePage;
