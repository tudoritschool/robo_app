import "./Robots.css";
import Search from "../components/robots/Search";
import RobotList from "../components/robots/RobotList";
import { useState, useEffect } from "react";

function Robots() {
	const [robots, setRobots] = useState(null);
	const [inputValue, setInputValue] = useState(null);

	const getRobots = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		console.log(response);
		const robotsFromAPI = await response.json();
		console.log(robotsFromAPI);
		setRobots(robotsFromAPI);
	};

	const onSearch = (input) => {
		setInputValue(input);
	};

	const filterByInput = (arrayRobots, searchValue) => {
		//Daca nu avem o valoare dupa care sa filtram, vom afisa tot array-ul
		if (searchValue === null) return arrayRobots;

		// const filteredByCategories = arrayProducts.filter(...filtrare dupa categorie)
		// filteredByCategories.filter(..input)

		//Altfel, Vom filtra in functie de valoare array-ul
		return arrayRobots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchValue.toLowerCase());
		});
	};

	useEffect(() => {
		getRobots();
	}, []);

	return (
		<>
			<div className='container'>
				<h1>Pagina de robotei!</h1>
				<Search handleSearch={onSearch} />
				{robots ? (
					<RobotList robots={filterByInput(robots, inputValue)} />
				) : (
					<div>Loading...</div>
				)}
			</div>
		</>
	);
}

export default Robots;

// export default Robots = () => {

// }
