import React from 'react'
import Parser from 'html-react-parser';

const RecipeDetails = props => {
    console.log(props)
    console.log(props.recipes)
    console.log(props.categories)
    console.log(props.match.params.id)

    let recipesDetail = props.recipes.find(
        recipe => recipe._id === props.match.params.id
      )
        console.log(recipesDetail.category)
    let categoriesDetail = props.categories.find(
        category => category._id ===recipesDetail.category
      )

  console.log(categoriesDetail)
    return (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className="detail-img">
                    <img src={recipesDetail.image} 
                        alt="Smiley face" 
                        height="100%" 
                        width="100%">
                    </img>
                </div>
                <div className='detail-div'>
                    <label className="detail-label">
                        Recipe Name:
                    </label>
                    <div className='detail-field'>
                    {recipesDetail.recipeName}
                    </div>
                </div>
                <div className='detail-div'>
                    <label className="detail-label">
                        Category:
                    </label>
                    <div className='detail-field'>
                        {categoriesDetail.type}
                    </div>
                </div>          
                <div>
                    <label className="detail-label">
                        List of Ingredients:
                    </label>
                    <div className='detail-list'>
                        <ul>
                            <li>{Parser(recipesDetail.instructions)}</li>
                        </ul>
                    </div>
                </div>  
                <div className='detail-link'>
                    <a target='_blank' href={recipesDetail.url} rel="noopener noreferrer">Link to Directions:</a>
                </div>  
            </section>
        </div>
    )
}

export default RecipeDetails