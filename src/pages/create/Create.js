import { useRef, useState } from 'react'
import './Create.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const navigate = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title, ingredients, method, cookingTime: cookingTime
    }
    try {
      await addDoc(collection(db, 'recipes'), doc)
      navigate.push('/')
    } catch (err) {
      console.log(err)
    }

  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'> add new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>add</button>
          </div>
        </label>
        <p>current ingredient : {ingredients.map(i => <em key={i}>{i},</em>)}</p>
        <label>
          <span>Recipe methods:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>
        <label>
          <span>Cooking time :</span>
          <input type="number" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
        </label>
        <button className='btn' type="submit">Save</button>
      </form>
    </div>
  )
}

export default Create