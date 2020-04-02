import React from 'react'
import Home from './pages/Home'
import TodosProvider from './contexts/Todos/TodosProvider'

function App () {
  return (
    <TodosProvider>
      <Home />
    </TodosProvider>
  )
}

export default App
