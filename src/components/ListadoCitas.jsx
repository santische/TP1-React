import Cita from "./Cita";

function ListadoCitas({ citas }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
}

export default ListadoCitas;