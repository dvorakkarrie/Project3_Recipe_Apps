<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# Recipe application

## Project Description
This application allows users to add, find, update and delete authors and add, find and delete their corresponding recipes.

## Project Links
- [github repo](https://github.com/dvorakkarrie/Project3_Recipe_Apps)
- [deployment]()

## Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

* home page (https://wireframe.cc/RPyDHg)
* add new author page (https://wireframe.cc/S1ngqA)
* edit author details page (https://wireframe.cc/u2PdC3)
* add new recipe page (https://wireframe.cc/GRSxIX)
* recipes detail page (https://wireframe.cc/Tabout)
* add new recipe page (https://wireframe.cc/5K2tud)


### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

### MVP - Bronze
#### Add an author
 * assign author's name
 * assign author's email
 * assign recipes
#### Search for an author by email address
#### Delete author
#### Display author details
#### Update an author
 * update author's name
 * update author's email
#### Add a recipe
 * assign recipe name
 * assign image url
 * assign external directions url
 * assign author's name
 * assign cateogy type
 * list further instructions
#### Search for recipe by name
#### Delete recipe
#### Display recipe details

### MBP - Silver
* add recipe category component
* add recipe from author's detail page
* update recipe from details page

#### PostMVP - Gold
* set up database for each ingredient
* add nutrient functionality

## User Stories
* as a user, I can add my name, email address and recipe to the database
* as a user, I can update my name and email address
* as a user, I can delete my name and email address
* as a user, I can create a recipe (name, external url, image, category and instructions)
* as a user, I can update a recipe (name, image, external directions url, category & instructions)
* as a user, I can delete a recipe

## Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include Axios and React Router| 
| Author | This will display a list of each author with a link to direct the user to a details page if the item is clicked |
| AuthorDetails | This will display the details for each author and enable the user to update the author name and email address |
| Home | This will display all the authors and recipes, allow user to search for specific author/recipe, delete an author/recipe, and bring the user back to the home page of the application |
| NewAuthor | This will post a new author to the database with the following data: name, email and recipe |
| NewRecipe | This will post a new recipe to the database with the following data: recipe name, image url, external url, creator's name, category type, and additional instructions |
| Recipe | This will display a list of each recipe with a link to direct the user to a recipe details page if the item is clicked |
| RecipeDetails | This will render the details and image for the selected recipe |

## Time Frames
Time frames are also key in the development cycle.  You have limited time to code all phases of the application (app).  Your estimates can then be used to evalute app possibilities based on time needed and the actual time you have before app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating backend | H | 8hrs| 10hrs | 12hrs |
| Setting up seed file | H | 12hrs| 10hrs | 14hrs |
| Adding Form | H | 16hrs| 20hrs | 20hrs |
| Working with API | H | 8hrs| 6hrs | 6hrs |
| Creating Components | H | 32hrs| 36hrs | 40hrs |
| Total | H | 76hrs| 82hrs | 92hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as ReactStrap, D3, etc.
  - Mongo
  - Express
  - Axios 
  - React Router

  ## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
    let allRecipes = props.recipes.map(recipe => {
        return (   
             <option key={recipe._id} value={recipe._id}>
                {recipe.recipeName}
            </option>
        )
    })
```   
    <div className='new-div'>
        <label>Choose a recipe (if available):</label>
            <select className="drop-down-list" 
                id="selectRecipe" name="recipeID"
                onChange={props.handleChange}
                onClick={props.handleAllRecipeSearch
                >                           
                    {allRecipes}
            </select>
    </div>
```
    let recipesDetail = props.recipes.find(
        recipe => recipe._id === props.match.params.id
      )
        console.log(recipesDetail.category)
    let categoriesDetail = props.categories.find(
        category => category._id ===recipesDetail.category
      )
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

- referential integrity issue #2:  Marc helped us by rewriting the seed file in the correct format.
- Input field issue used to update Author name and email in PUT Axios call #10:  Added handleChange to the component and fix the PUT axios call to include the event.
- Category type was undefined when posting a new recipe:  Corrected the category data field in the POST axios call to match the field in the Recipe backend model.
>>>>>>> 7cb49e6fbc5e1c391df75ae591590decac8f9525
