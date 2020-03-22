import React from 'react'
import Author from './Author'

const Authors = props => {
    console.log(props)
    
    let allAuthors = props.authors.map(author => {
        return (
            <Author
                key={author._id}
                author = {author}
                // handleDelete={props.handleDelete}
            />
        )
    })

    return (
        <div>
            {allAuthors}
        </div>
    )
}

export default Authors