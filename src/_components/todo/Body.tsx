import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import HeadlessTodoRemove from "../common/HeadlessTodoRemove";
import HeadlessTodoToggle from "../common/HeadlessTodoToggle";
import HeadlessTodoModify from "../common/HeadlessTodoModify";
import HeadlessTodo from "../common/HeadlessTodo";

function Body() {
  return (
    <HeadlessTodo>
      {({ todoContext }: any) => {
        return (
          <div className="mb-auto">
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
                      <HeadlessTodoToggle>
                        {({ onToggle }: any) => {
                          return (
                            <div
                              className="flex-1"
                              onClick={() => {
                                onToggle(todo);
                              }}
                            >
                              {todo.text}
                            </div>
                          );
                        }}
                      </HeadlessTodoToggle>
                      <HeadlessTodoRemove>
                        {({ onRemove }: any) => {
                          return (
                            <div className="flex justify-center items-center">
                              {todo.done ? (
                                <button
                                  className="w-[20px] h-[20px]"
                                  onClick={() => {
                                    onRemove({ id: todo.id });
                                  }}
                                >
                                  <MdOutlineDelete className="w-full h-full hover:text-red-500" />
                                </button>
                              ) : undefined}
                            </div>
                          );
                        }}
                      </HeadlessTodoRemove>
                      <HeadlessTodoModify>
                        {() => {
                          return (
                            <div className="flex justify-center items-center">
                              <button
                                className="w-[20px] h-[20px]"
                                onClick={() => {}}
                              >
                                <BiEdit className="w-full h-full hover:text-red-500 "></BiEdit>
                              </button>
                            </div>
                          );
                        }}
                      </HeadlessTodoModify>

                      <HeadlessTodoToggle>
                        {({ onToggle }: any) => {
                          return (
                            <div className="flex justify-center items-center ml-[2px]">
                              <input
                                type="checkbox"
                                id={todo.id}
                                name={todo.id}
                                checked={todo.done}
                                onChange={() => onToggle(todo)}
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
                          );
                        }}
                      </HeadlessTodoToggle>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      }}
    </HeadlessTodo>
  );
}

export default Body;
