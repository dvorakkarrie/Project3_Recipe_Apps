import React from 'react'
import {Link} from 'react-router-dom'

const NewRecipe = (props) => {
    return (
        <div className="new-page">
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
                <h2>New Recipe Form</h2>
                <div>
                    <form className="new-form" onSubmit={props.handleSubmitNewRecipe}>
                        <div className='new-div'>
                            <label>Creator's Name:</label>
                            <input 
                                type='text' className='search-box' 
                                onChange={props.handleChangeNewCreatorName} 
                                value={props.newCreatorName}>
                                    {props.value}
                            </input>
                        </div><div className='new-div'>
                            <label>Recipe Name:</label>
                            <input 
                                type='text' className='search-box' 
                                onChange={props.handleChangeNewRecipeName} 
                                value={props.newRecipeName}>
                                    {props.value}
                            </input>
                        </div>
                        <div className='new-div'>
                            <label>Recipe External Url:</label>
                            <input 
                                type='text' className='search-box' 
                                onChange={props.handleChangeNewRecipeUrl} 
                                value={props.newRecipeUrl}>
                                    {props.value}
                            </input>
                        </div>
                        <div className='new-div'>
                            <label>Recipe Image Url:</label>
                            <input 
                                type='text' className='search-box' 
                                onChange={props.handleChangeNewRecipeImage} 
                                value={props.newRecipeImage}>
                                    {props.value}
                            </input>
                        </div>
                        <div className='new-div'>
                            <label>Choose an ingredient (if available):</label>
                            <select id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <button type="button" onClick={props.handleSubmitNewRecipe}>
                            Submit
                        </button>
                        <input type="submit" style={{display: 'none'}}></input>
                    </form>
                </div>
            </section>           
        </div>
    )
}

export default NewRecipe;