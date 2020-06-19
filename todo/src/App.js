import React, { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  // ADD NEW ITEM. STORE IN newToDo object. 
  // DISPATCH type ADD_TODO, payload is the newTodo Object

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({ type: "ADD_TODO", payload: newTodo })
  }

  // COMPLETE TODO (MARK COMPLETED)

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETE_TODO", payload: id })
  }

  // CLEAR COMPLETED

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO" })
  }

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />

      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}> Clear Task </button>

    </div>
  );
}

export default App;
