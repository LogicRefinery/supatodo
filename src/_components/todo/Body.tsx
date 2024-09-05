import { useTodoContext } from "@/_context/TodoProvider";
import { client_todo_service } from "@/_services/client/todo";
import { Todo } from "@prisma/client";
import React from "react";
import { updateSession } from "../../../middleware";

function Body() {
  const todoContext = useTodoContext();

  //삭제
  const handleClick = async ({ id }: { id: string }) => {
    todoContext.method.remove(id);
  };

  //수정
  const handleChange = async (todo: Todo) => {
    todoContext.method.modify(todo);
  };

  return (
    <div className="overflow-hidden">
      <ul className="overflow-y-auto h-[100%] px-[10px] ">
        {todoContext.todos &&
          todoContext.todos.map((todo: any) => {
            return (
              <li
                key={todo.id}
                className={`flex justify-between ${
                  todo.done ? "line-through" : ""
                }`}
              >
                <div className="mr-auto">{todo.text}</div>
                <div>
                  {todo.done ? (
                    <input
                      type="button"
                      value="삭제"
                      onClick={() => {
                        handleClick({ id: todo.id });
                      }}
                    />
                  ) : undefined}
                </div>
                <div>{todo.id}</div>
                <div>
                  <input
                    type="checkbox"
                    name={todo.id}
                    id={todo.id}
                    checked={todo.done}
                    onChange={() => {
                      handleChange(todo);
                    }}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Body;
