import { createTodo, deleteTodo } from "../utils/todos";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export const useTodos = () => {

    const [description, setDescription] = useState('');
    const [inputError, setInputError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const onSubmitPut = async (event: FormEvent) => {
        event.preventDefault();

        if (description.trim().length === 0) {
            setInputError('La descripción no puede ir vacía');
            console.log(inputError)
            return;
        }



        setIsLoading(true)

        await createTodo(description);
        setDescription('');
        setInputError('');
        router.refresh();

        setIsLoading(false)

    }

    const onSubmitDelete = async () => {
        setIsLoading(true)
        await deleteTodo()
        router.refresh()
        setIsLoading(false);

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDescription(value)
        setInputError('');
    }

    const errorClassStyle = () => {
        return inputError ? 'border-red-300 placeholder-red-300 bg-red-200' : ''
    }


    return {
        handleChange,
        isLoading,
        onSubmitPut,
        description,
        inputError,
        errorClassStyle,
        onSubmitDelete
    }
}
