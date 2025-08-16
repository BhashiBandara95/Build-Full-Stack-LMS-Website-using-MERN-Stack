// common Logic
// create context hook
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
	const value = {};
	return <AppContext.Provider>{props.children}</AppContext.Provider>;
};
