import React, { useState, createContext, ReactNode } from 'react'
import { UserContextData } from 'types/users'

export const Context = createContext<UserContextData | null>(null)

const UserContext = ({ children }: { children: ReactNode }) => {
  const [jwt, setJwt] = useState<string | null>(() =>
    window.localStorage.getItem('jwt')
  )
  return <Context.Provider value={{ jwt, setJwt }}>{children}</Context.Provider>
}

export default UserContext
