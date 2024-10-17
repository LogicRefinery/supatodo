import Todo from "@/_components/todo/Container";
import React from "react";
import TodoProvider from "@/_context/TodoProvider";
import UserProvider from "@/_context/UserProvider";
import QueryProvider from "@/_query/QueryProvider";

function Page() {
  return (
    <main>
      <UserProvider>
        <TodoProvider>
          <QueryProvider>
            <Todo></Todo>
          </QueryProvider>
        </TodoProvider>
      </UserProvider>
    </main>
  );
}

export default Page;
