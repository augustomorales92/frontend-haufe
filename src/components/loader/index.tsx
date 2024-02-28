import React from 'react'
import { LoaderProps } from 'types'
import './index.css'

const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
    <div>
      <span className={`loader ${className}`} />
    </div>
  )
}

export default Loader
