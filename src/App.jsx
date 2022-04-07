import { BrowserRouter as Browser, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Refeicao from './Pages/Refeicao';
import Cafe from './Pages/Cafe';
import './App.css';

function App() {
	return (
		<Browser>
			<h2>Escolha sua Refeição</h2>
			<Link to={"/cafe"}>
			<p>Aqui ficará um cabeçalho bem bonito que meu amor vai escolher depois.</p>
			</Link>
			<div className="container">
				<Routes>
					<Route path="/" element={<Refeicao />} />
					<Route path="/cafe" element={<Cafe />} >
          </Route>
				</Routes>
			</div>
		</Browser>
	);
}

export default App;
