import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useFetchSingle } from '../../hooks/useFetchSingle'
import { useTheme } from '../../hooks/useTheme'
import './Recipe.css'

const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()

  const { data, isPending, error } = useFetchSingle('recipes', id)

  console.log("data", data)

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && (
        <>
          <h2 className={`page-title ${mode}`}>{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul className='ingredients'>{data.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
          </ul>
          <p className='method'>{data.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe