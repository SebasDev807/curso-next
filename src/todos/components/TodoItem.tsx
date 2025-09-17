
'use client'

import { Todo } from "@/generated/prisma"
import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
    todo: Todo;
    //TODO: Acciones a llamar
    toggleTodo: (id: string, complete: boolean) => Promise<Todo>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

    const { id, description, complete } = todo;

    return (
        <div className={todo.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

                <button
                    onClick={() => toggleTodo(id, !complete)}
                    className={
                        `flex p-2 rounded-full cursor-pointer
                     hover:bg-opacity-60
                   bg-blue-100
                   ${complete ? 'bg-blue-100' : 'bg-red-100'}
                    `
                    }>
                    {
                        complete
                            ? <IoCheckboxOutline size={30} />
                            : <IoSquareOutline size={30} />
                    }

                </button>

                <div className="text-center sm:text-left">
                    {description}
                </div>



            </div>
        </div>
    )
}
