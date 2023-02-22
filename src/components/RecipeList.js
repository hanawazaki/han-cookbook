import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/config'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>
  }

  const handleDelete = async (id) => {
    const ref = doc(db, 'recipes', id)
    deleteDoc(ref)
  }

  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} minutes to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <Link to="#" onClick={() => handleDelete(recipe.id)} className='btn-delete'>Delete</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList