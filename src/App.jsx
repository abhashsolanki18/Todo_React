import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <div className="container mx-auto my-5 rounded-xl p-5 bg-[#E4B8C6] min-h-[80vh]">
      <div className="addtodo my-5">
        <h2 className='text-xl font-bold'>Add a Todo</h2>
        <input type="text" className='w-80 border-2 border-black'/>
        <button className='bg-purple-600 hover:bg-[#7B506F] p-2 py-1 text-white rounded-md mx-4 font-bold'>Add</button>
      </div>
      <h2 className='text-xl font-bold'>Your Todos</h2>
      <div className="todos">
        <div className="todo flex">
          <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
          <div className="buttons">
            <button className='bg-purple-600 hover:bg-[#7B506F] p-2 py-1 text-white rounded-md mx-2 font-bold'>Edit</button>
            <button className='bg-purple-600 hover:bg-[#7B506F] p-2 py-1 text-white rounded-md mx-2 font-bold'>Delete</button>
          </div>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
