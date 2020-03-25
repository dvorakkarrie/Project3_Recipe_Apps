import React from 'react';
import {Link} from 'react-router-dom'

const Recipe = props => {
    return (
        <div>
            <Link to={`/recipes/${props.recipe._id}`} key={props.recipe._id}>         
                <ul className="recipe-list" >
                    <li className='search-results'>     
                      {props.recipe.recipeName}
                      <span className='edit-delete-link' 
                        id={props.recipe._id} 
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
           
        </div>
    )
}

export default Recipe;