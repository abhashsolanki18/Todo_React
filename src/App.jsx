import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }])
    setTodo("")
  }
  const handleEdit = () => {

  }
  const handleDelete = (e,id) => {
    let newTodos = Todos.filter(item => {
      return item.id!==id;
    });
    setTodos(newTodos)
  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = Todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...Todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-[#E4B8C6] min-h-[80vh]">
        <div className="addtodo my-5">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <input onChange={handleChange} type="text" value={Todo} className='w-80 border-2 border-black' />
          <button onClick={handleAdd} className='bg-purple-600 hover:bg-[#7B506F] p-2 py-1 text-white rounded-md mx-4 font-bold'>Add</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {Todos.map(item => {

            return <div key={item.id} className="todo flex w-1/4 justify-between py-2 ">
              <div className='flex gap-5'>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" className="" value={item.isCompleted} />
              <div className={item.isCompleted ? "line-through" : ""}>{item.Todo}</div>
              </div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-purple-600 hover:bg-[#7B506F] p-2 py-1 text-white rounded-md mx-2 font-bold'>Edit</button>
                <button onClick={(e) => {handleDelete(e, item.id)}} className='bg-purple-600 hover:bg-[#7B506F] p-2 py-1 text-white rounded-md mx-2 font-bold'>Delete</button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
