import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RecruitsView } from './recruits/recruitsview';
import { FormationView } from './team/formationview'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { SquadView } from './squads/squadview';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to="/">Formation</Link>
          <Link to="/recruits">Recruits</Link>
          <Link to="/squad">Squad</Link>
          <Route render={({ history, location }) => {
            return (
              <Switch>
                <Route exact path="/" component={FormationView} />
                <Route exact path="/recruits" component={RecruitsView} />
                <Route exact path="/squad" component={SquadView} />
              </Switch>
            )
          }} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
