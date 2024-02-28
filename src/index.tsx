import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import UserContext from 'context/UserContext'
import { AxiosInterceptor } from 'utilities/interceptor/AxiosInterceptor'
import ErrorFallback from 'utilities/errorFallback/ErrorFallback'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
AxiosInterceptor()
root.render(
  <div>
    <UserContext>
      <Router>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // should be implemented error boundary reset function here
          }}
          resetKeys={['someKey']}
        >
          <App />
        </ErrorBoundary>
      </Router>
    </UserContext>
  </div>
)
