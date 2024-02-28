import { useCallback, useContext, useState } from 'react'
import { Context } from 'context/UserContext'
import Login from 'services/login'
import { UserContextData, UserData } from 'types/users'
import { CustomError } from 'types/errors'

const useUser = () => {
  const { jwt, setJwt } = useContext(Context) as UserContextData
  const [error, setError] = useState<CustomError | null>(null)
  const login = useCallback(
    async ({ username, password }: UserData): Promise<void> => {
      try {
        const res = await Login({ username, password })
        const { token } = res
        window.localStorage.setItem('jwt', token)
        setJwt(token)
      } catch (e) {
        setError(e as CustomError)
      }
    },
    [setJwt]
  )

  const logout = useCallback(() => {
    setJwt(null)
    window.localStorage.removeItem('jwt')
  }, [setJwt])

  return { isLoggedIn: Boolean(jwt), login, logout, error, setError }
}

export default useUser
