import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import Todo from "./components/Todo";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
	return (
		<Fragment>
			<div className="container bgclr">
			    <Header />
				<Todo />
				<List />
				<Footer />
			</div>
		</Fragment>
	);
}

export default App;
