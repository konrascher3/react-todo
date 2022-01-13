import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

const CardWrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	gap: 0.5em;
`;

const StyledCard = styled(Card)`
	width: 100%;

	/* TODO: Add Card Test-classes from MUI API */
`;

const Todo = ({ todos, todo, setTodos, index }) => {
	return (
		<>
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
		</>
	);
};

export default Todo;
