import { Route, Switch } from 'wouter';

// *Stylesheet
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

// *Import pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';

// *Import components

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/Dashboard" component={Dashboard} />

        {/* 404 page*/}
        <Route path="/:page*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
