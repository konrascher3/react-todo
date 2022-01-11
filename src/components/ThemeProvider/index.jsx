import React from "react";

import {
	createTheme as createContourTheme,
	defaultTheme,
	createMediaQueries,
} from "@contour/theme";

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

const ThemeProvider = ({ children }) => {
	return (
		<ThemeProvider theme={muiTheme}>
			<ThemeProvider theme={contourTheme}>{children}</ThemeProvider>
		</ThemeProvider>
	);
};

export default ThemeProvider;
