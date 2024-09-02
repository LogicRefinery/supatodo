import Container from "@/_components/todo/Container";
import React from "react";
import TodoProvider from "@/_context/TodoProvider";
import UserProvider from "@/_context/UserProvider";

function Page() {
  return (
    <main>
      <UserProvider>
        <TodoProvider>
          <Container></Container>
        </TodoProvider>
      </UserProvider>
    </main>
  );
}

export default Page;
