"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Button from "../common/Button";
import { createClient } from "../../../utils/supabase/client";

function Header() {
  const router = useRouter();
  const path = usePathname();
  const supabase = createClient();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <header className="flex flex-col">
      {path === "/login" && (
        <>
          <div className="mx-auto my-[20px] text-[24px]">
            회원가입 및 로그인을 먼저해주세요.
          </div>
          <Button
            text="back"
            fn={() => {
              router.back();
            }}
          />
        </>
      )}

      {path === "/" && (
        <>
          <div className="mx-auto my-[20px] text-[24px]">
            회원가입 및 로그인을 먼저해주세요.
          </div>
          <Button
            text="login"
            fn={() => {
              router.push("/login?login=123&login44=222");
            }}
          />
        </>
      )}

      {path === "/protected" && (
        <>
          <div className="mx-auto my-[20px] text-[24px]">
            오늘의 Todo-List를 작성해봐요.
          </div>
          <Button text={"logOut"} fn={signOut}></Button>
        </>
      )}
    </header>
  );
}

export default Header;
