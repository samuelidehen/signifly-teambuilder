import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import TeamList from "./components/Team/TeamList";
import SelectedTeam from "./components/Pages/SelectedTeam";
import { Provider } from "./context";
import GeneratedTeam from "./components/Pages/GeneratedTeam";
//import Card from "./components/UI/Card";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/selected" component={SelectedTeam} />
          <Route path="/generated" component={GeneratedTeam} />
          <Route exact path="/" component={TeamList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
