import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas) {
      try {
        setCitas(JSON.parse(citasGuardadas));
      } catch (error) {
        console.error("Error al parsear citas guardadas:", error);
        setCitas([
          {
            mascota: "Momia",
            dueño: "Alejo",
            fecha: "2023-12-12",
            hora: "09:14",
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
      }
    } else {
      setCitas([
        {
          mascota: "Momia",
          dueño: "Alejo",
          fecha: "2023-12-12",
          hora: "09:14",
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
    }
  }, []); 

  // Aca se encarga de guardar los cambios en las citas en el LocalStg
  useEffect(() => {
    if (citas.length > 0) {
      localStorage.setItem("citas", JSON.stringify(citas));
    }
  }, [citas]); // Aca se ejecuta cada vez que cambia citas

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