import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

const AppProviders = ({ children }) => {
	return (
		<AuthProvider>
			<Router>{children}</Router>
		</AuthProvider>
	);
};

export default AppProviders;
