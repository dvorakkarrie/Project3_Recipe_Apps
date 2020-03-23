import React, {Component} from 'react'; // importing component
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'; // importing router 
import axios from 'axios'; // importing axios
import './App.css'; // importing css file

import Home from './Components/Home'; // importing Home component
import AuthorDetails from './Components/AuthorDetails'; // importing AuthorDetails component
import NewAuthor from './Components/NewAuthor'; //importing NewAuthor component
import RecipeDetails from './Components/RecipeDetails'; // importing RecipeDetails component
import NewRecipe from './Components/NewRecipe'; // importing NewRecipe component

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
        searchRecipeText: '',
        selectedSearch: "authors"
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

  // getAuthorbyIdAxios() {
  //   axios({
  //   method: 'GET',
  //   url: `${backendAuthorUrl}/byId/${this.state.searchAuthorText}`
  // }).then(authors =>
  //   this.setState({authors: authors.data})
  //   ).catch(error => {
  //     console.log(error)
  //   })
  // }

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

  deleteRecipeAxios = event => {
    event.preventDefault()
    axios({
      method: "DELETE",
      url: `${backendRecipeUrl}${event.target.id}`
    })
    .then(deletedRecipe => {
      this.getRecipesAxios();
    });
  }

  handleChangeAuthorSearch = event => {
    console.log(event)
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
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={routerProps => (
            <Home 
              {...routerProps}
              authors={this.state.authors}
              recipes={this.state.recipes}
              selectedSearch={this.state.selectedSearch}

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
          <Route path="/authors/:id" render={routerProps => (
            <AuthorDetails
            {...routerProps}
            authors={this.state.authors}
            authorDetails={this.props.match.params.id}
          /> )} 
          />
          <Route path="/new-author" render={routerProps => (
            <NewAuthor
            {...routerProps}
            authors={this.state.authors}
            /> )}
          />
          <Route path="/recipes/:id" render={routerProps => (
            <RecipeDetails
              {...routerProps}
              recipes={this.state.recipes}
              recipeDetails={this.props.match.params.id}
              handleRecipeDelete={this.deleteRecipeAxios}
          /> )}
          />
          <Route path="/new-recipe" render={routerProps => (
            <NewRecipe
            {...routerProps}
            recipes={this.state.recipes}
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