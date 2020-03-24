import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NewAuthor extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            recipeID: ''
        }
    }

    render() {
        console.log(this)
        let allRecipes = this.props.recipes.map(recipe => {
            console.log(recipe)
            return (   
                <option key={recipe._id} value={recipe._id}>
                    {recipe.recipeName}
                </option>
            )
        })
        
        return (
            <div className='new-page'>
                <header>
                    <h1>Recipe Cookbook</h1>
                    <Link to="/">
                        <p 
                            className="home-page-link" 
                            onClick={this.props.refreshPage}>
                                Home
                        </p>
                    </Link>
                </header>
                <section>
                    <h2>New Author Form</h2>
                    <div>
                        <form className="new-form" 
                            onSubmit={this.props.handleSubmitNewAuthor}>
                            <div className='new-div'>
                                <label>Name (First and Last Name):</label>
                                <input 
                                    type='text' className='search-box' 
                                    onChange={this.props.handleChangeNewAuthorName} 
                                    value={this.newAuthorName} />
                            </div>
                            <div className='new-div'>
                                <label>Email Address:</label>
                                <input 
                                    type='text' className='search-box' name="newAuthorEmail"
                                    placeholder="@gmail.com"
                                    onChange={this.props.handleChangeNewAuthorEmail} 
                                    value={this.props.newAuthorEmail} />
                            </div>
                            <div className='new-div'>
                                <label>Choose a recipe (if available):</label>
                                <select id="selectRecipe" name="recipeID"
                                    onChange={this.props.handleChangeNewAuthorEmail}
                                    onClick={this.props.handleAllRecipeSearch}>                           
                                    {allRecipes}
                                </select>
                            </div>
                            <input type="submit" value='Create New Author'/>
                        </form>
                    </div>
                </section>        
            </div>
        )
    }    
}

export default NewAuthor