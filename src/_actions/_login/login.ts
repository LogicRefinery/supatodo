"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

let message = "";

export const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    message = encodeURIComponent("인증되지 않은 사용자입니다.");
    return redirect(`/login?message=${message}`);
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
      emailRedirectTo: `${origin}/protected`,
    },
  });

  if (error) {
    message = encodeURIComponent("인증메일 발송에 실패하였습니다.");
    return redirect(`/login?message=${message}`);
  }
  message = encodeURIComponent("인증메일을 발송하였습니다.");
  return redirect(`/login?message=${message}`);
};
