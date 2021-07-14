import React, { useState } from 'react'

function App() {
  const [user, setUser] = useState('Murilo')

  return (
    <>
      {user}
      <input
        className="userInput"
        name="user"
        id="user"
        type="text"
        placeholder="Usuário"
      />
      <button type="button">Pesquisar</button>
    </>
  )
}

export default App
