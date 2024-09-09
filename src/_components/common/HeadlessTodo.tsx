"use client";
import { useTodoAction } from "@/_hooks/useTodoAction";
import { useState } from "react";

function HeadlessTodo({ children }: any) {
  const { todoContext } = useTodoAction();
  const [isEditTodoId, setIsEditTodoId] = useState<string>("");
  const [text, setText] = useState<string>("");

  return children({
    todoContext,
    isEditTodoId,
    setIsEditTodoId,
    text,
    setText,
  });
}

export default HeadlessTodo;
