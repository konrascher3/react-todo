import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)`
	width: 100%;
`;

const AddTodo = ({ text, setText, setTodos, todos }) => {
	return (
		<>
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
				onClick={() => {
					const newArray = [...todos];
					newArray.push({
						name: text,
						checked: false,
						isEditing: false,
					});
					setTodos(newArray);
					console.log(newArray);
					setText("");
				}}
			>
				Add
			</Button>
		</>
	);
};

export default AddTodo;
