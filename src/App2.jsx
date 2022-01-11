import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

import { Column, Grid, Row } from "@contour/react";
import { ThemeProvider, css, Global } from "@emotion/react";
import createTheme from "@mui/material/styles/createTheme";

import {
	createTheme as createContourTheme,
	defaultTheme,
	createMediaQueries,
} from "@contour/theme";

const normalize = css`
	body {
		margin: 0;
	}
`;

/*styled.div = styled("div")*/
const CardWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	gap: inherit;
`;

/*const StyledCard2 = { button: { backgroundColor: "blue" } };*/

const StyledCard = styled(Card)`
	width: 100%;

	/* TODO: Add Card Test-classes from MUI API */
`;

const muiTheme = createTheme({
	typography: {
		fontFamily: "'Open Sans', sans-serif",
	},
});

const keyMap = {
	xs: "xs",
	sm: "s",
	md: "m",
	lg: "l",
	xl: "xl",
};

const breakpoints = Object.entries(muiTheme.breakpoints.values).reduce(
	(previousValue, [key, value]) => {
		return {
			...previousValue,
			[keyMap[key]]: value,
		};
	},
	defaultTheme.contour.breakpoints
);

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

const StyledColumn = styled(Column)`
	display: grid;
	gap: ${({ theme }) => theme.spacing(2)};
`;

const StyledTextField = styled(TextField)`
	width: 100%;
`;

const StyledBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const handleEditInputChange = event_ => {
	setCurrentTodo({ ...currentTodo, name: event_.target.value });
};

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
			<ThemeProvider theme={muiTheme}>
				<ThemeProvider theme={contourTheme}>
					<Global styles={normalize} />
					{/* TODO: In this case: 'Stack'-component from MUI */}
					<Grid strategy="grid">
						<StyledColumn colStart={{ m: 2, l: 4, xl: 4 }} colSpan={{ m: 6 }}>
							{/*<Row strategy="grid" colCount={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}>*/}
							<Row strategy="grid" colCount={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}>
								<StyledTextField
									size="small"
									type="text"
									value={text}
									onChange={event_ => {
										setText(event_.target.value);
									}}
									label="Add Todo"
								/>

								<Button
									variant="contained"
									disabled={!text}
									onSubmit={() => {
										const newArray = [...todos];
										newArray.push({
											name: text,
											checked: false,
											isEditing: false,
										});
										setTodos(newArray);
										setText("");
									}}
								>
									Add
								</Button>
							</Row>
							{todos.map((todo, index) => (
								<CardWrapper key={index}>
									<StyledCard>
										<Checkbox
											type="checkbox"
											onChange={() => {
												const newArray = [...todos];
												newArray[index].checked = !newArray[index].checked;
												setTodos(newArray);
											}}
										/>
										{todo.isEditing ? (
											<Input value={todo.name} />
										) : (
											<span
												style={
													todo.checked
														? { textDecoration: "line-through" }
														: { textDecoration: "none" }
												}
											>
												{todo.name}
											</span>
										)}
									</StyledCard>

									<Button
										variant="outlined"
										color="primary"
										onClick={() => {
											const newArray = [...todos];
											newArray[index].isEditing = !newArray[index].isEditing;
											setTodos(newArray);
											console.log(todo.isEditing);

											if (todo.isEditing) {
											}
										}}
									>
										{todo.isEditing ? "Save" : "Edit"}
									</Button>
									<Button
										variant="contained"
										color="error"
										onClick={() => {
											const newArray = [...todos];
											newArray.splice(index, 1);
											setTodos(newArray);
										}}
									>
										Delete
									</Button>
								</CardWrapper>
							))}
							{/*</Row>*/}
						</StyledColumn>
					</Grid>
				</ThemeProvider>
			</ThemeProvider>
		</div>
	);
};

export default App2;
