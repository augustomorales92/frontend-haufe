import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './views/login'
import useUser from './hooks/useUser'
import ProtectedRoute from './utilities/protectedRoute/ProtectedRoute'
import Home from './views/home'
import Headers from './views/header'

function App () {
  const { isLoggedIn } = useUser()

  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
    </div>
  )
}

export default App
