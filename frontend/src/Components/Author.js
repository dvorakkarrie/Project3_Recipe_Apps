import React from 'react';
import {Link} from 'react-router-dom'

const Author = props => {
    return (
        <div>
            <ul >
                <li>
                    <Link to={`/authors/${props.author._id}`}>
                        {props.author.name}
                    </Link>
                </li>
            </ul>
        </div>
    )
    
}

export default Author;