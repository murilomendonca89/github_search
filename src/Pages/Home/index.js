import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../assets/constants/BASE_URL'

import { Input, Button, Container } from './styled'

export default function Home() {
  const [user, setUser] = useState('')

  function handleSearch() {
    axios.get(`${BASE_URL}/${user}/repos`).then((response) => {
      const repositories = response.data
      const repositoriesName = []
      repositories.map((repository) => {
        repositoriesName.push(repository.name)

        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        )
      })
    })
  }

  return (
    <Container>
      <Input
        className="userInput"
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <Button type="button" onClick={handleSearch}>
        Pesquisar
      </Button>
    </Container>
  )
}
