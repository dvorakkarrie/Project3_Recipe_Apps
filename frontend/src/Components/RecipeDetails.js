import React from 'react'
// import {Link} from 'react-router-dom'
import Parser from 'html-react-parser';

const RecipeDetails = props => {
    console.log(props)
  
    let recipesDetail = props.recipes.find(recipe => 
        recipe._id === props.match.params.id
    )
    // let categoriesDetail = props.categories.find(category => 
    //     category._id === recipesDetail.categories
    // )    

    // console.log(categoriesDetail)
    return (
        <div>
            <section>
                <h2>{recipesDetail.recipeName}</h2>
                <img src={recipesDetail.image} alt="Smiley face" 
                    height="200" width="200">
                </img>
                <h2><a target='_blank' href={recipesDetail.url} 
                    rel="noopener noreferrer">Recipe External Link</a>
                </h2>
                <h2>List of Ingredients</h2>

                <li>{Parser(recipesDetail.instructions)}</li>
                {/* <li>{categoriesDetail.description}</li> */}
            </section>            
        </div>
    )
}

export default RecipeDetails