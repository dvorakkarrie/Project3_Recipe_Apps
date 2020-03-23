import React from 'react'
import {Link} from 'react-router-dom'

const RecipeDetails = props => {
    console.log(props)

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === props.match.params.id
      )
    console.log(recipesDetail.recipeName)

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
                <h2>{recipesDetail.recipeName}</h2>
                <p>{recipesDetail.ingredients}</p>
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