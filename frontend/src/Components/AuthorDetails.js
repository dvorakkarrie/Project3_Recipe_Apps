import React from 'react'
import {Link} from 'react-router-dom'

const AuthorDetails = props => {
    console.log(props)
    console.log(props.authors)
    console.log(props.recipes)

    let authorsDetail = props.authors.filter(author => 
        author._id === props.match.params.id)
    let recipesDetail = props.recipes.filter(recipe => 
        recipe.creator === authorsDetail[0]._id)

    // let authorsDetail = props.authors.find(
    //     author => author._id === props.match.params.id
    // )

    // let recipesDetail = props.recipes.find(
    //     recipe => recipe.creator === authorsDetail[0]._id
    //   )
    console.log(authorsDetail)
        console.log(recipesDetail)
    return (
        <div>
            <section>
                <h2>Author: {authorsDetail.name}</h2>
                <h2>Email: {authorsDetail.email}</h2>
                <h2>List of Recipies</h2>
                <h2>Recipe:  
                    <Link to={`/recipes/${recipesDetail}`}>
                    {recipesDetail.recipeName}
                    </Link>
                </h2>
            </section>        
        </div>
    )
}

export default AuthorDetails