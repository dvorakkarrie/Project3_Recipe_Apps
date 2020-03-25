import React from 'react';
import {Link} from 'react-router-dom'

const Recipe = props => {
    return (
        <div>
<<<<<<< HEAD
            <Link to={`/recipes/${props.recipe._id}`} key={props.recipe._id}>
                <ul>
                    <li>{props.recipe.recipeName}
                        <span className='edit-delete-link' id={props.recipe._id} 
                            onClick={props}>
                                Edit
                        </span>
                        <span className='edit-delete-link' id={props.recipe._id} 
                            onClick={props.handleRecipeDelete}>
                                Delete
                        </span>
                    </li>
                </ul>        
            </Link>
=======
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
           
>>>>>>> 4c3136a3907984d7366677cddb8da4489ad5d1bd
        </div>
    )
}

export default Recipe;