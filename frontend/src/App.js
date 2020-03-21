import React, { Component } from 'react';                       // importing component
import {Link,
  Redirect, 
  Route, 
  Switch
} from 'react-router-dom';   // importing router 
import axios from 'axios';                                  // importing axios

import './App.css';                                             // importing css file

import Home from './Components/Home';                        // importing Home component
// import User from './Components/User';                        // importing User component
// import NewRecipe from './Components/NewRecipe';              // importing NewRecipe component
// import EditRecipe from './Components/EditRecipe';            // importing EditRecipe component

const backendUsersUrl = "http://localhost:8080/api/users/";          // defined variable for the api/users backend url

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userFirstName: "",
      userLastName: "",
      recipes: [],
    }
  }

  componentDidMount() {
    this.getUsersAxios()
  }

  getUsersAxios() {
    axios({
      method: 'GET',
      url: backendUsersUrl
    })
    .then(users => 
      this.setState({users: users.data}))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createUserAxios()
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Recipe Notebook</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">User's Recipes</Link>
          <Link to="/new-recipe">Create New Recipe Form</Link>
          <Link to="/edit-recipe">Edit Recipe Form</Link>
        </nav>
        <Switch>
          <Route exact path='/' render={() => 
            <Home 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
            /> } 
          />
          <Route path='*' render={() => <Redirect to='/' />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
