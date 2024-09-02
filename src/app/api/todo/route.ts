import { server_todo_service } from "@/_services/server/todo";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

//데이터베이스 서비스로직

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id") as string;

  try {
    if (id) {
      const res = await prisma.todo.findMany({
        where: { created_user_id: id },
        orderBy: [
          {
            created_at: "desc",
          },
        ],
      });
      return Response.json(res, {
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.log(error);
    return Response.json("서버 오류", { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  //컨트롤러의 관심사 : 요청, 응답 ( 서비스 로직에는 관심이 없다. )
  try {
    const payload = await request.json();
    //서비스로직의 관심사 : 디비통신, 데이터 가공 ( 요청과 응답에는 관심이 없다. )
    const todo = await server_todo_service.create(payload);

    return Response.json(
      todo, // JSON 형식으로 응답 본문 설정
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return Response.json("서버 오류", { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const payload = await request.json();
    const todo = await server_todo_service.modify(payload);

    console.log();
    return Response.json(
      todo, // JSON 형식으로 응답 본문 설정
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return Response.json("서버 오류", { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const payload = await request.json();
    const todo = await server_todo_service.remove(payload);
    return Response.json(
      todo, // JSON 형식으로 응답 본문 설정
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return Response.json("서버 오류", { status: 500 });
  }
}
