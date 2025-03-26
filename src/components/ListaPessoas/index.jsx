import { useState } from "react";
import Pessoa from "../Pessoa";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState(["Maria", "João", "José"]);
  return (
    <>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa}>
            <Pessoa nome={pessoa} />
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setPessoas((listaAnterior) => [...listaAnterior, "Melk"])
        }
      >
        Adicionar Pessoa
      </button>
    </>
  );
}
