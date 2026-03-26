import { useState } from "react";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [citas] = useState([
    {
      mascota: "Nina",
      dueño: "Martín",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Formulario />
        <ListadoCitas citas={citas} />
      </div>
    </div>
  );
}

export default App;