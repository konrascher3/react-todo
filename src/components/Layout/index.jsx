import React from "react";
import { css, Global } from "@emotion/react";
import { Column, Grid, Row } from "@contour/react";
import { styled } from "@mui/material/styles";

const StyledColumn = styled(Column)`
	display: grid;
	gap: ${({ theme }) => theme.spacing(1)};
`;

const normalize = css`
	body {
		margin: 0;
	}
`;

const Layout = ({ children }) => {
	return (
		<>
			<Global styles={normalize} />
			<Grid strategy="grid">
				<StyledColumn colStart={{ m: 2, l: 4, xl: 4 }} colSpan={{ m: 6 }}>
					{children}
				</StyledColumn>
			</Grid>
		</>
	);
};

export default Layout;
