"use client";
import { Todo } from "@prisma/client";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

type Props = {
  todo: Todo;
  onModify: (todo: Todo) => void;
  onRemove: ({ id }: { id: string }) => void;
  onToggle: (todo: Todo) => void;
};

function TodoItem({ todo, onModify, onRemove, onToggle }: Props) {
  const [text, setText] = useState<string>(todo.text || "");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <li
      key={todo.id}
      className={`flex justify-between hover:bg-gray-300 py-[5px] px-[10px] cursor-pointer ${
        todo.done ? "line-through" : ""
      }`}
    >
      <div className="flex justify-start items-center ml-[2px] flex-1">
        <label className="ml-[4px] flex flex-1">
          <span className="flex justify-center items-center w-[20px] h-[20px] border-[1px] border-zinc-600 rounded-[4px] bg-white cursor-pointer ">
            {todo.done ? (
              <FaCheck className="w-[14px] h-[14px]"></FaCheck>
            ) : undefined}
          </span>
          <input
            type="checkbox"
            id={todo.id}
            name={todo.id}
            checked={todo.done || false}
            onChange={() => onToggle(todo)}
            className="sr-only peer"
          />

          {isEdit ? (
            <input
              type="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
              className="block w-full"
            />
          ) : (
            <p className="w-full">{todo.text}</p>
          )}
        </label>
      </div>

      <div className="flex items-center ">
        {isEdit ? (
          <button
            className="w-[20px] h-[20px]"
            onClick={() => {
              onModify({ ...todo, text });
              setIsEdit(false);
            }}
          >
            {<FiSave className="w-full h-full hover:text-red-500 "></FiSave>}
          </button>
        ) : (
          <button
            className="w-[20px] h-[20px]"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            {<BiEdit className="w-full h-full hover:text-red-500 "></BiEdit>}
          </button>
        )}
      </div>

      <div className="flex justify-center items-center">
        <button
          className="w-[20px] h-[20px]"
          onClick={() => {
            onRemove({ id: todo.id });
          }}
        >
          <MdOutlineDelete className="w-full h-full hover:text-red-500" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
