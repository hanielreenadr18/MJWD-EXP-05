import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [registerNo, setRegisterNo] = useState('')
  const [department, setDepartment] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(
      'Name: ' + name +
      '\nRegister Number: ' + registerNo +
      '\nDepartment: ' + department
    )
  }

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name" required />

        <label>Register Number</label>
        <input type="text" value={registerNo}
          onChange={(event) => setRegisterNo(event.target.value)}
          placeholder="Enter register number" required />

        <label>Department</label>
        <input type="text" value={department}
          onChange={(event) => setDepartment(event.target.value)}
          placeholder="Enter department" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
