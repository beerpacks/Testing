import React from 'react';
import './App.css';
import { RecruitsView } from './recruits/recruitsview';
import { FormationView } from './team/formationview'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { SquadView } from './squads/squadview';
import { AllTeamSheetsView } from './team/allteamsheetsview';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div style={{ display: 'flex' }}>
            <Link to="/">Team Sheet</Link>
            <Link style={{ marginLeft: 10 }} to="/teamsheets">All Team Sheets</Link>
            <Link style={{ marginLeft: 10 }} to="/recruits">Recruits</Link>
            <Link style={{ marginLeft: 10 }} to="/squad">Squad</Link>
          </div>
          <Route render={({ history, location }) => {
            return (
              <Switch>
                <Route exact path="/" component={FormationView} />
                <Route exact path="/teamsheets" component={AllTeamSheetsView} />
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
