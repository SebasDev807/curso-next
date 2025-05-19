import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'




export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    const todos = await prisma.todo.createMany({
        data:[
            {description:'Fumar bazuco'},
            {description:'Meter perico'},
            {description:'Correr a 200'},
            {description:'Salir adelante'},
            {description:'Morir'},

        ]
    })

    return NextResponse.json({
        ok:true,
        todos
    })
}




























// export async function GET(request: Request) {

//     await prisma.todo.deleteMany();
    

//     const todo = await prisma.todo.create({
//         data: {
//             description: 'Bazuco'
//         }
//     })

//     console.log({ todo });

//     return NextResponse.json({
//         message: 'Seed executed',
//         todo
//     })
// }


export async function DELETE(req: Request) {

    await prisma.todo.deleteMany();

    return NextResponse.json({
        eliminado: true
    })

}