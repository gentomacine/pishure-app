import { client } from "../../api/client";

const localStorageKey = "_auth_user";

function getToken() {
	return window.localStorage.getItem(localStorageKey).token;
}

function getUser() {
	return window.localStorage.getItem(localStorageKey).user;
}



function login(data) {
	return client("signin", data )
}

function signup(data) {
	return client("signup",  data );
}

function logout() {
	window.localStorage.reoveItem(localStorageKey);
}

export { getToken, login, signup, logout, getUser };
