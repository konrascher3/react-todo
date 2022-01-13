import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";
import { Row } from "@contour/react";

const StyledTextField = styled(TextField)`
	width: 100%;
`;

const StyledRow = styled(Row)`
	margin: 0;
	padding: 0;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const AddTodo = ({ text, setText, setTodos, todos }) => {
	return (
		<>
			<StyledRow strategy="grid" colCount={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}>
				<StyledForm
					onSubmit={event_ => {
						event_.preventDefault();
						const newArray = [...todos];
						newArray.push({
							id: uuid(),
							name: text,
							checked: false,
							isEditing: false,
						});
						setTodos(newArray);
						console.log(newArray);
						setText("");
					}}
				>
					<StyledTextField
						size="small"
						type="text"
						value={text}
						onChange={event_ => {
							setText(event_.target.value);
						}}
						label="Add Todo"
					/>
					<Button type="submit" variant="contained" disabled={!text}>
						Add
					</Button>
				</StyledForm>
			</StyledRow>
		</>
	);
};

export default AddTodo;
