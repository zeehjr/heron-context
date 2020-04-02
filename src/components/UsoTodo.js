import React, { useContext } from 'react'
import TodosContext from '../contexts/Todos/TodosContext'

const UsoTodo = () => {
  const { todos } = useContext(TodosContext)

  return <div>{todos.length} TODOS</div>
}

export default UsoTodo
