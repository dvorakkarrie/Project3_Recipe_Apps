import React from 'react';
import {Link} from 'react-router-dom'

const Author = props => {
    return (
        <div>
        <p>
            <Link to={`/authors/${props.author._id}`}>
                {props.author.name}
            </Link>
        </p>
        {/* <button id={props.author._id}
            onClick={props.handleDelete}>
                Delete {props.author.firstName}
        </button> */}
        </div>
    )
    
}

export default Author;