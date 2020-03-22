import React, {Component} from 'react'; // importing component
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'; // importing router 
import axios from 'axios'; // importing axios
import './App.css'; // importing css file

import Home from './Components/Home'; // importing Home component

const backendAuthorUrl = "http://localhost:8080/api/users/"; // defined variable for the api/users backend url
const backendRecipeUrl = "http://localhost:8080/api/recipes/"; // defined variable for the api/users backend url

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        authors: [],
        // newAuthorFirstName: "",
        // newAuthorLastName: "",
        // newAuthorEmail: '', 
        recipes: [],
        // newRecipeName: "",
        // newRecipeUrl: "",
        // newRecipeImageUrl: "",
        // ingredients: [],
        // newIngredientName: "",
        // newIngredientQuantity: 0,
        // newIngredientMeasurement: '',
        searchAuthorText: '',
        searchRecipeText: ''
    }
  }

  getAuthorsAxios() {
    axios({
    method: 'GET',
    url: backendAuthorUrl
  })
  .then(authors => 
    this.setState({authors: authors.data})
    ).catch(error => {
      console.log(error)
    })
  }


  getAuthorsEmailAxios() {
    axios({
    method: 'GET',
    url: `${backendAuthorUrl}/byEmail/${this.state.searchText}`
      
  })
  .then(authors =>
    this.setState({authors: authors.data})
    ).catch(error => {
      console.log(error)
    })
  }

  getRecipesAxios() {
    axios({
    method: 'GET',
    url: backendRecipeUrl
  })
  .then(recipes => {
    console.log(recipes)
    this.setState({recipes: recipes.data})}
    ).catch(error => {
      console.log(error)
    })
  }

  handleChangeAuthorSearch = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleAllAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorsAxios()
  }

  handleAllRecipeSearch = event => {
    console.log("recipes running")
    event.preventDefault()
    this.getRecipesAxios()
  }

  handleSubmitAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorsEmailAxios()
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  render() {
    console.log(this)
    return (
      <div className="App">
        <h1>Recipe Cookbook</h1>
        <Switch>
          <Route exact path="/" render={routerProps => (
            <Home 
              {...routerProps}
              authors={this.state.authors}
              recipes={this.state.recipes}
              searchAuthorText={this.state.searchAuthorText}
              searchRecipeText={this.state.searchRecipeText}
              handleAllAuthorSearch={this.handleAllAuthorSearch}
              handleAllRecipeSearch={this.handleAllRecipeSearch}
              handleChangeAuthorSearch={this.handleChangeAuthorSearch} 
              handleSubmitAuthorSearch={this.handleSubmitAuthorSearch}
              refreshPage={this.refreshPage}
            /> )} 
          />
          <Route path="/*" render={() => 
            <Redirect to="/" 
            /> } 
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);