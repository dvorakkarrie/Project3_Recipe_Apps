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
                <div className='detail-header'>
                    Edit Author Form:
                    <form id={authorsDetail._id} 
                        onChange={props.handleChange} 
                        onSubmit={props.handleUpdateAuthor}>
                    <div className='detail-div'>
                        <label className="detail-label">
                            Author:
                        </label>
                        <input
                            type="text" className='input-box'
                            name="updatedAuthorName"
                            value={props.updatedAuthorName} />
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">
                            Email:
                        </label>
                        <input 
                            type='text' className='input-box' 
                            name="updatedEmail"
                            placeholder="@gmail.com"
                       
                            value={props.updatedEmail} />
                    </div>  
                    <input className="button" type="submit" 
                        value='Update Author'/>         
                    </form>
                </div>
            </section>
       </div>
    )
}

export default AuthorDetails