'use client'

import { Todo } from "@/generated/prisma"
import { TodoItem } from "./TodoItem";
import * as api from '@/todos/utils/todos';
import { useRouter } from "next/navigation";

interface Todos {
    todos?: Todo[];
}


export const TodosGrid = ({ todos = [] }: Todos) => {

    const router = useRouter();

    //Actualizar server component
    const toggleTodo = async (id: string, complete: boolean) => {
        const updatedTodo = await api.updateTodo(id, complete)
        router.refresh();
        return updatedTodo
    }



    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))
            }
        </div>
    )
}
