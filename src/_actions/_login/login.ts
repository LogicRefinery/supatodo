"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

export const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=인증되지 않은 사용자입니다.");
  }

  return redirect("/protected");
};

export const signUp = async (formData: FormData) => {
  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect("/login?message=인증메일 발송에 실패하였습니다.");
  }

  return redirect("/login?message=인증메일을 발송하였습니다.");
};
