import React from 'react'
import { LoaderProps } from 'types'
import './index.css'

const Spinner = ({ className }: LoaderProps): JSX.Element => {
  return (
    <div>
      <span className={`loader ${className}`} />
    </div>
  )
}

export default Spinner
