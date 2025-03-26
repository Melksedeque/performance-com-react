export default function Pessoa({ nome }) {
  console.log(`Pessoa ${nome} renderizou`);
  return (
    <li>
      <p>{nome}</p>
    </li>
  );
}
