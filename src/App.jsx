import React, { useState } from "react";

import Button from "../src/components/Button";

// const todos = [
// 	{
// 		name: "Play guitar",
// 		isChecked: false,
// 	},
// 	{
// 		name: "Read book",
// 		isChecked: false,
// 	},
// ];

const App = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([
		{
			name: "Buy milk",
			isChecked: true,
		},
	]);
	return (
		<div>
			<div>
				<input
					type="text"
					value={value}
					onChange={event_ => {
						setValue(event_.target.value);
					}}
				/>
				<button
					disabled={!value}
					onClick={() => {
						setTodos([...todos, { name: value, isChecked: false }]);
						setValue("");
					}}
				>
					Add
				</button>
			</div>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={index}>
							<label htmlFor="">
								<input
									type="checkbox"
									checked={todo.isChecked}
									onChange={() => {
										const update = [...todos];
										update[index].isChecked = !update[index].isChecked;
										setTodos(update);
									}}
								/>
								<span
									style={
										todo.isChecked
											? { textDecoration: "line-through" }
											: { textDecoration: "none" }
									}
								>
									{todo.name}
								</span>
							</label>
							<button
								onClick={() => {
									const update = [...todos];
									update.splice(index, 1);
									setTodos(update);
								}}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
