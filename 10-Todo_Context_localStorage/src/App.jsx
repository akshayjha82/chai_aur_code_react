import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import Todoform from './components/Todoform';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prevTodo) => [{id:Date.now(),...todo},...prevTodo]);
  }

  const updateTodo = (id,todo) => {
    settodos((prevTodo) =>  prevTodo.map((todoval) => todoval.id === id ? todo : todoval) )
  }

  const deleteTodo = (id) => {
    settodos((prevTodo) => prevTodo.filter((todo)=>todo.id !== id))
  }

  const checkedTodo = (id) => {
    settodos((prevTodo) => prevTodo.map((todo)=>todo.id === id ? {...todo,checked:!todo.checked} : todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      settodos(todos);
    }

  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,checkedTodo}}>
      <div className="bg-[#172842] h-screen py-8 w-screen">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Todoform/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem  todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
