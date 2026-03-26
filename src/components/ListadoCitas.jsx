import Cita from "./Cita";
import "../styles/ListadoCitas.css";

function ListadoCitas({ citas }) {
  return (
    <div className="listado">
      <h2>ADMINISTRA TUS CITAS</h2>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
}

export default ListadoCitas;