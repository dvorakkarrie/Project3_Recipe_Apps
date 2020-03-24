import React from 'react'
import {Link} from 'react-router-dom'
import Parser from 'html-react-parser';

const RecipeDetails = props => {
    console.log(props)
  

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === props.match.params.id
      )
    
      let ingredientsDetail = props.ingredients.find(
        ingredient => ingredient._id ===recipesDetail.ingredients[0]
      )

  console.log(ingredientsDetail)
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
            <section>
                <h2>{recipesDetail.recipeName}</h2>
                <img src={recipesDetail.image} alt="Smiley face" height="200" width="200"></img>
                <h2><a target='_blank' href={recipesDetail.url} rel="noopener noreferrer">Recipe External Link</a></h2>
                <h2>List of Ingredients</h2>
                <li>{Parser(recipesDetail.instructions)}</li>
                <li>{ingredientsDetail.quantity}-{ingredientsDetail.measurement}-{ingredientsDetail.description}</li>
                {/* <button 
                    className="delete-button" 
                    id={props.match.params.id} 
                    onClick={props.handleRecipeDelete}>
                        Delete
                    </button> */}
            </section>            
        </div>
    )
}

export default RecipeDetails