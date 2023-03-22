import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  const handleShit = () => {
     localStorage.setItem('token','kerwin')
     navigate('/center')
  }

  return (
    <div>Login
      <button onClick={() => handleShit()}>登录</button>
    </div>
  )
}
