import React from 'react';
import {Link} from 'react-router-dom'

const Author = props => {
    console.log(props)
    return (
        <div>
        <p>
            <Link to={`/authors/${props.author._id}`}>
                {props.author.email}
            </Link>
        </p>
        <button id={props.author._id}
            onClick={props.handleDelete}>
                Delete {props.author.email}
        </button>
        </div>
    )
    
}

export default Author;