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
        <div className="container">
            
            <h2>Nuevos usuarios</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nombre" {...register("name")} className="form-input" />
                <p>{errors.name?.message}</p>
                <input type="text" placeholder="Apellidos" {...register("lastName")} className="form-input" />
                <p>{errors.lastName?.message}</p>
                <input type="number" placeholder="Edad" {...register("age")} className="form-input" />
                <p>{errors.age?.message}</p>
                <input type="text" placeholder="Teléfono" {...register("phone")} className="form-input" />
                <p>{errors.phone?.message}</p>
                <input type="password" placeholder="Contraseña" {...register("pass")} className="form-input"/>
                <p>{errors.pass?.message}</p>
                <input type="password" placeholder="Confirmar contraseña" {...register("confirmPass")} className="form-input" />
                <p>{errors.confirmPass?.message}</p>
                <button type="submit" className="form-button">Registrarse</button>
            </form>
        </div>
    );
}

export default FormScreen;