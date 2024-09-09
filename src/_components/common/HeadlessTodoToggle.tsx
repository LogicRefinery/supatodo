"use client";
import { useTodoAction } from "@/_hooks/useTodoAction";
import { useState } from "react";

function HeadlessTodoToggle({ children, todo }: any) {
  const { onToggle } = useTodoAction();

  const [text, setText] = useState<string>((todo && todo.text) || "");

  return children({ onToggle, text, setText });
}

export default HeadlessTodoToggle;
