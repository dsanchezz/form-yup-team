import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Form() {
    //Se crea un esquema de validación con Yup
    const schema = yup.object().shape({
        name: yup.string().required("El nombre es obligatorio"),
        lastname: yup.string().required("El apellido es obligatorio"),
        email: yup.string().email().required("El email es obligatorio"),
        age: yup.number().positive().min(18, "La edad minima es de 18 años").required("La edad es obligatoria"),
        cellphone: yup.number().positive().required("El telefono es obligatorio"),
        pass: yup.string().required("Ingresa una contraseña de min 4 caracteres").min(4).max(10),
        confirmPass: yup.string().oneOf([yup.ref('pass')], 'Las contraseñas no coinciden')
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    function onSubmit(data){
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='container'>
                <input type="text" placeholder='Nombre' {...register("name")}/>
                <p>{errors.name?.message}</p>
                <input type="text" placeholder='Apellidos' {...register("lastname")}/>
                <p>{errors.lastname?.message}</p>
                <input type="email" placeholder='Email' {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type="number" placeholder='Edad'{...register("age")} />
                <p>{errors.age?.message}</p>
                <input type="number" placeholder='Telefono'{...register("cellphone")} />
                <p>{errors.cellphone?.message}</p>
                <input type="password" placeholder='Contraseña'{...register("pass")} />
                <p>{errors.pass?.message}</p>
                <input type="password" placeholder='Confirmar contraseña' {...register("confirmPass")} />
                <p>{errors.confirmPass?.message}</p>
                <input type="submit" />
            </form>
        </div>
    )
}