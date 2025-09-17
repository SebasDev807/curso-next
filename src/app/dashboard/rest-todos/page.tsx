import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


export const metadata = {
    title: 'Lista de tareas',
    description: 'Lista de tareas',
};



export default async function RestTodosPage() {


    const todos = await prisma.todo.findMany({
        orderBy: { description: 'asc' }
    })


    return (
        <div>
            {/* TODO: Formulario para agregar todos */}

            <NewTodo />

            <TodosGrid todos={todos} />
        </div>
    );
}