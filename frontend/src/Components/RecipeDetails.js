import React from 'react'
import {Link} from 'react-router-dom'

const RecipeDetails = props => {
    console.log(props)

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === props.match.params.id
      )
    
      let ingredientsDetail = props.ingredients.find(
        ingredient => ingredient._id ===recipesDetail.ingredients[0]
      )

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
                <img src={recipesDetail.image} alt="Smiley face" height="200" width="200"></img>
                <h2><a href={recipesDetail.url}>Recipe External Link</a></h2>
                <h2>List of Ingredients</h2>
                <li>{ingredientsDetail.quantity}-{ingredientsDetail.measurement}-{ingredientsDetail.description}</li>
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