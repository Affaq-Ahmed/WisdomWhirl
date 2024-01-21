import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const [advice, setAdvice] = useState("");

	useEffect(() => {
		const fetchAdvice = async () => {
			const response = await fetch("https://api.adviceslip.com/advice");
			const data = await response.json();
			console.log(data);
			setAdvice(data.slip.advice);
		};

		fetchAdvice();
	}, []);

	return (
		<div className="app">
			<div className="card">
				<h1 className="heading">{advice}</h1>
				<button className="button" onClick={() => window.location.reload()}>
					<span>GIVE ME ADVICE!</span>
				</button>
			</div>
		</div>
	);
};

export default App;
