"use client";
import { client_todo_service } from "@/_services/client/todo";
import { Todo } from "@prisma/client";
import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserProvider";

type Method = {
  init: () => void;
  add: (todo: any) => void;
  toggle: (todo: Todo) => void;
  remove: (id: string) => void;
};

const todoContext = createContext<{
  todos: Todo[];
  method: Method;
  isLoading: boolean;
  error: any;
}>({
  todos: [],
  method: {
    init: () => {},
    add: (todo: any) => {},
    toggle: (todo: Todo) => {},
    remove: (id: string) => {},
  },
  isLoading: false,
  error: null,
});

//컨텍스트 내에 들어가는 함수는 단순히 타입만 맞추기위해 사용하며, 실제로는 사용되지 않고 디폴트 값으로 넣어놓기만하고 실제로 사용하는 함수는 따로 만들어준다.
//컨텍스트 API로 TODO 리스트랑 API 호출 함수 만들어서 웹 자체에서 사용하기.

function TodoProvider({ children }: { children: React.ReactNode }) {
  //프로바이더 내에 투두리스트를 관리할 상태
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userContext = useUserContext();

  //프로바이더 내에 투두리스트 수정 함수

  const method = {
    //메소드 내에서 api 호출까지 하자.
    init: async () => {
      if (userContext.user) {
        try {
          const todos = await client_todo_service.read({
            id: userContext.user?.id,
          });
          setTodos(todos);
        } catch (error) {
          console.error(error);
        }
      }
    },
    add: async (inputTodo: { text: string; created_user_id: string }) => {
      setIsLoading(true);
      try {
        const todo = await client_todo_service.create(inputTodo);
        setTodos((prev: any) => [todo, ...prev]);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    },
    toggle: async (todo: Todo) => {
      try {
        await client_todo_service.toggle({ ...todo, done: !todo.done });
        setTodos((prev: any) =>
          prev.map((item: Todo) =>
            item.id === todo.id ? { ...item, done: !item.done } : item
          )
        );
      } catch (error) {
        console.error(error);
      }
    },
    remove: async (id: string) => {
      if (userContext.user) {
        try {
          await client_todo_service.remove({ id });
          setTodos((prev: any) => prev.filter((item: any) => item.id !== id));
        } catch (error) {
          console.error(error);
        }
      }
    },
  };

  return (
    <todoContext.Provider value={{ todos, method, isLoading, error }}>
      {children}
    </todoContext.Provider>
  );
}

export const useTodoContext = () => useContext(todoContext);

export default TodoProvider;
