import { useCallback, useState } from "react";
import Pessoa from "../Pessoa";
import faker from "faker";

faker.locale = "pt_BR";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState([
    { id: faker.datatype.uuid(), nome: "Maria do Carmo" },
    { id: faker.datatype.uuid(), nome: "João Carlos Silva" },
    { id: faker.datatype.uuid(), nome: "José de Alencar" },
  ]);

  const deletarPessoa = useCallback((id) => {
    setPessoas((listaAnterior) =>
      listaAnterior.filter((pessoa) => pessoa.id !== id)
    );
  }, []);

  return (
    <>
      <ul>
        {pessoas.map((pessoa) => (
          <Pessoa
            key={pessoa.id}
            nome={pessoa.nome}
            id={pessoa.id}
            deletar={deletarPessoa}
          />
        ))}
      </ul>
      <button
        className="button is-primary is-outlined mt-5"
        onClick={() =>
          setPessoas((listaAnterior) => [
            ...listaAnterior,
            {
              id: faker.datatype.uuid(),
              nome: faker.name.findName(),
            },
          ])
        }
      >
        Adicionar Pessoa
      </button>
    </>
  );
}
