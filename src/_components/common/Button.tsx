"use client";
import React from "react";

function Button({ text, fn }: { text: string; fn: () => void }) {
  return (
    <button className="bg-slate-800 w-[100px] m-auto text-white" onClick={fn}>
      {text}
    </button>
  );
}

export default Button;
