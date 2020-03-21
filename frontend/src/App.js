import React, { Component } from 'react';                   // importing component
import {Redirect, Route, Switch} from 'react-router-dom';   // importing router 
import axios from 'axios';                                  // importing axios

import './App.css';                                         // importing css file

import Home from './Components/Home';                        // importing Home component
import User from './Components/User';                        // importing User component
import NewRecipe from './Components/NewRecipe';              // importing NewRecipe component
import EditRecipe from './components/EditRecipe';            // importing EditRecipe component

function App() {
  return (
    <div className="App">Recipe Notebook
    </div>
  );
}

export default App;
