import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JS from "./pages/JS";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			{/* Ici pour faire les routes */}
			<Routes>
				{/* ici les routes au singulier avec la path et l'element sous forme de composant avec les accolades autour */}
				<Route path="/" element={<Home />} />
				<Route path="/html" element={<HTML />} />
				<Route path="/css" element={<CSS />} />
				<Route path="/js" element={<JS />} />
			</Routes>
		</div>
	);
}

export default App;
