export const AboutSection = () => {
  return (
    <section className="box-section">
      <div className="mb-4 pt-2">
        <h2 className="mb-4">Editor de Obelisco v2</h2>
      </div>
      <div>
        <p className="lead">
          A continuación, te presentamos los tres pasos clave para probar los componentes de Obelisco v2 y editarlos fácilmente, permitiéndote ver los cambios en tiempo real.
        </p>
      </div>
      <hr className="my-5" />
      <ul className="list-steps">
        <li className="list-steps-item">
          <h3 className="list-steps-item-title">Paso 1: Copia el HTML necesario</h3>
          <p>
            El primer paso consiste en copiar el código HTML que necesites. Puedes obtenerlo a través de un desarrollador o directamente desde la web de Obelisco.
          </p>
        </li>
        <li className="list-steps-item">
          <h3 className="list-steps-item-title">Paso 2: Usa el editor en línea</h3>
          <p>
            Luego, pega el código HTML en el editor en línea de esta página para que puedas visualizarlo e interactuar con él.
          </p>
        </li>
        <li className="list-steps-item">
          <h3 className="list-steps-item-title">Paso 3: Edita y verifica en tiempo real</h3>
          <p>
            Por último, ajusta el código HTML según tus necesidades. Podrás ver los resultados en tiempo real, asegurándote de que el componente se visualice correctamente.
          </p>
        </li>
      </ul>
      <hr className="my-5" />
    </section>
  );
};
