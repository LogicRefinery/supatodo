import { useTodoAction } from "@/_hooks/useTodoAction";

function HeadlessTodo({ children }: any) {
  const { todoContext } = useTodoAction();

  return children({ todoContext });
}

export default HeadlessTodo;
