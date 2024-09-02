"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import { useTodoContext } from "@/_context/TodoProvider";
import { useUserContext } from "@/_context/UserProvider";

function Container() {
  const todoContext = useTodoContext();
  const userContext = useUserContext();

  useEffect(() => {
    todoContext.method.init();
  }, [userContext.user]);

  return (
    <article className="h-screen flex justify-center flex-col items-center">
      <div className="flex justify-end w-1/2">{`${
        userContext.user && userContext.user.id
      }님 어서오세요`}</div>
      <h2 className="sr-only">투두리스트</h2>
      <div
        className="w-1/2  bg-slate-400 flex flex-col justify-between border
border-black rounded-[10px] h-[80vh]"
      >
        <div className="bg-white rounded-t-[10px] text-center text-[24px] font-extrabold p-[10px]">
          TODO
        </div>
        <Header></Header>
        <Body></Body>
        <div className="rounded-b-[10px] bg-white  text-center text-[24px] font-extrabold p-[10px] mt-auto">
          footer
        </div>
      </div>
    </article>
  );
}

export default Container;
