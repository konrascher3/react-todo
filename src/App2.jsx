import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

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

const CardWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
`;

const StyledCard = styled(Card)`
	width: 100%;
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

const App2 = () => {
	const [todos, setTodos] = useState([
		{
			name: "Play Guitar",
			checked: false,
		},
		{
			name: "Buy Crypto",
			checked: false,
		},
		{
			name: "Watch Netflix",
			checked: false,
		},
	]);
	const [text, setText] = useState("");
	return (
		<div>
			<h1>My solution</h1>
			<ThemeProvider theme={muiTheme}>
				<ThemeProvider theme={contourTheme}>
					<Global styles={normalize} />
					{/* In this case: 'Stack'-component from MUI */}
					<Grid strategy="grid">
						<StyledColumn colStart={{ m: 2, l: 4, xl: 4 }} colSpan={{ m: 6 }}>
							{/*<Row strategy="grid" colCount={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}>*/}
							<ButtonGroup>
								<TextField
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
									onClick={() => {
										const newArray = [...todos];
										newArray.push({ name: text });
										setTodos(newArray);
										setText("");
									}}
								>
									Add
								</Button>
							</ButtonGroup>
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
										<span
											style={
												todo.checked
													? { textDecoration: "line-through" }
													: { textDecoration: "none" }
											}
										>
											{todo.name}
										</span>
									</StyledCard>
									<Button
										variant="contained"
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
