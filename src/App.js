import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Mockups, Images, Gif } from "./pages";


function App() {
  return (
      <BrowserRouter>
    <Switch>
      <Route path={'/mockups'} exact component={Mockups} />
    </Switch>
    <Switch>
      <Route path={'/images'} exact component={Images} />
    </Switch>
    <Switch>
      <Route path={'/gif'} exact component={Gif} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
