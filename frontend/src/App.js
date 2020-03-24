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
        newAuthorName: '',
        newAuthorEmail: '', 
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

  getRecipebyIdAxios() {
    axios({
    method: 'GET',
    url: `${backendRecipeUrl}/byId/${this.state.searchRecipeText}`
  }).then(recipes =>
    this.setState({recipes: recipes.data})
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

  handleChangeAuthor = event => {
    console.log(event)
    this.setState({
      searchAuthorText: event.target.value
    })
  }

  handleChangeNewAuthorName = event => {
    console.log(event)
    this.setState({
      newAuthorName: event.target.value
    })
  }

  handleChangeNewAuthorEmail = event => {
    console.log(event)
    this.setState({
      newAuthorEmail: event.target.value
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

  handleSubmitNewAuthor = event => {
    event.preventDefault()
    this.createAuthorAxios()
    this.setState({
      newAuthorName: '',
      newAuthorEmail: ''
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
              handleChangeAuthor={this.handleChangeAuthor} 
              handleSubmitAuthorSearch={this.handleSubmitAuthorSearch}

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
            newAuthorEmail={this.state.newAuthorEmail}
            newAuthorName={this.state.newAuthorName}
            authorDetails={this.props.match.params.id}
            searchRecipeText={this.state.searchRecipeText}
            handleRecipeIdSearch={this.handleRecipeIdSearch}
          /> )} 
          />
          <Route path="/new-author" render={routerProps => (
            <NewAuthor
            {...routerProps}
            newAuthorName={this.state.newAuthorName}
            newAuthorEmail={this.state.newAuthorEmail}
            newAuthorRecipeId={this.state.newAuthorRecipeId}
            handleChangeNewAuthorName={this.handleChangeNewAuthorName}
            handleChangeNewAuthorEmail={this.handleChangeNewAuthorEmail}
            handleSubmitNewAuthor={this.handleSubmitNewAuthor}
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