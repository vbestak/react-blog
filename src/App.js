import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import TweetView from "./views/TweetView";
import BrowseTweetView from "./views/BrowseTweetsView";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Footer />

        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/tweet">
            <TweetView />
          </Route>
          <Route path="/myTweets">
            <BrowseTweetView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
