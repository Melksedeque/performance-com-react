import { useState } from "react";
import Pessoa from "../Pessoa";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState(["Maria", "João", "José"]);
  return (
    <>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa} className="box mb-3">
            <Pessoa nome={pessoa} />
          </li>
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
