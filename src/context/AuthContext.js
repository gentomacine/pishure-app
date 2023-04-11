import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	let userDetails;
	useEffect(() => {
		userDetails = JSON.parse(window.localStorage.getItem("credentials"))
	}, [])

	const [user, setUser] = useState(
		userDetails?.user || null
	);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	let value = useContext(AuthContext);
	if (!value) throw new Error("useAuth is not within a context");
	return value;
};

export { AuthProvider, useAuth };
