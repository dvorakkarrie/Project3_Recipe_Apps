import React, {Component} from 'react'; // importing component
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'; // importing router 
import axios from 'axios'; // importing axios
import './App.css'; // importing css file

import Home from './Components/Home'; // importing Home component
// import Authors from './Authors'
// import Author from './Components/Author';
// import Author from './Components/Author'; // importing User component
// import NewRecipe from './Components/NewRecipe'; // importing NewRecipe component
// import EditRecipe from './Components/EditRecipe'; // importing EditRecipe component
const backendAuthorsUrl = "http://localhost:8080/api/users"; // defined variable for the api/users backend url

// const backendUrl = "http://localhost:8080/api/users/";

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        users: [],
        authors: [],
        // newAuthorFirstName: "",
        // newAuthorLastName: "",
        // newAuthorEmail: '', 
        // recipes: [],
        // newRecipeName: "",
        // newRecipeUrl: "",
        // newRecipeImageUrl: "",
        // ingredients: [],
        // newIngredientName: "",
        // newIngredientQuantity: 0,
        // newIngredientMeasurement: '',
        text: ''
    }
  }

  componentDidMount() {
    this.getAuthorsAxios()
  }

  getAuthorsAxios() {
    axios({
    method: 'GET',
    url: backendAuthorsUrl
  })
  .then(authors => 
    this.setState({authors: authors.data}))
    }

// createUserAxios() {
// axios({
// method: 'POST',
// url: backendUrl,
// data: {
// name: this.state.newUserName,
// email: this.state.newUserEmail
// }
// })
// .then(newUser => {
// console.log(newUser)
// this.setState(prevState => ({
// users: [...prevState.users, newUser.data]
// }))
// })
// } 
// deleteAxiosUser = event => {
// event.preventDefault()
// axios({
// method: "DELETE",
// url: `${backendUrl}${event.target.id}`
// })
// .then(deletedUser => {
// this.getUsersAxios();
// });
// }
// handleSubmit = event => {
// event.preventDefault()
// this.createUserAxios()
// }
// handleChange = event => {
// console.log(event.target.value)
// this.setState({
// [event.target.name]: event.target.value
// })
// }
// handleNewTodoSubmit = event => {
// console.log(event.target.id)
// event.preventDefault()
// axios({
// method: 'POST',
// url: `${backendUrl}${event.target.id}/new-todo/`,
// data: {
// description: this.state.newTodoDescription
// }
// })
// .then(newUser => {
// console.log(newUser)
// this.setState({newTodoDescription: ''})
// this.getUsersAxios()
// this.props.history.push(`/users/${newUser.data._id}`)
// })
// }
// toggleDone = event => {
// event.preventDefault();
// let todoId = event.target.getAttribute('data-todo-id');
// axios({
// method: "PUT",
// url: `${backendUrl}${event.target.id}/update-todo/${todoId}`,
// }).then(user => {
// this.getUsersAxios();
// this.props.history.push(`/users/${user.data._id}`);
// });
// };
// handleSubmit = event => {
// event.preventDefault()
// // this.createAuthorAxios()
// }
// handleSubmitSearch = event => {
// event.preventDefault()
// this.getAuthorsAxios()
// }
// handleChange = event => {
// console.log(event.target.value)
// this.setState({
// [event.target.name]: event.target.value
// })
// }

  render() {
    return (
      <div className="App">
        <h1>Recipe Cookbook</h1>
        <nav >
          <Link to="/"><div className='App-header'>All Users</div></Link>
          {/* <Link to="/new-user-form"><div className='App-header'>New User Form</div></Link> */}
        </nav>
        <Switch>
          <Route exact path="/" render={routerProps => (
            <Home 
              authors={this.state.authors}
              handleChange={this.handleChange} 
              handleSubmitSearch={this.handleSubmitSearch}
              text={this.state.text}
            /> )} 
          />
          {/* <Route path="/authors/:id" render={routerProps => 
            <Author 
              {...routerProps}
              authors={this.state.authors} 
              handleChange={this.handleChange}
            /> } 
          /> */}
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