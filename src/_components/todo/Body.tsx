import { useTodoContext } from "@/_context/TodoProvider";
import { Todo } from "@prisma/client";
import React from "react";
import { FaCheck } from "react-icons/fa";

function Body() {
  const todoContext = useTodoContext();

  //삭제
  const handleClick = async ({ id }: { id: string }) => {
    todoContext.method.remove(id);
  };

  //수정
  const handleChange = async (todo: Todo) => {
    todoContext.method.checked(todo);
  };

  return (
    <div>
      <ul className="overflow-y-auto h-[100%]">
        {todoContext.todos &&
          todoContext.todos.map((todo: any) => {
            return (
              <li
                key={todo.id}
                className={`flex justify-between hover:bg-gray-300 py-[5px] px-[10px] cursor-pointer ${
                  todo.done ? "line-through" : ""
                }`}
              >
                <div
                  className="flex-1"
                  onClick={() => {
                    handleChange(todo);
                  }}
                >
                  {todo.text}
                </div>
                <div>
                  <label htmlFor="remove" className="sr-only">
                    삭제
                  </label>
                  {todo.done ? (
                    <input
                      type="button"
                      value="삭제"
                      id="remove"
                      className="hover:cursor-pointer"
                      onClick={() => {
                        handleClick({ id: todo.id });
                      }}
                    />
                  ) : undefined}
                </div>

                <div>
                  <input
                    type="checkbox"
                    id={todo.id}
                    name={todo.id}
                    checked={todo.done}
                    onChange={() => handleChange(todo)}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={todo.id}
                    className="flex justify-center items-center w-[20px] h-[20px] border-[1px] border-zinc-600 rounded-[4px] bg-white cursor-pointer "
                  >
                    {todo.done ? (
                      <FaCheck className="w-[14px] h-[14px]"></FaCheck>
                    ) : undefined}
                  </label>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Body;
