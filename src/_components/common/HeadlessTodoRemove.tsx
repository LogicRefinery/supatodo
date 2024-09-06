import { useTodoAction } from "@/_hooks/useTodoAction";

function HeadlessTodoRemoveBtn({ children }: any) {
  const { onRemove } = useTodoAction();

  return children({ onRemove });
}

export default HeadlessTodoRemoveBtn;
