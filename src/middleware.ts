import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import createSupabaseServerClient from "./lib/supabase/server";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({
//     req,
//     res,
//   });
//   await supabase.auth.getSession();
//   return res;
// }
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL("/dashboard/manage/appearance", req.url)
    );
  }

  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

// export const config = {
//   matcher: ["/", "/dashboard/:path*"],
// };
