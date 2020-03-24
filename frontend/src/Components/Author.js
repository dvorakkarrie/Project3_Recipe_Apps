import React from 'react';
import {Link} from 'react-router-dom'

// import AuthorDetails from './AuthorDetails'

const Author = props => {
    return (
        <div>
            <Link to={`/authors/${props.author._id}`} key={props.author._id}>
                <ul>
                    <li>
                        {props.author.name}
                    </li>
                </ul>                
            </Link>
        </div>
    ) 
}

export default Author;