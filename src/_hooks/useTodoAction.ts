import { useTodoContext } from "@/_context/TodoProvider";
import { Todo } from "@prisma/client";

export const useTodoAction = () => {
  const todoContext = useTodoContext();

  const onRemove = async ({ id }: { id: string }) => {
    const isRemove = confirm("정말 삭제하시겠습니까?");

    if (isRemove) todoContext.method.remove(id);
  };

  const onToggle = async (todo: Todo) => {
    todoContext.method.toggle(todo);
  };

  const onModify = async (todo: Todo) => {};

  return { todoContext, onRemove, onToggle, onModify };
};
