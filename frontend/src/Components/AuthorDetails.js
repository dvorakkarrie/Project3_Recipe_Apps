import React from 'react'
import {Link} from 'react-router-dom'

const AuthorDetails = props => {
    console.log(props)

    let authorsDetail = props.authors.find(
        author => author._id === props.match.params.id )

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === authorsDetail.recipes[0] )

    return (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className='detail-div'>
                    <label className="detail-label">
                        Author:
                    </label>
                    <div className='detail-field'>
                        {authorsDetail.name}
                    </div>
                </div>
                <div className='detail-div'>
                    <label className="detail-label">
                        Email:
                    </label>
                    <div className='detail-field'>
                        {authorsDetail.email}
                    </div>
                </div>          
                <div className='detail-div'>
                    <label className="detail-label">
                        List of Recipies:
                    </label>
                    <div className='detail-list'>
                        <ul>
                            <li>
                                <Link to={`/recipes/${recipesDetail._id}`}>
                                    {recipesDetail.recipeName}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </section>
            <section className="detail-edit-section">
                <div className='detail-div'>
                    <label className="detail-label">
                        Author:
                    </label>
                    <div className='detail-field'>
                        {authorsDetail.name}
                    </div>
                </div>
                <div className='detail-div'>
                    <label className="detail-label">
                        Email:
                    </label>
                    <div className='detail-field'>
                        {authorsDetail.email}
                    </div>
                </div>          
                <div className='detail-div'>
                    <label className="detail-label">
                        List of Recipies:
                    </label>
                    <div className='detail-list'>
                        <ul>
                            <li>
                                <Link to={`/recipes/${recipesDetail._id}`}>
                                    {recipesDetail.recipeName}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </section>
       </div>
    )
}

export default AuthorDetails