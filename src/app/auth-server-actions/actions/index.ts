"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();

  const res = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: new URL(
        "/auth/signin",
        process.env.NEXT_PUBLIC_URL_ORIGIN
      ).toString(),
    },
  });

  return JSON.stringify(res);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const res = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(res);
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();

  const res = await supabase.auth.signOut();

  return JSON.stringify(res);
}
