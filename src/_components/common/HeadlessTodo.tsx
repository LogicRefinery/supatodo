"use client";
import { useTodoAction } from "@/_hooks/useTodoAction";

function HeadlessTodo({ children }: any) {
  const { todoContext, onModify, onRemove, onToggle } = useTodoAction();

  // const [isEditTodoId, setIsEditTodoId] = useState<string>("");
  // const [text, setText] = useState<string>("");

  return children({
    todoContext,
    onModify,
    onRemove,
    onToggle,
  });
}

export default HeadlessTodo;
