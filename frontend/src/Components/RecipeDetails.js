import React from 'react'
import {Link} from 'react-router-dom'

const RecipeDetails = props => {
    return (
        <div>
            <header>
                <h1>Recipe Cookbook</h1>
                <Link to="/">
                    <p 
                        className="home-page-link" 
                        onClick={props.refreshPage}>
                            Home
                    </p>
                </Link>
            </header>
            <section>Recipe page
                <button 
                    className="delete-button" 
                    id={props.recipes._id} 
                    onClick={props.handleRecipeDelete}>
                        Delete
                    </button>
            </section>            
        </div>
    )
}

export default RecipeDetails