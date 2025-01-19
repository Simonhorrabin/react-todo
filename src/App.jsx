import { useState } from "react"
import "./styles.css"
export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, SetTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    SetTodos([...todos, {}])
  }
  return<>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"> New Item </label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1>Todo List</h1>
  <ul className="ul-pt">
    <li>
      <label>
        <input type="checkbox" /> Feed Bell
      </label>
      <button className="delete-btn">Delete</button>
    </li>
  </ul>
  </>
  
}