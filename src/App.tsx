import {Card} from './components/Card'
import React from 'react'
import { Layout } from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Layout>
        Ola Mundo
        <Card 
          id={1} 
          paragraph="JavaScripy"
          details='JavaScripy é uma linguagem de programação interpretada estruturada, de tipagem dinâmica para a web.'
        />
        <Card 
          id={2} 
          paragraph="TypeScript"
          details='TypeScript é uma linguagem de programação de tipagem forte baseada na linguagem JavaScript.'
        />
        <Card 
          id={1} 
          paragraph="Html for React"
          details='HTML é uma linguagem de marcação utilizada na construção de páginas na Web.'
        />
      </Layout>
    </React.Fragment>
  )
}

export default App
