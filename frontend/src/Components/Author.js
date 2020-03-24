import React from 'react';
import {Link} from 'react-router-dom'

// import AuthorDetails from './AuthorDetails'

const Author = props => {
    return (
        <div>
            <Link to={`/authors/${props.author._id}`} key={props.author._id}>
<<<<<<< HEAD
                <ul>
=======
            <ul className='author-list' 
                // onClick={props.handleAllRecipeSearch}
                >
>>>>>>> fe9ffdbec19edfcbb0d7f228402ac0e4c14ac661
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