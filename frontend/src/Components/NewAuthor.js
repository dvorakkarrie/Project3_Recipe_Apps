import React from 'react'
import {Link} from 'react-router-dom'

const NewAuthor = props => {
    return (
        <div className='new-page'>
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
                <h2>New Author Form</h2>
                <div>
                    <form className="new-form" onSubmit={props.handleSubmitNewAuthor}>
                        <div className='new-div'>
                            <label>Name (First and Last Name):</label>
                            <input 
                                type='text' className='search-box' 
                                onChange={props.handleChangeNewAuthorName} 
                                value={props.newAuthorName}>
                                    {props.value}
                            </input>
                        </div>
                        <div className='new-div'>
                            <label>Email Address:</label>
                            <input 
                                type='text' className='search-box' 
                                placeholder="@gmail.com"
                                onChange={props.handleChangeNewAuthorEmail} 
                                value={props.newAuthorEmail}>
                                    {props.value}
                            </input>
                        </div>
                        <div className='new-div'>
                            <label>Choose a recipe (if available):</label>
                            <select id="selectRecipe">
                                <option value=""></option>
                            </select>
                        </div>
                        <button type="button" onClick={props.handleSubmitNewAuthor}>
                            Submit
                        </button>
                        <input type="submit" style={{display: 'none'}}></input>
                    </form>
                </div>
            </section>        
        </div>
    )
}

export default NewAuthor