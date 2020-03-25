import React from 'react'
import {Link} from 'react-router-dom'

const AuthorDetails = props => {
    console.log(props)
    console.log(props.authors)
    console.log(props.recipes)

    let authorDetail = props.authors.filter(author => 
        author._id === props.match.params.id)
    let recipeDetail = props.recipes.filter(recipe => 
        recipe._id === authorDetail.recipes)

    // let authorsDetail = props.authors.find(
    //     author => author._id === props.match.params.id
    // )

      console.log(props.recipes)
     // console.log(props.ingre)
      console.log(authorsDetail)
      console.log(recipesDetail)
    // console.log(authorsDetail.recipes)
    // authorsDetail.recipes.forEach(recipe => {
    //     // let recipeComponent = 

    return (
        <div>
            <section>
                <h2>Author: {authorDetail.name}</h2>
                <h2>Email: {authorDetail.email}</h2>
                <h2>List of Recipies</h2>
                <h2>Recipe:  
                    <Link to={`/recipes/${recipeDetail._id}`}>
                    {recipeDetail.recipeName}
                    </Link>
                </h2>
            </section>        
        </div>
    )
}

export default AuthorDetails