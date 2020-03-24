import React from 'react'
import {Link} from 'react-router-dom'

const AuthorDetails = props => {
    console.log(props)
    console.log(props.authors)
    console.log(props.match.params.id)

    // let authorsDetail = props.authors.find(author => 
    //     author._id === props.match.params.id
    // )
    
    return (
        <div>
            <header>
                <h1>Recipe Cookbook</h1>
                <Link to="/">
                    <p 
                        className="home-page-link" 
                        onClick={props.refreshPage}>
                            Home
                    </p>
                </Link>
            </header>
            <section>
                {/* <h2>Author: {authorsDetail.name}</h2>
                <p>{authorsDetail.recipes}</p> */}

            </section>        
        </div>
    )
}

export default AuthorDetails