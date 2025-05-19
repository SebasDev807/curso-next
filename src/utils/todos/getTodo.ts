import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";

export const getTodo = async (id: string): Promise<Todo | undefined> => {

    const todo = await prisma.todo.findFirst({
        where: { id }
    })

    if (!todo) {
        return undefined
    }

    return todo;


}

