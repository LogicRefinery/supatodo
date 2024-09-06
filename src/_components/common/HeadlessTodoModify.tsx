import { useTodoAction } from "@/_hooks/useTodoAction";

function HeadlessTodoModify({ children }: any) {
  const { onModify } = useTodoAction();

  return children({ onModify });
}

export default HeadlessTodoModify;
