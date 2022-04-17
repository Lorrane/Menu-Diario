import {
  BrowserRouter as Browser,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import ListaReceita from "./Pages/ListaReceita";

function App() {
  return (
    <Browser>
      <h2>Escolha sua Refeição</h2>
      <Link to={"/cafe"}>
        {/* linha somente para lembrar de usar o link to no menu*/}
        <p>Aqui ficará um menu que meu amor vai escolher depois.</p>
      </Link>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/refeicao">
            <Route path=":refId" element={<ListaReceita />}>
              <Route path=":recId" element={<ListaReceita />} />
            </Route>
          </Route>
          {/* <Route path="/cafe/11"  element={<Receita />} /> nessa linha vou implementar a lógica para chamar o item que for clicado pelo receitas */}
        </Routes>
      </div>
    </Browser>
  );
}

export default App;
