import React, {Component} from 'react'; // importing component
import {Link, Route, Redirect, Switch, withRouter} from 'react-router-dom'; // importing router 
import axios from 'axios'; // importing axios
import './App.css'; // importing css file

import Home from './Components/Home'; // importing Home component
import AuthorDetails from './Components/AuthorDetails'; // importing AuthorDetails component
import NewAuthor from './Components/NewAuthor'; //importing NewAuthor component
import RecipeDetails from './Components/RecipeDetails'; // importing RecipeDetails component
import NewRecipe from './Components/NewRecipe'; // importing NewRecipe component

const backendAuthorUrl = "http://localhost:8080/api/users/"; // defined variable for the api/users backend url
const backendRecipeUrl = "http://localhost:8080/api/recipes/"; // defined variable for the api/users backend url
const backendCategoryUrl = "http://localhost:8080/api/categories/";

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
        newRecipeName: '',
        newRecipeExternalUrl: "",
        newRecipeImageUrl: "",
        newCategory:'',
        searchAuthorText: '',
        searchRecipeText: '',
    }
  }
  
  // componentDidMount() {
  //   this.getAuthorsAxios()
  //   this.getRecipesAxios()
  //   this.getCategoriesAxios()
  // }

  getAuthorsAxios() {
    axios({
    method: 'GET',
    url: backendAuthorUrl
    })
    .then(authors => {
      this.setState({authors: authors.data})})
  }

  getRecipeNameAxios() {
    axios({
      method: 'GET',
      url: `${backendRecipeUrl}byRecipeName/${this.state.searchRecipeText}`})
    .then(recipes => {
      this.setState({recipes: recipes.data})})
    .catch(error => {
      console.log(error)
    })
  }

  getCategoriesAxios() {
    axios({
    method: 'GET',
    url: backendCategoryUrl
  }).then(categories => {
    this.setState({categories: categories.data})})
  }

  getRecipesAxios() {
    axios({
      method: 'GET',
      url: backendRecipeUrl
    })
    .then(recipes => {
      this.setState({recipes: recipes.data})})
  }

  createAuthorAxios() {
    axios({
    method: 'POST',
    url: `${backendAuthorUrl}`,
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
    .catch(error => {
      console.log(error)
    })
  }

  handleCreateNewAuthor = event => {
    console.log("create new author is running")

    event.preventDefault()
    this.createAuthorAxios()
    this.props.history.push("/")
  }

  // getAuthorsAxios() {
  //   axios({
  //   method: 'GET',
  //   url: backendAuthorUrl
  //   })
  //   .then(authors => 
  //     this.setState({authors: authors.data}))
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // getCategoriesAxios() {
  //   axios({
  //   method: 'GET',
  //   url: backendCategoryUrl
  //   })
  //   .then(categories => 
  //     this.setState({categories: categories.data}))
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

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
    url: `${backendAuthorUrl}byEmail/${this.state.searchAuthorText}`
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
        url: this.state.newUrl,
        image: this.state.newImage,
        instructions: this.state.newInstructions,
        creator: this.state.authorID,
        categories: this.state.categoryID
      }
    })
    .then(newRecipe => {
      this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe.data]
      }))
    })
  }

  handleCreateNewRecipe = event => {
    event.preventDefault()
    this.createRecipeAxios()
    this.props.history.push("/")
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

  createCategoryAxios = event => {
    axios({
      method: 'POST',
        url: `${backendCategoryUrl}`,
        data: {
          description: this.state.description,
        }
      })
      .then(newCategory => {
        this.setState(prevState => ({
        categories: [...prevState.categories, newCategory.data]
        }))
      })
  }

  handleCreateNewCategory = event => {
    event.preventDefault()
    this.createCategoryAxios()
    this.props.history.push("/")
  }

  deleteCategoryAxios = event => {
    event.preventDefault()
    axios({
      method: "DELETE",
      url: `${backendCategoryUrl}${event.target.id}`
    })
    .then(deletedCategory => {
      this.getCategoriesAxios()
    })
  }
  
  // getAuthorEmailAxios() {
  //   axios({
  //   method: 'GET',
  //   url: `${backendAuthorUrl}/byEmail/${this.state.authorText}`
  //   })
  //   .then(authors =>
  //     this.setState({authors: authors.data}))
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }


 
  getRecipebyIdAxios() {
    axios({
      method: 'GET',
      url: `${backendRecipeUrl}/byId/${this.state.recipeText}`})
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
      this.refreshPage();
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

  handleChange = event => {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
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
    this.getCategoriesAxios() 
  }

  handleSubmitRecipeSearch = event => {
    event.preventDefault()
    this.getRecipeNameAxios()
    this.setState({
      recipeText: ''
    })
  }
  
  handleRecipeIdSearch = event => {
    event.preventDefault()
    this.getRecipebyIdAxios()
  }

  refreshPage = () => {
    this.props.history.push("/")
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
            authorDetails={this.props.match.params.id}
            handleRecipeIdSearch={this.handleRecipeIdSearch}
           
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
              categories={this.state.categories}
              ingredients={this.state.ingredients}
              recipeDetails={this.props.match.params.id}
          /> )}
          />
          <Route path="/new-recipe" render={routerProps => (
            <NewRecipe
            {...routerProps}
            authors={this.state.authors}
            categories={this.state.categories}
            categoryID={this.state.categoryID}
            newRecipeName={this.state.newRecipeName}
            newImage={this.state.newImage}
            newUrl={this.state.newUrl}
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