import React, {Component} from 'react'; // importing component
import {Link, Route, Redirect, Switch, withRouter} from 'react-router-dom'; // importing router 
import axios from 'axios'; // importing axios
import './App.css'; // importing css file

import Home from './Components/Home'; // importing Home component
import AuthorDetails from './Components/AuthorDetails'; // importing AuthorDetails component
import NewAuthor from './Components/NewAuthor'; //importing NewAuthor component
import RecipeDetails from './Components/RecipeDetails'; // importing RecipeDetails component
import NewRecipe from './Components/NewRecipe'; // importing NewRecipe component

let backendUrl = process.env.REACT_APP_BACKEND_APP_URL || "http://localhost:8080/"; // defined variable for the api/users backend url
// const backendUrl = "http://localhost:8080"; // defined variable for the api/users backend url

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        authorText: '',
        recipeText: '',
        authorID: '',
        authors: [],
        categoryID: '',
        categories: [],
        recipes: [],
        recipeID: '',
        newAuthorName: '',
        newEmail: '',
        newInstructions: '',
        newRecipeName: '',
        newUrl: "",
        newImage: "",
        newCategory:'',
        updatedAuthorName: '',
        updatedEmail: ''
    }
  }
  
  componentDidMount() {
    this.getAuthorsAxios()
    this.getRecipesAxios()
    this.getCategoriesAxios()
  }

  createAuthorAxios() {
    axios({
    method: 'POST',
    url: `${backendUrl}/api/users/`,
    data: {
      name: this.state.newAuthorName,
      email: this.state.newEmail,
      recipes: this.state.recipeID
    }})
    .then(newAuthor => {
      this.setState(prevState => ({
      authors: [...prevState.authors, newAuthor.data]
      }))
    })
  }

  handleCreateNewAuthor = event => {
    console.log("create new author is running")
    event.preventDefault()
    this.createAuthorAxios()
    this.props.history.push("/")
  }

  createRecipeAxios() {
    axios({
      method: 'POST',
      url: `${backendUrl}/api/recipes/`,
      data: {
        recipeName: this.state.newRecipeName,
        url: this.state.newUrl,
        image: this.state.newImage,
        instructions: this.state.newInstructions,
        creator: this.state.authorID,
        category: this.state.categoryID
      }
    })
    .then(newRecipe => {
      this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe.data]
      }))
    })
  }

  handleCreateNewRecipe = event => {
    console.log(event.target)
    event.preventDefault()
    this.createRecipeAxios()
    this.props.history.push("/")
  }

  deleteAuthorAxios = event => {
    event.preventDefault()
    axios({
      method: "DELETE",
      url: `${backendUrl}/api/users/${event.target.id}`
    })
    .then(deletedAuthor => {
      this.getAuthorsAxios();
      this.props.history.push("/")
    });
  }
  
  deleteRecipeAxios = event => {
    event.preventDefault()
    axios({
      method: "DELETE",
      url: `${backendUrl}/api/recipes/${event.target.id}`
    })
    .then(deletedRecipe => {
      this.getRecipesAxios()
      this.props.history.push("/")
    })
  }

  putAuthorAxios = event => {
    console.log(event.target)
    axios({
      method: "PUT",
      url: `${backendUrl}/api/users/${event.target.id}`,
      data: {
        name: this.state.updatedAuthorName,
        email: this.state.updatedEmail
      }
    })
    .then(author => {
      this.getAuthorsAxios();
      this.props.history.push("/")
    });
  }

  handleUpdateAuthor = event => {
    console.log(event.target.id)
    event.preventDefault()
    this.putAuthorAxios(event)
    this.setState({
      updatedAuthorName: '',
      updatedEmail: ''
    })
  }

  getAuthorsAxios() {
    axios({
    method: 'GET',
    url: `${backendUrl}/api/users/`
    })
    .then(authors => {
      this.setState({authors: authors.data})})
  }

  getAuthorEmailAxios() {
    axios({
    method: 'GET',
    url: `${backendUrl}/api/users/byEmail/${this.state.authorText}`
    })
    .then(authors =>
      this.setState({authors: authors.data}))
  }

  getCategoriesAxios() {
    axios({
    method: 'GET',
    url: `${backendUrl}/api/categories/`
  }).then(categories => {
    this.setState({categories: categories.data})})
  }

  getRecipesAxios() {
    axios({
      method: 'GET',
      url: `${backendUrl}/api/recipes/`
    })
    .then(recipes => {
      this.setState({recipes: recipes.data})})
  }

  getRecipeNameAxios() {
    axios({
      method: 'GET',
      url: `${backendUrl}/api/recipes/byRecipeName/${this.state.recipeText}`})
    .then(recipes => {
      this.setState({recipes: recipes.data})})
    .catch(error => {
      console.log(error)
    })
  }

  getRecipebyIdAxios() {
    axios({
      method: 'GET',
      url: `${backendUrl}/api/recipes/byId/${this.state.recipeText}`})
    .then(recipes =>
      this.setState({recipes: recipes.data}))
    .catch(error => {
      console.log(error)
    })
  }

  handleRecipeIdSearch = event => {
    event.preventDefault()
    this.getRecipebyIdAxios()
  }

  handleChange = event => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.categoryID)
  }

  handleAllAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorsAxios()
    this.getRecipesAxios()
    this.getCategoriesAxios() 
  }

  handleSubmitAuthorSearch = event => {
    event.preventDefault()
    this.getAuthorEmailAxios()
    this.setState({
      authorText: ''
    })
  }

  handleAllRecipeSearch = event => {
    event.preventDefault()
    this.getRecipesAxios()
    this.getCategoriesAxios() 
  }

  handleAllCategorySearch = event => {
    event.preventDefault()
    this.getCategoriesAxios(event) 
  }

  handleSubmitRecipeSearch = event => {
    event.preventDefault()
    this.getRecipeNameAxios()
    this.setState({
      recipeText: ''
    })
  }

  refreshPage = () => {
    this.props.history.push("/")
    window.location.reload(true)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
                    <header>
                <h1>Recipe Cookbook</h1>
                <Link to="/">
                    <p className="home-page-link" 
                        onClick={this.refreshPage}>
                            Home
                    </p>
                </Link>
            </header>
        <Switch>
          <Route exact path="/" render={routerProps => (
            <Home 
              {...routerProps}
              authors={this.state.authors}
              recipes={this.state.recipes}

              authorText={this.state.authorText}
              recipeText={this.state.recipeText}
              handleChange={this.handleChange} 

              handleAllAuthorSearch={this.handleAllAuthorSearch}
              handleSubmitAuthorSearch={this.handleSubmitAuthorSearch}
              handleAuthorDelete={this.deleteAuthorAxios}

              handleAllRecipeSearch={this.handleAllRecipeSearch}
              handleSubmitRecipeSearch={this.handleSubmitRecipeSearch}
              handleRecipeIdSearch={this.handleRecipeIdSearch}
              handleRecipeDelete={this.deleteRecipeAxios}
              handleAllCategorySearch={this.handleAllCategorySearch}

              refreshPage={this.refreshPage}
            /> )} 
          />
          <Route path="/authors/:id" render={routerProps => (
            <AuthorDetails
            {...routerProps}
            authors={this.state.authors}
            recipes={this.state.recipes}
            updatedAuthorName={this.state.updatedAuthorName}
            updatedEmail={this.state.updatedEmail}
            authorDetails={this.props.match.params.id}
            handleChange={this.handleChange}
            handleRecipeIdSearch={this.handleRecipeIdSearch}
            handleUpdateAuthor={this.handleUpdateAuthor}
          /> )} 
          />
          <Route path="/new-author" render={routerProps => (
            <NewAuthor
            {...routerProps}
            recipes={this.state.recipes}
            newAuthorName={this.state.newAuthorName}
            newEmail={this.state.newEmail}
            recipeID={this.state.recipeID}
            handleChange={this.handleChange}
            handleSubmitNewAuthor={this.handleSubmitNewAuthor}
            handleAllRecipeSearch={this.handleAllRecipeSearch}
            handleCreateNewAuthor={this.handleCreateNewAuthor}
            /> )}
          />
          <Route path="/recipes/:id" render={routerProps => (
            <RecipeDetails
              {...routerProps}
              recipes={this.state.recipes}
              categoryID={this.state.categoryID}
              categories={this.state.categories}
              ingredients={this.state.ingredients}
              recipeDetails={this.props.match.params.id}
          /> )}
          />
          <Route path="/new-recipe" render={routerProps => (
            <NewRecipe
            {...routerProps}
            authorID={this.state.authorID}
            authors={this.state.authors}
            categories={this.state.categories}
            categoryID={this.state.categoryID}
            newRecipeName={this.state.newRecipeName}
            newImage={this.state.newImage}
            newUrl={this.state.newUrl}
            newCategory={this.state.newCategory}
            newCreator={this.state.newCreator}
            newInstructions={this.state.newInstructions}
            handleChange={this.handleChange}
            handleAllAuthorSearch={this.handleAllAuthorSearch}
            handleAllCategorySearch={this.handleAllCategorySearch}
            handleCreateNewRecipe={this.handleCreateNewRecipe}
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