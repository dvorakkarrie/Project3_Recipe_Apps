import React from 'react';
import {Link} from 'react-router-dom'

const Recipe = props => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/recipes/${props.recipe._id}`}>
                        {props.recipe.recipeName}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Recipe;