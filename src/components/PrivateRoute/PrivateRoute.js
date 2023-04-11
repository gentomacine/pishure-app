import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
	const isAuthenticated = () => { 
  	  const token = window.localStorage.getItem('userUniqueKey');
  try {
    if(token){
		console.log("good")
      return true;
    }
    else{
		console.log('black')
      return false;
    }
  } catch (error) {
    return false;
  }
}
	return (
		<Route {...rest} render={props => isAuthenticated() ? (<Component {...props} />) : (
			  <Redirect
				to={{
				  pathname: "/login",
				}}
			  />
			)
		  }
		/>
	  );
	// const { user } = useAuth()
	// const user = {};
	// return (
	// 	<Route
	// 		path={path}
	// 		render={({ location }) => {
	// 			return user ? (
	// 				children
	// 			) : (
	// 				<Redirect
	// 					to={{ pathname: "/login", state: { from: location } }}
	// 				/>
	// 			);
	// 		}}
	// 	/>
	// );
};
export  { PrivateRoute };
