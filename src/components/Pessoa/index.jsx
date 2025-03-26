import { useMemo } from "react";

function Pessoa({ nome, deletar, id }) {
  useMemo(() => {
    console.log(`Pessoa ${nome} foi atualizado`);
  }, [nome]);

  return (
    <li key={nome} className="box mb-3">
      <p>{nome}</p>
      <button onClick={() => deletar(id)}>Me delete!</button>
    </li>
  );
}

export default Pessoa;
