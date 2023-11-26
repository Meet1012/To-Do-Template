'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import Create from "./components/Create"
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { RiDeleteBinFill } from "react-icons/ri";


export default function Home() {
  const [todo, settodo] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => settodo(result.data))
      .catch(error => console.log(error))
  }, [])

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/' + id)
      .then(result => location.reload())
      .catch(error => console.log(error))
  }

  const deleteTask = (id) => {
    axios.delete('http://localhost:3001/delete/' + id)
      .then(result => location.reload())
      .catch(error => console.log(error))
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold font-serif mt-12 mb-5">To Do</h1>
      <Create />
      {
        todo.length === 0 ?
          <div>
            <h2 className="text-2xl font-bold font-serif mt-4">No Record</h2>
          </div>
          :
          todo.map(todo => (
            <div>
              <div className="bg-black text-white h-12 w-[600px] flex items-center rounded-lg mt-2">
                <div className="flex items-center">
                  <div onClick={() => handleEdit(todo._id)}>
                    {
                      todo.done ?
                        <RiCheckboxBlankCircleFill className="ml-3 mr-2 text-lg" />
                        :
                        <RiCheckboxBlankCircleLine className="ml-3 mr-2 text-lg" />

                    }
                  </div>
                  <p className={`ml-5 ${todo.done ? "line-through" : ""}`}>{todo.task}</p>
                </div>
                <RiDeleteBinFill onClick={() => deleteTask(todo._id)} className="h-5 w-5 absolute right-[480px] cursor-pointer" />

              </div>
            </div>
          ))
      }
    </div>
  )
}
