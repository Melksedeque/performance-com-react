import "./App.css";
import ListaPessoas from "./components/ListaPessoas";

function App() {
  return (
    <div className="has-text-centered">
      <h1 className="title">Lista de Pessoas</h1>
      <h2 className="subtitle">Clique no botão para adicionar uma pessoa</h2>
      <hr />
      <ListaPessoas />
    </div>
  );
}

export default App;
