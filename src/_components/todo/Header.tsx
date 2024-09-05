"use client";

import { useTodoContext } from "@/_context/TodoProvider";
import React, { useState } from "react";
import { useUserContext } from "@/_context/UserProvider";

function Header() {
  const [text, setText] = useState<string>("");
  const todoContext = useTodoContext();
  const userContext = useUserContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = { text, created_user_id: userContext.user?.id };
    todoContext.method.add(todo);
    setText("");
  };

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="sr-only">투두 입력폼</legend>
        </fieldset>
        <input
          className="rounded-tl-[10px] border-b-[1px] border-black w-[100%] h-[44px] pl-[10px]"
          type="text"
          placeholder="Write task here"
          value={text}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value="+"
          className="bg-gray-950 text-white rounded-tr-[8px] h-[44px] w-[44px]"
        />
      </form>
    </>
  );
}

export default React.memo(Header);
