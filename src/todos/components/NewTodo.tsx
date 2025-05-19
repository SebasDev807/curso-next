'use client';


import { IoTrashBinOutline, IoAddCircleOutline } from "react-icons/io5";

import Image from "next/image";
import { useTodos } from "../hooks/useTodos";



export const NewTodo = () => {


    const { description, handleChange, inputError, isLoading, onSubmitPut, onSubmitDelete, errorClassStyle } = useTodos();

    return (
        <form className='flex justify-start mb-4' onSubmit={onSubmitPut}>
            <input type="text"
                className={`w-6/12  pl-3 pr-3 py-2 rounded-lg border-2 outline-none border-gray-200 focus:border-sky-500 transition-all ${errorClassStyle()}`}
                placeholder={inputError ? `El input no debe estar vacío` : '¿Que necesitas hacer?'}
                onChange={(e) => handleChange(e)}
                value={description}
            />

            <button
                type='submit'
                className="flex gap-x-2 items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all cursor-pointer"
                disabled={isLoading}
            >
                {/* <IoAddCircleOutline size={20} /> */}

                {
                    isLoading
                        ? <Image src="/loader-dots.svg" alt="carga" width={40} height={5} />
                        : <span className="flex items-center gap-x-2">
                            <IoAddCircleOutline size={20} />
                            Crear
                        </span>

                }
                {/* Crear */}
            </button>

            <button
                onClick={onSubmitDelete}
                type='button'
                className="flex gap-x-2 items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all cursor-pointer"

            >
                {
                    isLoading
                        ? <Image src="/loader-dots.svg" alt="carga" width={40} height={5} />

                        : <span className="flex items-center gap-x-2">
                            <IoTrashBinOutline />
                            Eliminar todos
                        </span>
                }
            </button>


        </form>
    )
}