import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { putSchema } from '../../schemas';
import { BadRequestError } from '@/interfaces';
import { getTodo } from '@/utils';

type Props = {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
  try {
    const { id } = await params;

    const todo = await getTodo(id);

    if (!todo) {
      return NextResponse.json(
        { error: 'to-do no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ todo, ok: true });
  } catch (error) {
    console.error("GET /api/todo/[id] error:", error);

    return NextResponse.json(
      { error: 'Algo salio mal.' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: Props) {
  try {
    const { id } = await params;

    const existTodo = await getTodo(id);

    if (!existTodo) {
      return NextResponse.json(
        { error: 'No existe el todo' },
        { status: 404 }
      );
    }

    const body = await req.json();
    const { complete, description } = await putSchema.validate(body);

    const todo = await prisma.todo.update({
      where: { id },
      data: { complete, description },
    });

    return NextResponse.json(todo);
  } catch (error: BadRequestError | any) {
    console.error(`/api/[id]/PUT: ${error}`);

    return NextResponse.json(
      { errors: error.errors ?? 'Error inesperado' },
      { status: 400 }
    );
  }
}
