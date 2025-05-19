import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { postSchema } from '../schemas';


export async function GET(request: Request) {

    //Extraer parametros dde url
    const { searchParams } = new URL(request.url);

    //Convertir parametros de busqueda a entero
    const take = +(searchParams.get('take') ?? '10')
    const skip = +(searchParams.get('skip') ?? '0')

    const todos = await prisma.todo.findMany({ take, skip });

    if (+isNaN) return NextResponse.json(
        { message: 'Take debe ser un numero' },
        { status: 400 }
    )

    return NextResponse.json(todos)
}


export async function POST(request: Request) {

    try {
        const { complete, description } = await postSchema.validate(await request.json());

        const newTodo = await prisma.todo.create({
             data: { complete, description } 
        });

        return NextResponse.json(
            { newTodo },
            { status: 201 }
        );
    } catch (error) {
        console.error("POST /api/todo/ error:", error);

        return NextResponse.json(
            { error },
            { status: 400 }
        )
    }
}


export async function DELETE(request: Request) {

    try {

        await prisma.todo.deleteMany({
            where: { complete: true }
        })


    } catch (error) {

        return NextResponse.json({
            error: 'Algo salio mal'
        }, { status: 500 });

    }
}
