import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './assets/constants/BASE_URL'

function App() {
  const [user, setUser] = useState('')

  function handleSearch() {
    axios
      .get(`${BASE_URL}/${user}/repos`)
      .then((response) => console.log(response.data))
  }

  return (
    <>
      <p>{user}</p>
      <input
        className="userInput"
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Pesquisar
      </button>
    </>
  )
}

export default App
