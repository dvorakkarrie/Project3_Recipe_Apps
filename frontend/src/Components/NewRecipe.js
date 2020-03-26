import React from 'react'

const NewRecipe = (props) => {
    console.log(props)

    let allAuthors = props.authors.map(author => {
        return (   
            <option key={author._id} value={author._id}>
                {author.name}
            </option>
        )
    })
    let allCategories = props.categories.map(category => {
        return (
            <option key={category._id} value={category._id}>
                {category.type}
            </option>
        )
    })
    
    return (
        <div className="new-page">
            <section>
                <h2>New Recipe Form</h2>
                <div>
                    <form onSubmit={props.handleCreateNewRecipe}>
                        <div className='new-div'>
                            <label>Recipe Name:</label>
                            <input className='input-box' 
                                type='text' name="newRecipeName"
                                onChange={props.handleChange} 
                                value={props.newRecipeName} />
                        </div>
                        <div className='new-div'>
                            <label>Image Url:</label>
                            <input className='input-box' 
                                type='text' name="newImage"
                                onChange={props.handleChange} 
                                value={props.newImage} />
                        </div>
                        <div className='new-div'>
                            <label>External Url:</label>
                            <input className='input-box' 
                                type='text' name="newUrl" 
                                onChange={props.handleChange} 
                                value={props.newUrl} />
                        </div>
                        <div className='new-div'>
                            <label>Select creator's name:</label>
                            <select className="drop-down-list" 
                                id="selectedCreator" name="authorID"
                                onChange={props.handleChange}
                                onClick={props.handleAllAuthorSearch}>
                                    {allAuthors}
                            </select>
                        </div>
                        <div className='new-div'>
                            <label>Select category:</label>
                            <select className="drop-down-list" 
                                name="categoryID"
                                onChange={props.handleChange}
                                onClick={props.handleAllCategorySearch}>
                                    {allCategories}
                            </select>
                        </div>
                        <div className='new-div'>
                            <label>Instructions:</label>
                            <input className='instructions-box' 
                                type='text' name="newInstructions"
                                onChange={props.handleChange} 
                                value={props.newInstructions} />
                        </div>
                        <input className="button" type="submit" 
                            value='Create New Recipe'></input>
                    </form>
                </div>
            </section>           
        </div>
    )
}

export default NewRecipe;
