import React, { useState, useCallback } from 'react'
import TodosContext from './TodosContext'

const TodosProvider = ({ children }) => {
  const [id, setId] = useState(1)
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false)

  const addTodo = useCallback(
    title => {
      console.log('addTodo')
      setTodos([...todos, { id, title }])
      setId(id + 1)
    },
    [todos, id]
  )

  const removeTodo = useCallback(
    todoId => {
      setTodos(todos.filter(todo => todo.id === id))
    },
    [todos]
  )

  const openTodos = () => {
    setOpen(true)
  }

  const closeTodos = () => {
    setOpen(false)
  }

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, open, openTodos, closeTodos }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
