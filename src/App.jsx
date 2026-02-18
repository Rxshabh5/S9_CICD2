import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [isDashboard, setIsDashboard] = useState(false)

  return (
    <>
      <button onClick={()=>setIsOpen(true) && setIsRegister(false)}>Open Login Part</button>&nbsp;
      <button onClick={()=>setIsRegister(true) && setIsOpen(false)}>Open Register Part</button>&nbsp;
      {isOpen}
      {isOpen && !isRegister && <div className="overlay">
          <div className="modal">
            <h2>Login</h2>
            <input type="text" placeholder="Username" /><br></br>
            <input type="password" placeholder="Password" />
            
            <div className="actions">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false) && setIsDashboard(true) }>Login</button>
            </div>
          </div>
        </div>
      }
      {isRegister &&<div className="overlay">
          <div className="modal">
            <h2>Register</h2>
            <input type="text" placeholder="Username" /><br></br>
            <input type="email" placeholder="Email" /><br></br>
            <input type="password" placeholder="Password" />
            
            <div className="actions">
              <button onClick={() => setIsRegister(false)}>Cancel</button>
              <button onClick={() => setIsRegister(false)}>Register</button>
            </div>
          </div>
        </div>
      }
      {isDashboard && <div className="dashboard">
        <h1>Welcome to the Dashboard!</h1>

        <button onClick={() => setIsDashboard(false)}>Logout</button>
      </div>}
    </>
  )
}

export default App
