import React from 'react';
import {Link} from 'react-router-dom'

// import AuthorDetails from './AuthorDetails'

const Author = props => {
    return (
        <div>
            <Link to={`/authors/${props.author._id}`} key={props.author._id}>
            <ul className='author-list' 
                // onClick={props.handleAllRecipeSearch}
                >
                    <li>
                        {props.author.name}
                    </li>
                    <button id={props.author._id}
                      onClick={props.handleAuthorDelete}>
                     Delete 
                    </button>
                </ul>                
            </Link>
        </div>
    ) 
}

export default Author;