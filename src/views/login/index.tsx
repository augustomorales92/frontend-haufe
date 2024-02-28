import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from 'hooks/useUser'
import ErrorModal from 'components/modals/ErrorModal'
import Spinner from 'components/spinner'
import './index.css'
import { UserData } from 'types/users'

const Login = (): JSX.Element => {
  const { login, isLoggedIn, error } = useUser()
  const navigate = useNavigate()

  const [user, setUser] = useState<UserData>({ username: '', password: '' })
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    await login({ username: user.username, password: user.password })
    if (!isLoggedIn) setShowModal(true)
    setIsLoading(false)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (isLoggedIn) navigate('/home')
  }, [isLoggedIn, navigate])

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="input-field"
            required
          />
          <button
            type="submit"
            className="submit-button"
            disabled={!user.username || !user.password}
          >
            {isLoading ? <Spinner /> : 'Log in'}
          </button>
        </form>
        {showModal && <ErrorModal closeModal={closeModal} error={error} />}
      </div>
    </div>
  )
}

export default Login
