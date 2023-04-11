import { Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { PrivateRoute } from "./components/PrivateRoute";

import {
  Login,
  Signup,
  ForgotPassword,
  SetPassword,
  MailSent,
} from "./pages/Authentication";
// import {Home} from "./pages/Home";
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload";
import Dashboard from './pages/demo'
import SearchResults from "./pages/Search/SearchResults";
import ImageSearch from "./pages/Search/ImageSearch";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/Settings/Settings.js"


function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/forgotpassword'>
          <ForgotPassword />
        </Route>

        <Route path='/setpassword'>
          <SetPassword />
        </Route>

        <Route path='/mailsent'>
          <MailSent />
        </Route>

        <Route path='/search'>
          <SearchResults />
        </Route>

        <Route path='/imagesearch' >
          <ImageSearch />
        </Route>

        <PrivateRoute path='/upload' exact component={Upload} />
    
        <PrivateRoute path='/profile' exact component={Profile} />

        <PrivateRoute path='/settings' exact component={Settings} />

        <Route path='*'>
          <h2>(404) Page not found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
