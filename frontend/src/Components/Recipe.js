import React from 'react';
import {Link} from 'react-router-dom'

const Recipe = props => {
    return (
        <div>
            <Link to={`/recipes/${props.recipe._id}`} key={props.recipe._id}>         
                <ul className="recipe-list" >
                    <li>     
                      {props.recipe.recipeName}
                    </li>
                    <button 
                        id={props.recipe._id} 
                        onClick={props.handleRecipeDelete}>
                            Delete
                    </button>
                </ul>
            </Link>
           
        </div>
    )
}

export default Recipe;