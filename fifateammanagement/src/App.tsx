import React from 'react';
import './App.css';
import { RecruitsView } from './recruits/recruitsview';
import { FormationView } from './gamesquad/formationview'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { SquadView } from './squads/squadview';
import { GameSquadsView } from './gamesquad/gamesquadsview';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div style={{ display: 'flex' }}>
            <Link to="/">Team Sheet</Link>
            <Link style={{ marginLeft: 10 }} to="/gamesheets">All Team Sheets</Link>
            <Link style={{ marginLeft: 10 }} to="/recruits">Recruits</Link>
            <Link style={{ marginLeft: 10 }} to="/squad">Squad</Link>
          </div>
          <Route render={({ history, location }) => {
            return (
              <Switch>
                <Route exact path="/" component={FormationView} />
                <Route exact path="/gamesheets" component={GameSquadsView} />
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
