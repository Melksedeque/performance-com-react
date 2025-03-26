function Pessoa({ nome }) {
  console.log(`Pessoa ${nome} renderizou`);
  return <p>{nome}</p>;
}

export default Pessoa;
