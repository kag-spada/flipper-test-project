import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CoinFlip from "./pages/CoinFlip";
import Mines from "./pages/Mines";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
            <Home />
					}
				>
					<Route path="flip" element={<CoinFlip />} />
					<Route path="mines" element={<Mines/>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
