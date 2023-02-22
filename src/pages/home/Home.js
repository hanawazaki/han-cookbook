import React from 'react'
import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
// import { useAuthContext } from '../../hooks/useAuthContext'

const Home = () => {
  // const { user } = useAuthContext()

  const { data, isPending, error } = useFetch('recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home