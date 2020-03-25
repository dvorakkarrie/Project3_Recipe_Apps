import React from 'react'
import {Link} from 'react-router-dom'

const AuthorDetails = props => {
    console.log(props)
    console.log(props.authors)
    console.log(props.match.params.id)

    let authorsDetail = props.authors.find(
        author => author._id === props.match.params.id
    )

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === authorsDetail.recipes[0]
      )



      console.log(props.recipes)
     // console.log(props.ingre)
      console.log(authorsDetail)
      console.log(recipesDetail)
    // console.log(authorsDetail.recipes)
    // authorsDetail.recipes.forEach(recipe => {
    //     // let recipeComponent = 

    //     // );
    //     console.log(recipe)
    // })
    
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
                <h2>Author: {authorsDetail.name}</h2>
                <h2>Email: {authorsDetail.email}</h2>
                <h2>List of Recipies</h2>
                <h2><Link to={`/recipes/${recipesDetail._id}`}>{recipesDetail.recipeName}</Link></h2>
                {/* <button 
                    className="delete-button" 
                    id={props.match.params.id} 
                    onClick={props.handleAuthorDelete}>
                        Delete
                </button> */}
            </section>        
        </div>
    )
}

export default AuthorDetails