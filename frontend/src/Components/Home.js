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
                name="author"
                handleAllRecipeSearch={props.handleAllRecipeSearch}
                handleAuthorDelete ={props.handleAuthorDelete}
            />
        )
    })

    let allRecipes = props.recipes.map(recipe => {
        return (
            <Recipe 
                key={recipe._id}
                name="recipe"
                recipe = {recipe}
                handleRecipeDelete={props.handleRecipeDelete}
            />
        )
    })

    return (
        <div>
            <section className='home-main-section'>
                <section className="home-author-section">Search by Author
                    <Link to="/">
                        <div className='home-divs' onClick={props.handleAllAuthorSearch}>
                            Search for All Authors
                        </div>
                    </Link>
                    <Link to="/new-author">
                        <div className='home-divs'>
                            Create a New Author
                        </div>
                    </Link>
                    <div className='home-divs'>
                        <label>Search by an email address:</label>
                        <form onSubmit={props.handleSubmitAuthorSearch}>
                            <input 
                                type='text' className='input-box' 
                                name="authorText"
                                placeholder="@gmail.com"
                                onChange={props.handleChange} 
                                value={props.authorText} />
                            <input className="button" type="submit" value='Search Author'/>
                        </form>
                        <div>
                            {allAuthors}
                        </div>
                    </div>

                </section>
                <section className="home-recipe-section">Search by Recipe
                    <Link to="/">
                        <div className='home-divs' onClick={props.handleAllRecipeSearch}>
                            Search for All Recipes
                        </div>
                    </Link>
                    <Link to="/new-recipe">
                        <div className='home-divs'>
                            Create a New Recipe
                        </div>
                    </Link>
                    <div className='home-divs'>
                        <label>Search by the name of a recipe:</label>
                        <form onSubmit={props.handleSubmitRecipeSearch}>
                            
                            <input type='text' className='input-box' name="recipeText"
                                placeholder="i.e. Beef Tacos, Chicken Marsala"
                                onChange={props.handleChange} 
                                value={props.recipeText} />
                            <input className="button" type="submit" value='Search Recipe'/>
                        </form>
                        <div>
                            {allRecipes}
                        </div>
                    </div>
                </section>
            </section>
        </div>    
    )
}

export default Home;