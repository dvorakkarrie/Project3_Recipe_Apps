import React from 'react'
import {Link} from 'react-router-dom'
import Author from './Author'
import Recipe from './Recipe'

const Home = (props) => {    
    
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
        <div className='home-main-div'>
                <section className="home-section">Author
                    <Link to="/new-author">
                        <div className='home-div'>
                            Create a New Author
                        </div>
                    </Link>
                    <div className='home-div'>
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
                <section className="home-section">Recipe
                    <Link to="/new-recipe">
                        <div className='home-div'>
                            Create a New Recipe
                        </div>
                    </Link>
                    <div className='home-div'>
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
        </div>    
    )
}

export default Home;