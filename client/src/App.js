// lib
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// local
import Footer from './components/Footer';
import Header from './components/Header';
import Friend from './pages/Friend';
import Group from './pages/Group';
import Home from './pages/Home';
import Setting from './pages/Setting';

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <div className="flex flex-col justify-between bg-green-300 h-screen">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/group" component={Group} />
            <Route path="/friend" component={Friend} />
            <Route path="/setting" component={Setting} />
            <Footer />
          </div>
        </>
      </Switch>
    </Router>
  )
}

export default App
