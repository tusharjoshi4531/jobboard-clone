import createSupabaseServerClient from "@/lib/supabase/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = await createSupabaseServerClient();

  console.log("searchParams", req.nextUrl.searchParams);

  const searchParams = new URLSearchParams(req.nextUrl.searchParams);

  const code = searchParams.get("code");

  if(code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
