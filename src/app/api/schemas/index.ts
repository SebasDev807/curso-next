
import * as yup from 'yup';


export const postSchema = yup.object({
    description: yup.string().required().min(5),
    complete: yup.boolean().optional().default(false), //TODO: Mostrar algo interesante
});

export const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})