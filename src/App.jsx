import Mainpage from "./views/Mainpage";
import Posts from "./views/Posts";
import Layout from "./components/Layout";

import { BrowserRouter, Routes, Route } from "react-router";
import Detail from "./views/Detail";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={ <Mainpage/> } />
						<Route path="/posts" element={ <Posts/> } />
						<Route path="posts/:id" element={ <Detail/> } />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
