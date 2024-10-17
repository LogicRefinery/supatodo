import React from "react";
import HeadlessTodo from "../common/HeadlessTodo";
import { GridLoader } from "react-spinners";
import TodoItem from "./TodoItem";

function Todo() {
  return (
    <HeadlessTodo>
      {({ todoContext, onModify, onRemove, onToggle }: any) => {
        return (
          <div className="h-full">
            <ul className="overflow-y-auto h-full">
              {todoContext.isLoading || !todoContext.todos ? (
                <div className="h-full flex justify-center items-center">
                  <GridLoader />
                </div>
              ) : (
                todoContext.todos.map((todo: any) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onModify={onModify}
                      onRemove={onRemove}
                      onToggle={onToggle}
                    />
                  );
                })
              )}
            </ul>
          </div>
        );
      }}
    </HeadlessTodo>
  );
}

export default Todo;
