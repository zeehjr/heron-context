import React, { useContext, useState, useCallback } from 'react'
import TodosContext from '../../contexts/Todos/TodosContext'
import UsoTodo from '../../components/UsoTodo'

const Home = () => {
  const [title, setTitle] = useState('')
  const {
    todos,
    addTodo,
    removeTodo,
    open,
    openTodos,
    closeTodos
  } = useContext(TodosContext)

  const handleAddTodo = useCallback(() => {
    console.log('aloga')
    addTodo(title)
    setTitle('')
  }, [addTodo, title])

  return (
    <div>
      <div>
        <button
          onClick={() => {
            if (open) {
              closeTodos()
              return
            }

            openTodos()
          }}
        >
          {open ? 'Close' : 'Open'}
        </button>
      </div>
      {open && (
        <>
          <div>
            {todos.map(todo => (
              <div key={todo.id}>
                {todo.title}
                <button onClick={() => removeTodo(todo.id)}>X</button>
              </div>
            ))}
          </div>
          <div>
            <input
              type='text'
              placeholder='TODO Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
          </div>
        </>
      )}
      <br />
      <br />
      <UsoTodo />
    </div>
  )
}

export default Home
