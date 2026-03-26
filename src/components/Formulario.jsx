import "../styles/Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>CREAR MI CITA</h2>

      <input placeholder="Nombre Mascota" />
      <input placeholder="Nombre dueño de la mascota" />
      <input type="date" />
      <input type="time" />
      <textarea placeholder="Síntomas"></textarea>

      <button>AGREGAR CITA</button>
    </div>
  );
}

export default Formulario;