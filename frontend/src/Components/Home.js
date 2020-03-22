import React from 'react'
import Author from './Author'

const Home = (props) => {
    console.log(props)
    
    let allAuthors = props.authors.map(author => {
        return (
            <Author 
                key={author._id}
                author = {author}
                handleDelete={props.handleDelete}
            />
        )
    })

    return (
        <div className='main'>
            {/* <form onSubmit={props.handleSubmitSearch}>
                <label>Search by Author's Email:</label>
                 <input type='text' placeholder="@gmail.com" 
                    onChange={props.handleChange} 
                    value={props.text || ""}>{props.value}
                </input>
                <button type="button" onClick={props.handleSubmitSearch}>Search</button>
                <input type='submit' style={{display: 'none'}}></input> 
            </form> */}
            {allAuthors}
        </div>    
    )
}

export default Home;