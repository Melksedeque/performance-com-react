import { useCallback, useState } from "react";
import Pessoa from "../Pessoa";
import faker from "faker";

faker.locale = "pt_BR";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState([
    "Maria do Carmo",
    "João Carlos Silva",
    "José de Alencar",
  ]);

  const deletarPessoa = useCallback((id) => {
    setPessoas((listaAnterior) =>
      listaAnterior.filter((pessoa, index) => index !== id)
    );
  }, []);

  return (
    <>
      <ul>
        {pessoas.map((pessoa, index) => (
          <Pessoa
            key={index}
            nome={pessoa}
            id={index}
            deletar={deletarPessoa}
          />
        ))}
      </ul>
      <button
        className="button is-primary is-outlined mt-5"
        onClick={() =>
          setPessoas((listaAnterior) => [
            ...listaAnterior,
            faker.name.findName(),
          ])
        }
      >
        Adicionar Pessoa
      </button>
    </>
  );
}
