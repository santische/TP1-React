import { useState } from "react";

function Formulario({ agregarCita }) {
  const [formulario, setFormulario] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  
  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        if (!formulario.mascota || !formulario.dueño || !formulario.fecha || !formulario.hora || !formulario.sintomas) {
          alert("Por favor completa todos los campos");
          return;
        }
          agregarCita(formulario);
        setFormulario({ mascota: "", dueño: "", fecha: "", hora: "", sintomas: "" });
      }}>

        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota" 
          className="u-full-width"
          value={formulario.mascota}
          onChange={(e) => setFormulario({ ...formulario, mascota: e.target.value })}
        />

        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario" 
          className="u-full-width"
          value={formulario.dueño}
          onChange={(e) => setFormulario({ ...formulario, dueño: e.target.value })}
        />

        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha" 
          className="u-full-width"
          value={formulario.fecha}
          onChange={(e) => setFormulario({ ...formulario, fecha: e.target.value })}
        />

        <label>Hora</label>
        <input 
          type="time" 
          name="hora" 
          className="u-full-width"
          value={formulario.hora}
          onChange={(e) => setFormulario({ ...formulario, hora: e.target.value })}
        />

        <label>Sintomas</label>
        <textarea 
          name="sintomas" 
          className="u-full-width"
          value={formulario.sintomas}
          onChange={(e) => setFormulario({ ...formulario, sintomas: e.target.value })}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;