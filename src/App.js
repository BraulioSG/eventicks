import { Route, Switch } from "wouter";

// *Stylesheet
import "./App.css";

// *Import pages
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// *Import components

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </>
  );
}
//<Route path="/:page" component={NotFound} /> {/* NOT FOUND */}

export default App;
