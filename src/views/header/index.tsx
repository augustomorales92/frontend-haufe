import React from 'react'
import useUser from 'hooks/useUser'
import './index.css'

const Headers = (): JSX.Element => {
  const { isLoggedIn, logout } = useUser()

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    logout()
  }
  return (
    <header className="App-header">
      <div>{isLoggedIn && <button onClick={handleClick}>Logout</button>}</div>
      <div>
        <h1> Rick and Morty </h1>
      </div>
    </header>
  )
}

export default Headers
