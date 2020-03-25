import React from 'react';
import {Link} from 'react-router-dom'

const Author = props => {
    console.log(props)
    return (
        <div>
            <Link to={`/authors/${props.author._id}`} key={props.author._id}>
            <ul>
                <li className='search-results'>
                    {props.author.name}
                    <span className='edit-delete-link' id={props.author._id} 
                        onClick={props}>
                            Edit
                    </span>
                    <span className='edit-delete-link' id={props.author._id} 
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