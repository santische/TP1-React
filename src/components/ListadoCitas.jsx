import Cita from "./Cita";

function ListadoCitas({ citas, eliminarCita  }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} index={index} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
}

export default ListadoCitas;