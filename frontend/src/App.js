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
const backendIngredientsUrl = "http://localhost:8080/api/ingredients/";

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        authors: [],
        newAuthorName: '',
        newAuthorEmail: '', 
        recipes: [],
        recipeID: '',
        newRecipeName: "",
        newRecipeExternalUrl: "",
        newRecipeImageUrl: "",
        // ingredients: [],
        // newIngredientDescription: "",
        searchAuthorText: '',
        searchRecipeText: '',
        selectedSearch: "authors"
    }
  }

  createAuthorAxios() {
    axios({
    method: 'POST',
    url: `${backendAuthorUrl}`,
    data: {
      name: this.state.newAuthorName,
      email: this.state.newAuthorEmail,
      recipes: this.state.recipes
    }})
    .then(newAuthor => {
      this.setState(prevState => ({
      authors: [...prevState.authors, newAuthor.data]
      }))
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleSubmitNewAuthor = event => {
    console.log("Submitted new author")
    event.preventDefault()
    this.createAuthorAxios()
    this.setState({
      newAuthorName: '',
      newAuthorEmail: ''
    })
    this.props.history.push("/")
  }

  getAuthorsAxios() {
    axios({
    method: 'GET',
    url: backendAuthorUrl
    })
    .then(authors => 
      this.setState({authors: authors.data}))
    .catch(error => {
      console.log(error)
    })
  }

  deleteAuthorAxios = event => {
    event.preventDefault()
    axios({
      method: "DELETE",
      url: `${backendAuthorUrl}${event.target.id}`
    })
    .then(deletedAuthor => {
      this.getAuthorsAxios();
      this.refreshPage();
    });
  }
  
  getAuthorEmailAxios() {
    axios({
    method: 'GET',
    url: `${backendAuthorUrl}/byEmail/${this.state.searchAuthorText}`
    })
    .then(authors =>
      this.setState({authors: authors.data}))
    .catch(error => {
      console.log(error)
    })
  }

  createRecipeAxios() {
    axios({
      method: 'POST',
      url: `${backendRecipeUrl}`,
      data: {
        recipeName: this.state.newRecipeName,
        url: this.state.newRecipeExternalUrl,
        image: this.state.newRecipeImageUrl
      }
    })
    .then(newRecipe => {
      this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe.data]
      }))
    })
    .catch(error => {
      console.log(error)
    })
  }

  getRecipesAxios() {
    axios({
      method: 'GET',
      url: backendRecipeUrl
    })
    .then(recipes => {
      this.setState({recipes: recipes.data})})
    .catch(error => {
      console.log(error)
    })
  }

  getIngredientsAxios() {
    axios({
    method: 'GET',
    url: backendIngredientsUrl
  }).then(ingredients => {
    console.log(ingredients)
    this.setState({ingredients: ingredients.data})}
    ).catch(error => {
      console.log(error)
    })
  }

  getRecipeNameAxios() {
    axios({
      method: 'GET',
      url: `${backendRecipeUrl}/byRecipeName/${this.state.searchRecipeText}`})
    .then(recipes => {
      this.setState({recipes: recipes.data})})
    .catch(error => {
      console.log(error)
    })
  }

  getRecipebyIdAxios() {
    axios({
      method: 'GET',
      url: `${backendRecipeUrl}/byId/${this.state.searchRecipeText}`})
    .then(recipes =>
      this.setState({recipes: recipes.data}))
    .catch(error => {
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
      this.getRecipesAxios()
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleChangeAuthor = event => {
    console.log(event)
    this.setState({
      searchAuthorText: event.target.value
    })
  }

  handleChangeNewAuthorName = event => {
    this.setState({
      newAuthorName: event.target.value
    })
  }

  handleChangeNewAuthorEmail = event => {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAllAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorsAxios()
    this.getRecipesAxios()
  }

  handleSubmitAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorEmailAxios()
    this.setState({
      searchAuthorText: ''
    })
  }

  handleChangeRecipe = event => {
    console.log(event.target.value)
    this.setState({
      searchRecipeText: event.target.value
    })
  }

  handleAllRecipeSearch = event => {
    event.preventDefault()
    this.getRecipesAxios()
    this.getIngredientsAxios() 
  }

  handleSubmitRecipeSearch = event => {
    event.preventDefault()
    this.getRecipeNameAxios()
    this.setState({
      searchRecipeText: ''
    })
  }
  
  handleRecipeIdSearch = event => {
    event.preventDefault()
    this.getRecipebyIdAxios()
  }

  handleSubmitNewRecipe = event => {
    event.preventDefault()
    this.createRecipeAxios()
    this.setState({
      newCreatorName: '',
      newRecipeName: '',
      newRecipeExternalImage: '',
      newRecipeImageUrl: ''
    })
  }

  refreshPage = () => {
    window.location.reload()
  }

  render() {
    console.log(this.state)
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
              handleChangeAuthor={this.handleChangeAuthor} 
              handleSubmitAuthorSearch={this.handleSubmitAuthorSearch}
              handleAuthorDelete={this.deleteAuthorAxios}
              searchRecipeText={this.state.searchRecipeText}
              handleAllRecipeSearch={this.handleAllRecipeSearch}
              handleChangeRecipe={this.handleChangeRecipe} 
              handleSubmitRecipeSearch={this.handleSubmitRecipeSearch}
              handleRecipeIdSearch={this.handleRecipeIdSearch}

              refreshPage={this.refreshPage}
            /> )} 
          />
          <Route path="/authors/:id" render={routerProps => (
            <AuthorDetails
            {...routerProps}
            authors={this.state.authors}
            recipes={this.state.recipes}
            ingredients={this.state.ingredients}
            authorDetails={this.props.match.params.id}
            searchRecipeText={this.state.searchRecipeText}
            handleRecipeIdSearch={this.handleRecipeIdSearch}
           
          /> )} 
          />
          <Route path="/new-author" render={routerProps => (
            <NewAuthor
            {...routerProps}
            recipes={this.state.recipes}
            newAuthorName={this.state.newAuthorName}
            newAuthorEmail={this.state.newAuthorEmail}
            recipeID={this.state.recipeID}
            handleChangeNewAuthorName={this.handleChangeNewAuthorName}
            handleChangeNewAuthorEmail={this.handleChangeNewAuthorEmail}
            handleSubmitNewAuthor={this.handleSubmitNewAuthor}

            handleAllRecipeSearch={this.handleAllRecipeSearch}
            /> )}
          />
          <Route path="/recipes/:id" render={routerProps => (
            <RecipeDetails
              {...routerProps}
              recipes={this.state.recipes}
              ingredients={this.state.ingredients}
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