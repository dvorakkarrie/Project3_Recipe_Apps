import React from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> 176cf53d96c54ebd6a598308eae09b19cf4a5f83
import Parser from 'html-react-parser';

const RecipeDetails = props => {
    console.log(props)
  

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === props.match.params.id
      )
<<<<<<< HEAD
    
    //   let ingredientsDetail = props.ingredients.find(
    //     ingredient => ingredient._id ===recipesDetail.ingredients[0]
    //   )

      let categoriesDetail = props.categories.find(
        category => category._id ===recipesDetail.category
      )
=======

    let categoriesDetail = props.categories.find(
        category => category._id ===recipesDetail.category
      )

>>>>>>> 176cf53d96c54ebd6a598308eae09b19cf4a5f83
  console.log(categoriesDetail)
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
                <h2>Category type : {categoriesDetail.type}</h2>
                <h2>List of Ingredients</h2>
                <li>{Parser(recipesDetail.instructions)}</li>
            </section>            
        </div>
    )
}

export default RecipeDetails