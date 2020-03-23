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
        <div>
            <header>
                <h1>Recipe Cookbook</h1>
                <Link to="/">
                    <p className="home-page-link" onClick={props.refreshPage}>
                        Home
                    </p>
                </Link>
            </header>
            <section className='home-main-section'>
                <section className="home-author-section">
                    <Link to="/">
                        <div className='home-divs' onClick={props.handleAllAuthorSearch}>
                            All Authors
                        </div>
                    </Link>
                    <Link to="/new-author">
                        <div className='home-divs'>
                            Create new author
                        </div>
                    </Link>
                    <div className='home-divs'>
                        <form onSubmit={props.handleSubmitAuthorSearch}>
                            <label>Search by Email:</label>
                            <input 
                                type='text' className='search-box' 
                                placeholder="@gmail.com"
                                onChange={props.handleChangeAuthorSearch} 
                                value={props.searchAuthorText}>
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
                </section>
                <section className="home-recipe-section">
                    <Link to="/">
                        <div className='home-divs' onClick={props.handleAllRecipeSearch}>
                            All Recipes
                        </div>
                    </Link>
                    <Link to="/new-recipe">
                        <div className='home-divs'>
                            Create new recipe
                        </div>
                    </Link>
                    <div className='home-divs'>
                        <form onSubmit={props.handleSubmitRecipeSearch}>
                            <label>Search by Recipe Name:</label>
                            <input type='text' className='search-box' 
                                placeholder="i.e. Beef Tacos, Chicken Marsala"
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
                </section>
            </section>
        </div>    
    )
}

export default Home;