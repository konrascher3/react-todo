import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";

const StyledTextField = styled(TextField)`
	width: 100%;
`;

const AddTodo = ({ text, setText, setTodos, todos }) => {
	return (
		<>
			<form
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
			</form>
		</>
	);
};

export default AddTodo;
