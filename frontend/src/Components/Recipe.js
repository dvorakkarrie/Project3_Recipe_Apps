import React from 'react';
import {Link} from 'react-router-dom'

const Recipe = props => {
    return (
        <div>
        <p>
            <Link to={`/authors/${props.recipe._id}`}>
                {props.recipe.recipeName}
            </Link>
        </p>
        {/* <button id={props.recipe._id}
            onClick={props.handleDelete}>
                Delete {props.author}
        </button> */}
        </div>
    )
    
}

export default Recipe;