import { useState } from "react";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [citas, setCitas] = useState([
    {
      mascota: "Momia",
      dueño: "Alejo",
      fecha: "2023-12-12",
      hora: "09:12",
      sintomas: "Le duele Qatar",
    },

     {
      mascota: "Poda",
      dueño: "Alejo",
      fecha: "2025-04-15",
      hora: "11:53",
      sintomas: "Es de cristal",
    },

     {
      mascota: "Boña",
      dueño: "Alejo",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Llora mucho",
    }
  ]);

    const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

    const eliminarCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Header />

    <div className="row">
        <Formulario agregarCita={agregarCita} />
        <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
}

export default App;