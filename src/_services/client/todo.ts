//클라이언트 측 API호출 app/api/todo

import { Todo } from "@prisma/client";

const read = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/todo?id=${id}`,
    {
      method: "GET",
      next: { tags: ["todo"] },
    }
  );
  const data = await response.json();

  return data;
};

const create = async (todo: { text: string; created_user_id: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todo`,
      {
        method: "POST",
        body: JSON.stringify(todo),
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const remove = async ({ id }: { id: string }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  return data;
};

const checked = async (todo: Todo) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  const data = await response.json();
  return data;
};

export const client_todo_service = {
  create,
  read,
  remove,
  checked,
};
