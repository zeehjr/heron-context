import { createContext } from 'react'

const DEFAULT_VALUE = {
  todos: [],
  addTodo: title => null,
  removeTodo: todoId => null,
  open: false,
  openTodos: () => null,
  closeTodos: () => null
}

export default createContext(DEFAULT_VALUE)
