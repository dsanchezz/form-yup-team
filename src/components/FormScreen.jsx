import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "../App.css";

const schema = yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("Los apellidos son requeridos"),
    age: yup
        .number()
        .min(18, "Debes ser mayor de 18 años")
        .required("La edad es requerida"),
    phone: yup
        .string()
        .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
        .required("El teléfono es requerido"),
    pass: yup.string().min(4, "Mínimo 4 caracteres").max(10, "Máximo 10 caracteres").required("La contraseña es requerida"),
    confirmPass: yup
        .string()
        .oneOf([yup.ref("pass"), null], "Las contraseñas deben coincidir")
        .required("Debes confirmar la contraseña"),
});

function FormScreen() {
    const navigate = useNavigate();
    const {register, handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    function onSubmit(data) {
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/login");
    }

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nombre" {...register("name")} />
                <p>{errors.name?.message}</p>
                <input type="text" placeholder="Apellidos" {...register("lastName")} />
                <p>{errors.lastName?.message}</p>
                <input type="number" placeholder="Edad" {...register("age")} />
                <p>{errors.age?.message}</p>
                <input type="text" placeholder="Teléfono" {...register("phone")} />
                <p>{errors.phone?.message}</p>
                <input type="password" placeholder="Contraseña" {...register("pass")} />
                <p>{errors.pass?.message}</p>
                <input type="password" placeholder="Confirmar contraseña" {...register("confirmPass")} />
                <p>{errors.confirmPass?.message}</p>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default FormScreen;