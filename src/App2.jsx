import React, { useState } from "react";

import Todo from "../src/components/Todo";
import AddTodo from "../src/components/AddTodo";
import Layout from "../src/components/Layout";
import ThemeProvider from "../src/components/ThemeProvider";
import { Row } from "@contour/react";
import { v4 as uuid } from "uuid";
import { createTheme as createContourTheme } from "@contour/theme";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
	typography: {
		fontFamily: "'Open Sans', sans-serif",
	},
});

const muiGap = Number.parseInt(muiTheme.spacing(1), 10);

const contourTheme = createContourTheme({
	contour: {
		/* MUI defaults */
		/*mq: createMediaQueries(breakpoints),
			breakpoints,*/
		gap: {
			xs: muiGap * 2,
			s: muiGap * 2,
			m: muiGap * 2,
			l: muiGap * 2,
			xl: muiGap * 2,
		},
		margin: {
			xs: muiGap * 2,
			s: muiGap * 2,
			m: muiGap * 2,
			l: muiGap * 2,
			xl: muiGap * 2,
		},
	},
});

const App2 = () => {
	const [todos, setTodos] = useState([
		{
			id: uuid(),
			name: "Play Guitar",
			checked: false,
			isEditing: false,
		},
		{
			id: uuid(),
			name: "Buy Crypto",
			checked: false,
			isEditing: false,
		},
		{
			id: uuid(),
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
			{/* TODO: ThemeProvider prevents app from rendering*/}
			<ThemeProvider theme={contourTheme}>
				{/*	/!* TODO: In this case: 'Stack'-component from MUI *!/*/}
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
