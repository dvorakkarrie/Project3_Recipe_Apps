import React from 'react'
import {Link} from 'react-router-dom'

const AuthorDetails = props => {
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
                Author page
            </section>        
        </div>
    )
}

export default AuthorDetails