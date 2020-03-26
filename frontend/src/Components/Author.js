import React from 'react';
import {Link} from 'react-router-dom'

const Author = props => {
    return (
        <div>
            <Link to={`/authors/${props.author._id}`} key={props.author._id}>
                <ul>
                    <li className='search-results'>
                        {props.author.name}
                    <span className='delete-link' id={props.author._id} 
                        onClick={props.handleAuthorDelete}>
                            Delete
                    </span>
                    </li>
                </ul>                
            </Link>
        </div>
    ) 
}

export default Author;