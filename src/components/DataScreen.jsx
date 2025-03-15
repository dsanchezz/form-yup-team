import { useEffect, useState } from "react";
import "../App.css";

function DataScreen() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUserData(data);
  }, []);

  if (!userData) return <p>No hay datos disponibles</p>;

  return (
    <div>
      <h2>Datos Registrados</h2>
      <p>Nombre: {userData.name}</p>
      <p>Apellidos: {userData.lastName}</p>
      <p>Edad: {userData.age}</p>
      <p>Teléfono: {userData.phone}</p>
    </div>
  );
}

export default DataScreen;