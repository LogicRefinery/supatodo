const read = async ({ id }: { id: any }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user?id=${id}`,
    {
      method: "GET",
      next: { tags: ["user"] },
    }
  );
  const data = await response.json();
  return data;
};

// const create = async (todoContent: string) => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
//     method: "POST",
//     body: JSON.stringify({
//       todo: todoContent.trim(),
//       done: false,
//     }),
//   });
//   const data = await response.json();
//   return data;
// };

// const remove = async ({ id }: { id: string }) => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
//     method: "DELETE",
//     body: JSON.stringify({ id }),
//   });
//   const data = await response.json();
//   return data;
// };

// const modify = async ({ id, done }: { id: string; done: boolean }) => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
//     method: "PATCH",
//     body: JSON.stringify({ id, done }),
//   });

//   const data = await response.json();
//   return data;
// };

export const client_user_service = {
  // create,
  read,
  // remove,
  // modify,
};
