import React from 'react'
import {Link} from 'react-router-dom'
import Author from './Author'
import Recipe from './Recipe'

const Home = (props) => {
    console.log(props)
    
    let allAuthors = props.authors.map(author => {
        return (
            <Author 
                key={author._id}
                author = {author}
                // handleDelete={props.handleDelete}
                // toggleDisplay={this.toggleDisplay}
            />
        )
    })

    let allRecipes = props.recipes.map(recipe => {
        return (
            <Recipe 
                key={recipe._id}
                recipe = {recipe}
            />
        )
    })

    return (
        <div className='main'>
            <div>
                <Link to="/">
                    <div onClick={props.handleAllAuthorSearch}>
                        All Users
                    </div>
                </Link>
                <Link to="/new-author">
                    <div>
                        Create new author
                    </div>
                </Link>
                <div>
                    <form onSubmit={props.handleSubmitAuthorSearch}>
                        <label>Search by Email:</label>
                        <input 
                            type='text' className='user-search-box' 
                            placeholder="@gmail.com"
                            onChange={props.handleChangeAuthorSearch} 
                            value={props.searchText}>
                                {props.value}
                        </input>
                        <button 
                            type="button" onClick={props.handleSubmitAuthorSearch}>
                                Search
                        </button>
                         <input type="submit" style={{display: 'none'}}></input>
                    </form>
                    {allAuthors}
                </div>
            </div>
            <div>
                <Link to="/">
                    <div onClick={props.handleAllRecipeSearch}>
                        All Recipes
                    </div>
                </Link>
                <Link to="/new-recipe">
                    <div>
                        Create new recipe
                    </div>
                </Link>
                <div>
                    <form onSubmit={props.handleSubmitRecipeSearch}>
                        <label>Search by Recipe Name:</label>
                        <input type='text' className='user-search-box' 
                            onChange={props.handleChangeRecipeSearch} 
                            value={props.searchRecipeText}>{props.value}
                        </input>
                        <button type="button" onClick={props.handleSubmitRecipeSearch}>
                            Search
                        </button>
                        <input type="submit" style={{display: 'none'}}></input>
                    </form>
                    {allRecipes}
                </div>
            </div>
        </div>    
    )
}

export default Home;