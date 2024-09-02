import { server_todo_service } from "@/_services/server/todo";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  try {
    const result =
      id &&
      (await prisma.profiles.findUnique({
        where: {
          id,
        },
      }));

    return Response.json(result, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return Response.json("서버 오류", { status: 500 });
  }
}

// export async function POST(request: NextRequest) {
//   //컨트롤러의 관심사 : 요청, 응답 ( 서비스 로직에는 관심이 없다. )
//   try {
//     const payload = await request.json();
//     //서비스로직의 관심사 : 디비통신, 데이터 가공 ( 요청과 응답에는 관심이 없다. )
//     const todo = await server_todo_service.create(payload);

//     return Response.json(
//       todo, // JSON 형식으로 응답 본문 설정
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return Response.json("서버 오류", { status: 500 });
//   }
// }

// export async function PATCH(request: NextRequest) {
//   try {
//     const payload = await request.json();

//     const todo = await server_todo_service.modify(payload);

//     return Response.json(
//       todo, // JSON 형식으로 응답 본문 설정
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return Response.json("서버 오류", { status: 500 });
//   }
// }

// export async function DELETE(request: NextRequest) {
//   try {
//     const payload = await request.json();
//     const todo = await server_todo_service.remove(payload);

//     return Response.json(
//       todo, // JSON 형식으로 응답 본문 설정
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return Response.json("서버 오류", { status: 500 });
//   }
// }

//로그인하면 쿠키에 저장되는 base64 형태의 값
const cookies = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsImtpZCI6Ii95azY3eFJXNnhreTRvdk4iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2p2bGF6cWh5dnhvcGl6YW5rbmN2LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIxYmZlYTM5Zi00NzU5LTRiYTgtYjUwYS00N2MxYjc4MWQxYjMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI0OTA0NTMzLCJpYXQiOjE3MjQ5MDA5MzMsImVtYWlsIjoieG9ndWRka2VubEBuYXZlci5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoieG9ndWRka2VubEBuYXZlci5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiMWJmZWEzOWYtNDc1OS00YmE4LWI1MGEtNDdjMWI3ODFkMWIzIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MjQ5MDA5MzN9XSwic2Vzc2lvbl9pZCI6ImZkMzlkMDRkLTFhNTMtNGE2OC04ZGRiLWE3ZjIwNWM3Y2JiMyIsImlzX2Fub255bW91cyI6ZmFsc2V9.kaI0JKlt8aPd8QV23P8qc0JUyFf48tX2ul6mBEP0vyc",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: 1724904533,
  refresh_token: "OcCYUMBTtiwygxabZqh-Hw",
  user: {
    id: "1bfea39f-4759-4ba8-b50a-47c1b781d1b3",
    aud: "authenticated",
    role: "authenticated",
    email: "xoguddkenl@naver.com",
    email_confirmed_at: "2024-08-29T02:43:38.062058Z",
    phone: "",
    confirmation_sent_at: "2024-08-29T02:42:48.675512Z",
    confirmed_at: "2024-08-29T02:43:38.062058Z",
    last_sign_in_at: "2024-08-29T03:08:53.382663844Z",
    app_metadata: { provider: "email", providers: ["email"] },
    user_metadata: {
      email: "xoguddkenl@naver.com",
      email_verified: false,
      phone_verified: false,
      sub: "1bfea39f-4759-4ba8-b50a-47c1b781d1b3",
    },
    identities: [
      {
        identity_id: "f977e96e-62a9-48c7-9a98-10846abcb0ba",
        id: "1bfea39f-4759-4ba8-b50a-47c1b781d1b3",
        user_id: "1bfea39f-4759-4ba8-b50a-47c1b781d1b3",
        identity_data: {
          email: "xoguddkenl@naver.com",
          email_verified: false,
          phone_verified: false,
          sub: "1bfea39f-4759-4ba8-b50a-47c1b781d1b3",
        },
        provider: "email",
        last_sign_in_at: "2024-08-29T02:42:48.668221Z",
        created_at: "2024-08-29T02:42:48.668312Z",
        updated_at: "2024-08-29T02:42:48.668312Z",
        email: "xoguddkenl@naver.com",
      },
    ],
    created_at: "2024-08-29T02:42:48.663738Z",
    updated_at: "2024-08-29T03:08:53.386182Z",
    is_anonymous: false,
  },
};
