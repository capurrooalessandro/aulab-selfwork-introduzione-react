import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";

export default function App() {
	const list = ["Marco", "Alessandro", "Matteo", "Simone", "Roberto"]
	return (
		<>
			<Navbar/>
			<Header title="Titolo"/>
			<List list={list}></List>
		</>
	)
}
