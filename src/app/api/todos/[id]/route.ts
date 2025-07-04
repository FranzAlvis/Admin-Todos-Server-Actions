import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;
  const todo = await prisma.todo.findMany({
    where: {
      id,
    },
  });

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ todo });
}

export async function PUT(request: Request, { params }: Props) {
  const { id } = await params;
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  const body = await request.json();
  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: body,
  });

  return NextResponse.json(updatedTodo);
}
