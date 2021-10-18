import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Home from './Homepage';
import Detail from './Detailpage';
import Discover from './Discoverpage';
import axios from 'axios';

function App() {
  const API_KEY = "api_key=47fae463820cf95a65aad6491a78ce07"
  const BASE_URL="https://api.themoviedb.org/3/"
  const PARAMS = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate"
  const URL_Trending = "trending/movie/day?"
  const API_URL = BASE_URL + URL_Trending + API_KEY + PARAMS


const [movies, setMovies]=React.useState([]);

async function moviePromise() {
  return await axios.get(API_URL)
}

React.useEffect(async() =>{
  const data = await moviePromise()
  setMovies(data.data.results);
},[])

  return (
    <div className="App">
      <Router>
            <div>
                <Switch>
                    <Route path="/detail">
                    <Detail />
                    </Route>
                    <Route path="/discover">
                    <Discover />
                    </Route>
                    <Route path="/home">
                    <Home movies={movies}/>
                    </Route>
                    <Route path="/">
                    <Redirect to ="/home" />
                    </Route>
                </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
