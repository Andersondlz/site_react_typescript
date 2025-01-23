import React from 'react'
import { Layout } from './components/Layout'
import styled from 'styled-components'

const Box = styled.div`
  background-color: blue;
  border-radius: 5px;
  padding-left: 10px;
`

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Box>
          <h1>Faça o login</h1>
        </Box>
        <label htmlFor="emailInput">Email</label>
        <input type="email" name="" id="emailInput" />
        <label htmlFor="passwordInput">Senha</label>
        <input type="password" name="" id="passwordInput" />
        <button>Entrar</button>
      </Layout>
    </React.Fragment>
  )
}

export default App
