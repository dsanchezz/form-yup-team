import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser && storedUser.pass === password) {
            navigate("/data");
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    }

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Ingresar</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default LoginScreen;