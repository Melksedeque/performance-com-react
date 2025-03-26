import { useState } from "react";
import Pessoa from "../Pessoa";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState(["Maria", "João", "José"]);

  function deletarPessoa(id) {
    setPessoas((listaAnterior) =>
      listaAnterior.filter((pessoa, index) => index !== id)
    );
  }

  return (
    <>
      <ul>
        {pessoas.map((pessoa, index) => (
          <Pessoa nome={pessoa} id={index} deletar={deletarPessoa} />
        ))}
      </ul>
      <button
        className="button is-primary is-outlined mt-5"
        onClick={() =>
          setPessoas((listaAnterior) => [...listaAnterior, "Melk"])
        }
      >
        Adicionar Pessoa
      </button>
    </>
  );
}
