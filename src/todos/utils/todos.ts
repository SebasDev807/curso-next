import { Todo } from "@/generated/prisma";


export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const body = { complete };

    //Petición put
    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    return todo;
}


export const createTodo = async (description: string): Promise<Todo> => {

    const body = { description };

    const todo = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error);

    return todo;

}


export const deleteTodo = async () => {

    await fetch(`/api/todos/`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },

    }).then(res => res.json())
        .catch(error => console.error)

}