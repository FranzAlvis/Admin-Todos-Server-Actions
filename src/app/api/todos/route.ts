import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { error: "Parametro invalido take" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { error: "Parametro invalido skip" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required(),
  completed: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json());
    const todo = await prisma.todo.create({
      data: body,
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const todos = await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });
  return NextResponse.json(todos);
}
