import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Login = () => {

let {user}=useParams()
let navigate=useNavigate();
let handleNavigate=()=>{
navigate("/")
}

  return (
    
    <div>
      <p>
        {user}
      </p>
      <button onClick={handleNavigate}>Move to top</button>
      </div>
  )
}

export default Login