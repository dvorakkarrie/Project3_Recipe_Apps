import React from 'react'

const NewAuthor = props => {

        let allRecipes = props.recipes.map(recipe => {
            return (   
                <option key={recipe._id} value={recipe._id}>
                    {recipe.recipeName}
                </option>
            )
        })
        
        return (
            <div className='new-page'>
                <section>
                    <h2>New Author Form</h2>
                    <div>
                        <form onSubmit={props.handleCreateNewAuthor}>
                            <div className='new-div'>
                                <label>Name (First and Last Name):</label>
                                <input className='input-box'
                                    type='text' name="newAuthorName"
                                    onChange={props.handleChange} 
                                    value={props.newAuthorName} />
                            </div>
                            <div className='new-div'>
                                <label>Email Address:</label>
                                <input 
                                    type='text' className='input-box' 
                                    name="newEmail"
                                    placeholder="@gmail.com"
                                    onChange={props.handleChange} 
                                    value={props.newEmail} />
                            </div>
                            <div className='new-div'>
                                <label>Choose a recipe (if available):</label>
                                <select className="drop-down-list" 
                                    id="selectRecipe" name="recipeID"
                                    onChange={props.handleChange}
                                    onClick={props.handleAllRecipeSearch}>                           
                                        {allRecipes}
                                </select>
                            </div>
                            <input className="button" type="submit" 
                                value='Create New Author'/>
                        </form>
                    </div>
                </section>        
            </div>
        )  
}

export default NewAuthor