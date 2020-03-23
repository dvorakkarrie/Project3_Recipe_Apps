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
  }).then(authors => 
    this.setState({authors: authors.data})
    ).catch(error => {
      console.log(error)
    })
  }

  getAuthorEmailAxios() {
    axios({
    method: 'GET',
    url: `${backendAuthorUrl}/byEmail/${this.state.searchAuthorText}`
  }).then(authors =>
    this.setState({authors: authors.data})
    ).catch(error => {
      console.log(error)
    })
  }

  getRecipesAxios() {
    axios({
    method: 'GET',
    url: backendRecipeUrl
  }).then(recipes => {
    console.log(recipes)
    this.setState({recipes: recipes.data})}
    ).catch(error => {
      console.log(error)
    })
  }

  getRecipeNameAxios() {
    axios({
    method: 'GET',
    url: `${backendRecipeUrl}/byRecipeName/${this.state.searchRecipeText}`
  }).then(recipes => {
    console.log(recipes)
    this.setState({recipes: recipes.data})}
    ).catch(error => {
      console.log(error)
    })
  }

  handleChangeAuthorSearch = event => {
    console.log(event.target.value)
    this.setState({
      searchAuthorText: event.target.value
    })
  }

  handleAllAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorsAxios()
  }

  handleSubmitAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorEmailAxios()
    this.setState({
      searchAuthorText: ''
    })
  }

  handleChangeRecipeSearch = event => {
    console.log(event.target.value)
    this.setState({
      searchRecipeText: event.target.value
    })
  }

  handleAllRecipeSearch = event => {
    event.preventDefault()
    this.getRecipesAxios()
  }

  handleSubmitRecipeSearch = event => {
    event.preventDefault()
    this.getRecipeNameAxios()
    this.setState({
      searchRecipeText: ''
    })
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  render() {
    console.log(this.state.searchAuthorText)
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routerProps => (
            <Home 
              {...routerProps}
              authors={this.state.authors}
              recipes={this.state.recipes}
              searchAuthorText={this.state.searchAuthorText}
              handleAllAuthorSearch={this.handleAllAuthorSearch}
              handleChangeAuthorSearch={this.handleChangeAuthorSearch} 
              handleSubmitAuthorSearch={this.handleSubmitAuthorSearch}
              searchRecipeText={this.state.searchRecipeText}
              handleAllRecipeSearch={this.handleAllRecipeSearch}
              handleChangeRecipeSearch={this.handleChangeRecipeSearch} 
              handleSubmitRecipeSearch={this.handleSubmitRecipeSearch}
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