import createSupabaseServerClient from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  const data = {
    client_id: user.id,
    title: searchParams.get("title"),
    description: searchParams.get("description"),
    content: searchParams.get("content"),
    theme: searchParams.get("theme"),
  };

  const res = await supabase.from("configurations").insert(data).single();

  return NextResponse.json(res);
}
