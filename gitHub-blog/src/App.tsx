import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import "@fortawesome/fontawesome-svg-core";
import { GitContextProvider } from "./context/GitContext";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<GlobalStyles />
				<GitContextProvider>
					<Router />
				</GitContextProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}
