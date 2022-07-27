import { Route, Switch } from "wouter";

// *Stylesheet
import "./App.css";

// *Import pages
import Home from "./pages/Home";
import NotFound from "./pages/Error404/Error404";
import Login from "./pages/Login/Login.js";

// *Import components

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />"
        <Route path="/:page" component={NotFound} /> {/* NOT FOUND */}
      </Switch>
    </>
  );
}

export default App;
