import { useTodoAction } from "@/_hooks/useTodoAction";

function HeadlessTodoToggle({ children }: any) {
  const { onToggle } = useTodoAction();

  return children({ onToggle });
}

export default HeadlessTodoToggle;
