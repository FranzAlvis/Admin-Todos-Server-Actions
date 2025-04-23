import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const todo = await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        completed: true,
      },
      {
        description: "Piedra del tiempo",
      },
      {
        description: "Piedra de la realidad",
      },
      {
        description: "Piedra del poder",
      },
      {
        description: "Piedra de la mente",
      },
    ],
  });
  console.log(todo);

  return NextResponse.json({
    message: "Seeding database...",
  });
}
