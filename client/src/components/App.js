import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

//PAGES

import Home from '../pages/Home.js';
import ErrorPage from '../pages/Error.js';
import ListFilms from '../pages/film/listFilms.js';
import ShowFilm from '../pages/film/showFilm.js';
import ListActors from '../pages/actor/listActors';
import ShowActor from '../pages/actor/showActor.js'

//UI COMPONENTS

import Header from './Header.js';
import Footer from './Footer.js';


function App() {  
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={ListFilms} />
          <Route path="/film/:id" component={ShowFilm} />
          <Route path="/actors" component={ListActors} />
          <Route path="/actor/:id" component={ShowActor} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
