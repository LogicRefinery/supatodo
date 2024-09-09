import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { FiSave } from "react-icons/fi";
import HeadlessTodoRemove from "../common/HeadlessTodoRemove";
import HeadlessTodoToggle from "../common/HeadlessTodoToggle";
import HeadlessTodoModify from "../common/HeadlessTodoModify";
import HeadlessTodo from "../common/HeadlessTodo";
import { GridLoader } from "react-spinners";

function Body() {
  return (
    <HeadlessTodo>
      {({ todoContext, isEditTodoId, setIsEditTodoId, text, setText }: any) => {
        console.log(todoContext.isLoading);
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
                    <li
                      key={todo.id}
                      className={`flex justify-between hover:bg-gray-300 py-[5px] px-[10px] cursor-pointer ${
                        todo.done ? "line-through" : ""
                      }`}
                    >
                      <HeadlessTodoToggle>
                        {({ onToggle }: any) => {
                          return isEditTodoId === todo.id ? (
                            <div className="border-[1px] rounded-sm flex-1">
                              <input
                                type="text"
                                onChange={(e) => {
                                  setText(e.target.value);
                                }}
                                value={text}
                                className="block w-full"
                              />
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                onToggle(todo);
                              }}
                              className="flex-1"
                            >
                              {todo.text}
                            </div>
                          );
                        }}
                      </HeadlessTodoToggle>

                      <HeadlessTodoModify>
                        {({ onModify }: any) => {
                          return isEditTodoId === todo.id ? (
                            <div className="flex items-center ">
                              <button
                                className="w-[20px] h-[20px]"
                                onClick={() => {
                                  onModify({ ...todo, text });
                                  setIsEditTodoId("");
                                }}
                              >
                                {
                                  <FiSave className="w-full h-full hover:text-red-500 "></FiSave>
                                }
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center ">
                              <button
                                className="w-[20px] h-[20px]"
                                onClick={() => {
                                  setText(todo.text);
                                  setIsEditTodoId(todo.id);
                                }}
                              >
                                {
                                  <BiEdit className="w-full h-full hover:text-red-500 "></BiEdit>
                                }
                              </button>
                            </div>
                          );
                        }}
                      </HeadlessTodoModify>
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
                              ) : (
                                <div className="w-[20px] h-[20px]"></div>
                              )}
                            </div>
                          );
                        }}
                      </HeadlessTodoRemove>

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
                })
              )}
            </ul>
          </div>
        );
      }}
    </HeadlessTodo>
  );
}

export default Body;
