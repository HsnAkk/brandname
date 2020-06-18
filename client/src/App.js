import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import MenuItem from './pages/MenuItem';
import './App.css';


function App() {

    return (
      <div className="content-outbox">
        <Header />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/menu2" component={() => <MenuItem menuNumber="2"/>} />
            <Route path="/menu3" component={() => <MenuItem menuNumber="3"/>} />
            <Route path="/menu4" component={() => <MenuItem menuNumber="4"/>} />
            <Route path="/menu5" component={() => <MenuItem menuNumber="5"/>} />
            <Route path="/menu6" component={() => <MenuItem menuNumber="6"/>} />
        </Switch>
      </div>
    )
}

export default App

