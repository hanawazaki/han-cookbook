import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Searchbar.css'

const Searchbar = () => {
  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`)
  }
  return (
    <div className='search'>
      <form onSubmit={handleSubmit} className='searchbar'>
        <label htmlFor='search'>Search:</label>
        <input type="text" id="search" onChange={(e) => setTerm(e.target.value)}
          required />
      </form>
    </div>
  )
}

export default Searchbar