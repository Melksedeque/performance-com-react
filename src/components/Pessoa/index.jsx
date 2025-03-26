import { useMemo } from "react";

function Pessoa({ nome, deletar, id }) {
  useMemo(() => {
    console.log(`Pessoa ${nome} foi atualizado`);
  }, [nome]);

  return (
    <li className="box columns is-vcentered is-centered my-5">
      <span className="is-half">{nome}</span>
      <button
        className="button is-small is-half is-danger ml-2"
        onClick={() => deletar(id)}
      >
        Me delete!
      </button>
    </li>
  );
}

export default Pessoa;
