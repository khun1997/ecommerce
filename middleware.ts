import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) => {
          cookies.forEach(({ name, value }) => {
            res.cookies.set(name, value);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = req.nextUrl.pathname;

  const isAuthPage = path.startsWith("/signin") || path.startsWith("/signup");

  const isDashboardRoute = path.startsWith("/dashboard");
  const isAppRoute = path.startsWith("/app");

  // 🔥 1. NOT logged in → block protected routes
  if (!user && (isDashboardRoute || isAppRoute)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // 🔥 2. If not logged in and not protected → allow
  if (!user) return res;

  // 🔥 3. ONLY fetch profile when needed (admin or routing decision)
  let role = "user";

  if (isDashboardRoute || isAppRoute || isAuthPage) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    role = profile?.role || "user";
  }

  // 🔥 4. redirect logged-in users away from auth pages
  if (isAuthPage) {
    return NextResponse.redirect(
      new URL(role === "admin" ? "/dashboard" : "/app", req.url),
    );
  }

  // 🔥 5. admin protection
  if (isDashboardRoute && role !== "admin") {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  // 🔥 6. optional: prevent admin going to app
  if (isAppRoute && role === "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}
