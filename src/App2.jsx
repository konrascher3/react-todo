import React, { useState } from "react";

import Todo from "../src/components/Todo";
import AddTodo from "../src/components/AddTodo";
import Layout from "../src/components/Layout";
import ThemeProvider from "../src/components/ThemeProvider";

const App2 = () => {
	const [todos, setTodos] = useState([
		{
			name: "Play Guitar",
			checked: false,
			isEditing: false,
		},
		{
			name: "Buy Crypto",
			checked: false,
			isEditing: false,
		},
		{
			name: "Watch Netflix",
			checked: false,
			isEditing: false,
		},
	]);
	const [text, setText] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [currentTodo, setCurrentTodo] = useState({});

	return (
		<div>
			<h1>My solution</h1>
			<ThemeProvider>
				{/* TODO: In this case: 'Stack'-component from MUI */}
				<Layout>
					{/*<Row strategy="grid" colCount={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}>*/}
					<Row strategy="grid" colCount={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}>
						<AddTodo text={text} setText={setText} todos={todos} setTodos={setTodos} />
					</Row>
					{todos.map((todo, index) => (
						<Todo
							key={index}
							todos={todos}
							todo={todo}
							setTodos={setTodos}
							index={index}
						/>
					))}
				</Layout>
			</ThemeProvider>
		</div>
	);
};

export default App2;
